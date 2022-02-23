import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from "./components/Admin";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import {auth} from './firebase'


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)
        }
    })
  }, [])

  return firebaseUser !== false ? (
    <Router>
          <div className="container">
              <Navbar firebaseUser={firebaseUser}/>

                <Switch>
                    <Route path="/" exact>
                        Ruta de inicio
                    </Route>
                    <Route path="/login">                        
                      <Login/>
                    </Route>
                    <Route path="/admin">
                        Ruta de administracion
                        <Admin/>
                    </Route>
                    
                </Switch>
          </div>
    </Router>
    
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
