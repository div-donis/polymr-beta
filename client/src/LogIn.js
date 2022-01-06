import React from "react";
import { useState } from "react";
import './LogIn.css'


const LogIn = ( { onLogin, user } ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => console.log(r))
      .then((r) => r.json())
      .then((user) => {
        onLogin(user) 
      })
      .catch((err) => console.log('error', err))
      

  }
  
  console.log(user)
  return (
    <div className='login'>
      <form onSubmit={handleSubmit} autoComplete="new-password" >
        <p>
          <label for="email">Email: {' '}</label>
            <input
              autoComplete="off" 
   
              name='email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </p>
        <p>
          <label for="password">Password: {' '}</label>
            <input
              autoComplete="off"
        
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </p>
        <button type="submit">Login</button>
      </form>
      <div className="login-error">{user?.errors ? user.errors : null}</div>
    </div>
  );
}

export default LogIn