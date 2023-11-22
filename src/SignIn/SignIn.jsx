import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.config';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password);

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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}
            />
            <button className='bg-blue-600 border p-2 m-2' onClick={handleLogin}>SignIn</button>
        </div>
    );
};

export default SignIn;