import React from 'react'
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './pages/Footer';
function App() {
  return (
    <div>
      <Routes>
        <Route  path='./' element={<Home />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/register' element={<Register />}/>
        <Route  path='./dashboard' element={<Dashboard />}/>
        <Route  path='./projects' element={<Projects />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

