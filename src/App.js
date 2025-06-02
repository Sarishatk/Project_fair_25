import React from 'react'
import './App.css';
import 'animate.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Footer from './components/Footer';
import Auth from './components/Auth'
import { useContext } from 'react';
import { TokenAuthContext } from './ContextSareApi/TokenAuth';

function App() {
    const {isAutherized, setisAutherized} = useContext(TokenAuthContext)
  
  return (

    <div>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/login' element={<Auth />}/>
        <Route  path='/register' element={isAutherized? <Auth register/>:<Home/>}/>
        <Route  path='/dashboard' element={isAutherized? <Dashboard />:<Home/>}/>
        <Route  path='/projects' element={<Projects />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

