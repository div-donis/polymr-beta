import React from "react";
import { useState } from "react";
import './LogIn.css'

const LogIn = ( { onLogin, user } ) => {
    const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((user) => {
        onLogin(user) 
      }); 
  }
  
  console.log(user)
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="login-error">{user?.errors ? user.errors : null}</div>
    </div>
  );
}

export default LogIn