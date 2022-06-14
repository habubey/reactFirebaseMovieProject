import React from 'react'
import { useState } from "react";
import { createUser, signIn } from "../auth/Firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const displayName = `${email} ${password}`;
    e.preventDefault();
    signIn(email, password)
    createUser(email, password, displayName, navigate);
    navigate("/")
    console.log(email, password);
  };


  return (
    <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            // onSubmit={handleSubmit}
          />
        </form>
      </div>
  )
}

export default Login