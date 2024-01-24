import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './form.css';

function User() {
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const RecordUser = async (e) => {
    e.preventDefault();
    try {
      const body = { user_name, password };
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSuccessMessage('User successfully created! redirecting to login page....');
        setErrorMessage('');
       
        setTimeout(() => {
          window.location = '/';
        }, 2000);
      } else {
        setErrorMessage('Error creating user. Please try again.');
        setSuccessMessage('');
      }
    } catch (err) {
      console.error(err.message);
      setErrorMessage('Error creating user. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <div className="color"></div>

      <form onSubmit={RecordUser}>
        <h1>User Sign-up Form</h1>

        <label>User Name:</label> <br />
        <input
          type="text"
          value={user_name}
          onChange={(e) => setUser_name(e.target.value)}
        />{' '}
        <br />

        <label>Password:</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{' '}
        <br />
        <button>Sign up</button> <br />
        <Link to="/">Have an account? Login Here</Link>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
      </form>
    </div>
  );
}

export default User;
