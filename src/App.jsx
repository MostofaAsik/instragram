import { useDispatch, useSelector } from "react-redux";
import AuthProvider from "./AuthProvider/AuthProvider"
import Authenticate from "./AuthProvider/Authenticate"
import Home from "./Home/Home";
import { useEffect } from "react";
import { auth } from "./Firebase/firebase.config";
import { loginUser, setLoading } from "./redux/userSlice";




function App() {
    const user = useSelector((state) => state.data.user.user);
    const isLoading = useSelector((state) => state.data.user.isLoading);
    const dispatch = useDispatch()
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                dispatch(
                    loginUser({
                        uid: authUser.uid,
                        username: authUser.displayName,
                        email: authUser.email,
                    })
                );
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                console.log("User is not logged in.");
            }
        });
    }, [dispatch]);


    return (
        <div className="bg-black text-white">

            <AuthProvider>
                {user ? <Home /> : <Authenticate />}

                {/* */}
            </AuthProvider>
        </div>
    )
}

export default App
