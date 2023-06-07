import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import LoginSignup from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <NavBar onLogout={handleLogout} />
      ) : (
        <LoginSignup onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
