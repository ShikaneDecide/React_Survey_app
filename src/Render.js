

import React, { useState, useEffect } from 'react';
import Savey from './Questions';
import LoginSignup from './Login';
import "./App.css";

function Render() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setIsLoggedIn(true);
  };

  const handleSignUp = (newToken) => {
    localStorage.setItem('token', newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };


  return (
    <div>
      {isLoggedIn ? (
        <Savey onLogout={handleLogout} />
      ) : (
        <LoginSignup onLogin={handleLogin} /> || <LoginSignup onSignUp={handleSignUp} />
      )}
    </div>
  );
}

export default Render;

