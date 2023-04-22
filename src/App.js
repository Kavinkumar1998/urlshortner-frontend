import { Route } from 'react-router-dom';
import './App.css';
import { Signup } from './Components/Signup/Signup';
import { Login } from './Components/Login/Login';
import { VerifyOTP } from './Components/Verifyotp/Verifyotp';
import Forgetpassword from './Components/Forgetpassword/Forgetpassword';
import { Setpassword } from './Components/Setpassword/Setpassword';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">

<Route  exact path = "/">
     <Login/>
      </Route>

   <Route path="/Signup">
  <Signup/>
      </Route>

      <Route path="/Forgetpassword">
     <Forgetpassword/>
      </Route>

      <Route path="/Verifyotp">
     <VerifyOTP/>
      </Route>

      <Route path="/Setpassword">
     <Setpassword/>
      </Route>

      <Route path="/Home">
     <Home/>
      </Route>

      <Route path="/Dashboard">
     <Dashboard/>
      </Route>

    </div>
  );
}

export default App;
