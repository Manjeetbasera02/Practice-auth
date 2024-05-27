import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Authentication/Home';
import Registration from './components/Authentication/Registration';
import Login from './components/Authentication/Login';
import { Contextprovider, usercontext } from './components/Contextapi/Contextapi';

const App = () => {

  const user = useContext(usercontext)
  
  return <>
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={user.email ? <Home/> : <Navigate to='/login'/>}></Route>
    <Route path='/regi' element={user.email ? <Navigate to='/'/> : <Registration/>}></Route>
    <Route path='/login' element={user.email ? <Navigate to='/'/> : <Login/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App