import './App.css';
import LogIn from './LogIn';  
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import Navigation from './Navigation';
import User from './User';
import TaskGrid from './TaskGrid';
import SignUp from './SignUp';

const App = () => {

  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/self").then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user)
        })
      }else{
        navigate('/signin')
      }
    });
  }, []); 

  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true)
  }
  
  const getMode = () => {
    const storedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"))
    return storedDarkMode || false
  }

  const [darkMode, setDarkMode] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", JSON.stringify(darkMode));
  }, [darkMode]);

  if (user?.email) {
    return(
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
          <div className='plate'>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Navigate to="/tasks" />}/>
              <Route path="/signin" element={<Navigate to="/tasks" />}/>
              <Route path='/tasks/*' element={<TaskGrid user={user}/>}/> 
              <Route element={<Navigate to="/tasks" />}/>
            </Routes>
          <User 
            setUser={setUser} 
            user={user} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    )
  } else {
    return(
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <div className='plate'>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />}/>
            <Route path='/signin' element={<LogIn onLogin={setUser} user={user}/>}/> 
            <Route path='/signup' element={<SignUp onLogin={setUser} user={user}/>}/>
          </Routes>
        </div>        
      </div>
    )
  }
}

{/*comment*/}

export default App;
