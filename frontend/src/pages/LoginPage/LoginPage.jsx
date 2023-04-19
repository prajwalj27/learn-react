import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const res = await axios.post('http://localhost:8080/login', formData);
      console.log(res);
      setIsUserLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="joe@email.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>

      {isUserLoggedIn ? <p>User is Logged in</p> : <p>User not logged in</p>}
    </div>
  );
};

export default LoginPage;
