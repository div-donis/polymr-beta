import './App.css';
import LogIn from './LogIn';
import Task from './Task';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
  }

  

  if (user) {
    console.log(user)
    return(
      <div className="App">
        <Navigation />
        <BrowserRouter>
        <Redirect to='/tasks'/>
          <Switch>
            <Route path='/tasks'>    
              <TaskGrid user={user}/>
            </Route>
            <Route name='task' path="/task/:id">
              <Task />
            </Route>
          </Switch>
        </BrowserRouter>
        <User handleLogout={handleLogout} user={user}/>
      </div>
    )
  } else {
    return( 
      <BrowserRouter>
      <Redirect to='/signin'/>
        <Route path='/signin'> 
          <LogIn onLogin={setUser} />
        </Route>
      </BrowserRouter>
    )
  }
}

export default App;
