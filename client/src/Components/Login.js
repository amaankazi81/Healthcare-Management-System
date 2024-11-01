import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ReactTyped } from "react-typed";
import '../CSS/login.css';
import logo from './logo.ico';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAGgugdCOc_4WJXrP_SInRC7t9EzcJd3Bo",
    authDomain: "healthcare-management-sy-3e4aa.firebaseapp.com",
    projectId: "healthcare-management-sy-3e4aa",
    storageBucket: "healthcare-management-sy-3e4aa.appspot.com",
    messagingSenderId: "784512196542",
    appId: "1:784512196542:web:11b6118841d17d2e89a3ef",
    measurementId: "G-L9FPXL0WD6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Handle login click
    const handleLoginClick = async () => {
        try {
            // Sign in using Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await userCredential.user.getIdToken();
            console.log('ID Token from Firebase:', idToken);

            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idToken }),
            });

            if (response.ok) {
                const data = await response.json();
                const { uid } = data;

                // Navigate based on user role or email
                if (email === 'admin@gmail.com' || email === 'admin2@gmail.com') { 
                    navigate('/admin');
                } else {
                    navigate('/user'); 
                }
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login Failed', error);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login">
            <div className="title">
                <h1>Sehat Mitr</h1>
                <h4><ReactTyped strings={["Sehat Hai toh Jeevan Hai","Aapki Seva Hamara Kartavya hai"]} typeSpeed={40} /></h4>
            </div>
            <div className="log-con">
                <div className="hl"><img src={logo} alt="Logo" /><h2>Admin Login</h2></div>
                <div className="ipt">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={handleLoginClick}>Login</button>
                    <div className="err">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
