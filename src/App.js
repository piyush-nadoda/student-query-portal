import React,{useEffect} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer} from 'react-toastify'
import { getAuth } from "firebase/auth"
import { useDispatch } from "react-redux";

import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import Home from './components/Pages/Home'
import EmailRegister from './components/Pages/EmailRegister';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';
import { LoggedInUser } from "./actions/actions";
import ForgotPassword from "./components/Pages/forgotPassword";

function App() {

  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => { 
    const unsubscribe =  auth.onAuthStateChanged( async (user) => {
      if(user){
        const idTokenResult = await user.getIdTokenResult();

        dispatch(LoggedInUser(auth.currentUser, idTokenResult.token))
      }
    } )
    return () => unsubscribe();
  }, [dispatch, auth])


  return (<>

<ToastContainer/>
<Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register/complete" component={RegisterPage}/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={EmailRegister} />
          <Route exact path="/forgot/password" component={ForgotPassword} />
        </Switch>
    </div>
    </Router>
  </>
  );
}

export default App;
