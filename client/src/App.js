import './App.css';
import LogIn from './LogIn';  
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import Navigation from './Navigation';
import User from './User';
import TaskGrid from './TaskGrid';



const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/self").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);





  

  if (user) {
    return(
      <div className="App">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/signin" element={<Navigate to="/tasks" />} />
            <Route path='/tasks/*' element={<><TaskGrid user={user}/><User setUser={setUser} user={user}/></>} />   
          </Routes>
        </BrowserRouter>
      </div>
    )
  } else {
    return( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path='/signin' element={<LogIn onLogin={setUser} />} /> 
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
