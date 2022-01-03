import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = ({ onLogin, user }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [username, setUsername] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              name: name,
              email: email,
              password: password,
              password_confirmation: passwordConfirmation,
              username: username,
              account_id: '1',
              bio: '',
              company: company,
              admin: false,
              avi: 'https://i.imgur.com/yAh3r57.jpg'}
          }),
        })
        .then((r) => r.json())
        .then((user) => {
          onLogin(user) 
        }); 
      }

      return (
        <div className="login">
          <div id='signup-link' onClick={() => navigate('/signin')}>Log In</div>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="password_confirmation">Confirm:</label>
              <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </p>
            
            <button type="submit">Submit</button>
          </form>
          <div className="login-error">{user?.errors ? user.errors : null}</div>
        </div>
      );
}

export default SignUp