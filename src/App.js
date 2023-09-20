import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/login/index';
import Register from './components/registration/index';
import './App.css';

function App() {
  return (
    <Routes>
      
      <Route path='/' Component={Login}/>
      <Route path='/registration' Component={Register}/>
    
  </Routes>
  );
}

export default App;
