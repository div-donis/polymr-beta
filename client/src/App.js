import './App.css';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react'



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
        
        <BrowserRouter>
        <Redirect to='/app'/>
          <Switch>
            <Route path='/app'>    
              <Dashboard  handleLogout={handleLogout} user={user}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  } else {
    return <LogIn onLogin={setUser} />;
  }
}

export default App;
