import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/login/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import { AuthProvider } from './context/authContext';
import ResetPassword from './components/login/ResetPassword';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>} />

        <Route path='/register' element={<Register/>} />

        <Route path='/resetpassword' element={<ResetPassword/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
