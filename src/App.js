import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer} from 'react-toastify'

import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import Home from './components/Pages/Home'
import EmailRegister from './components/Pages/EmailRegister';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';

function App() {
  return (<>

<ToastContainer/>
<Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register/complete" component={RegisterPage}/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={EmailRegister} />
        </Switch>
    </div>
    </Router>
  </>
  );
}

export default App;
