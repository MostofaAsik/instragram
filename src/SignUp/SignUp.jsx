import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        toast("Account has been created")
            .then((authUser) => {
                signInWithEmailAndPassword(auth, email, password).then(
                    updateProfile(auth.currentUser, {
                        displayName: username,
                    })
                );
            })
            .catch((err) => {
                alert(err);
            });
    };


    return (
        <div className="flex flex-col ">
            <img
                className='w-[200px] mx-auto mb-4'
                src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                alt=""
            />
            <input
                className='bg-[#ffffff24] border p-2 m-2 text-white'
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                value={email}
            />
            <input
                className='bg-[#ffffff24] border p-2 m-2 text-white'
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="UserName"
                value={username}
            />
            <input
                className='bg-[#ffffff24] border p-2 m-2 text-white'
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}
            />
            <button className='bg-blue-600 border p-2 m-2' onClick={handleSignUp}>SignUp</button>
            <ToastContainer />
        </div>
    );
};

export default SignUp;