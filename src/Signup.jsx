import React, { useState } from 'react';
import axios from 'axios';
 import './Signup.css';
import LoginSignup from './Login';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);

  
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleButtonClick = () => {
    setShowForm(true);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if ( !email || !password) {
      alert('Please Enter Login details.');
      return;
    }

    const registered = {
      
      email,
      password,
    };

    axios
      .post('http://localhost:4000/app/signup', registered)
      .then((response) => {
        console.log(response.data);
        
        setEmail('');
        setPassword('');
        alert('User registered successfully');
        setLoginSuccess(true);
        setShowForm(false); // hide the form after successful registration
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      });
  };

  return (
    <div>{showForm && (
      <form
      style={{
        maxWidth: "450px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "200px",
      }}
      onSubmit={onSubmit}>
       <h4 style={{ textAlign: "center"  }}>Sign Up</h4> <br/>
        <label>
          E-Mail Address:
          <input
            type="email"
            placeholder="e.g shikaned@gmail.com"
            onChange={changeEmail}
            value={email}
            className="form-control form-group"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            onChange={changePassword}
            value={password}
            className="form-control form-group"
          />
        </label>
        <br />

        
          <input
            type="submit"
            className="btn btn-danger btn-block"
            onClick={handleButtonClick}
            value="Sign in"
          />
        

       
      </form>)} 
      {loginSuccess && <LoginSignup />}
    </div>
  );
}

export default SignUp;

