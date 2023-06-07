import React, { useState } from "react";
import axios from "axios";
// import "./Login.css";
import SignUp from "./Signup";

const LoginSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/app/login", credentials)
      .then((response) => {
        console.log(response.data);
        setEmail("");
        setPassword("");
        setShowForm(false);
        props.onLogin(response.data.token);
        alert("Login Successful!");
      })
      .catch((error) => {
        alert("Enter A Valid Username or Password!");
        console.log(error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    setShowForm(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowForm(false);
    setShowSignUp(true);
  };

  return (
    <>
      {!showForm && !showSignUp && (
        <>
          <h1 style={{ marginTop: "350px", textAlign: "center" }}>
            Welcome to our survey website!
          </h1>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "10vh",
                fontSize: "3rem",
                marginBottom: "2rem",
                backgroundColor: "#1c1c1c",
                color: "#fff",
                border: "none",
                padding: "1rem 2.5rem",
                margin: "0.5rem",
                borderRadius: "5px",
                fontSize: "1.2rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "10vh",
                fontSize: "3rem",
                marginBottom: "rem",
                backgroundColor: "#1c1c1c",
                color: "#fff",
                border: "none",
                padding: "1rem 2rem",
                margin: "0.5rem",
                borderRadius: "5px",
                fontSize: "1.2rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                marginLeft: "0px",
              }}
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
        </>
      )}

      {showForm && (
        <form
          style={{
            maxWidth: "450px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "200px",
          }}
          onSubmit={handleSubmit}
        >
          <label>
            Username:
            <input
              type="email"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
              className="form-control form-group"
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control form-group"
              required
            />
          </label>
          <br />
          <button className="btn btn-danger btn-block">Login</button>

          {showForm && (
            <p>
              Don't have an account?{" "}
              <button onClick={handleSignUpClick}>Sign up</button>{" "}
            </p>
          )}
        </form>
      )}

      {showSignUp && (
        <SignUp onHide={() => setShowSignUp(false)} onLogin={props.onLogin} />
      )}
    </>
  );
};

export default LoginSignup;
