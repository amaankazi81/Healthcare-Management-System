import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import '../CSS/home.css'

function HomePage(){
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/login');
    }
    return(
        <div className='Home'>
            <h1>Welcome to Sehat Mitr</h1>
            <h2><ReactTyped strings={["Sehat Hai toh Jeevan Hai","Aapki Seva Hamara Kartavya hai"]} typeSpeed={40} /></h2>
            <br />
            <strong><p>Where You can Access and Manage Pateint Details</p></strong>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default HomePage;