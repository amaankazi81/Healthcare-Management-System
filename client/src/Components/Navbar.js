import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/navbar.css'

function Navbar(){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userToken'); 
        navigate('/login');
    };

    return(

        <div className="navbar">
            <nav>
                <h1>Sehat Mitr</h1>
                <button onClick={handleLogout}>Log out</button>
            </nav>
    </div>
    )
}

export default Navbar;