import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Reset from './Pages/Reset Password/Reset';
import Dashboard from './Pages/Dashboard/Dashboard';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import ResetWithToken from './Pages/Reset Password/ResetWithToken';

import GetEmailForVerification from './Pages/Verify Email/GetEmailForVerification';
import VerifyEmail from './Pages/Verify Email/VerifyEmail';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/register'  element={<Register/>} />
        <Route path='/'  element={<Login/>} />
        <Route path='/reset'  element={<Reset/>} />
        <Route path='/dashboard'  element={<Dashboard/>} />
        <Route path='/forget'  element={<ForgetPassword/>} />
        <Route path='/reset-token'  element={<ResetWithToken/>} />
        <Route path='/verify-token'  element={<VerifyEmail/>} />
        <Route path='/email-for-verification'  element={<GetEmailForVerification/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
