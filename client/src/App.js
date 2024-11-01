import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
  );
}

export default App;
