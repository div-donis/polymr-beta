import React from "react";
import { useState } from "react";
import './LogIn.css'
import { useNavigate } from 'react-router-dom'

const LogIn = ( { onLogin, user } ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((user) => {
        onLogin(user) 
      })
      

  }
  
  console.log(user)
  return (
    <div className='login'>
      {/*<div id='signup-link' onClick={() => {navigate('/signup')
        onLogin('')} }>Sign Up</div>*/}
      <form onSubmit={handleSubmit} autoComplete="new-password" >
        <p>
          <label for="email">Email: {' '}</label>
            <input
              autoComplete="off" 
              readOnly={readOnly}
              onFocus={ () => setReadOnly(false) }
              onBlur={ () => setReadOnly(true) }
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
              readOnly={readOnly}
              onFocus={ () => setReadOnly(false) }
              onBlur={ () => setReadOnly(true) }
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