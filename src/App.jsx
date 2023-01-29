import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./Login";
import ForgotPassword from './Forgot_password';
import SignUp from './SignUp';
import Users from './Users';
import Counter from './Counter';
import Dashboard from './Dashboard';
import Company from './Company';

import './css/style.css';
import './css/animate.min.css';

function App() {
  return (
    
    <Router>
        <div className='App'>
            <Routes>
                <Route path='/' exact element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/forgot_password' element={<ForgotPassword/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/Counter' element={<Counter/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/company' element={<Company/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
