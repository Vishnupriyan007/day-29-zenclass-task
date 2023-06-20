import './App.css'
// import Sidebar from './components/Sidebar'
// import {  Routes, Route, useNavigate } from 'react-router-dom'
// import Home from './components/Pages/Home'
// import Dashboard from './components/Pages/Dashboard'
// import Students from './components/Pages/Students'
// import ManageStudents from './components/Pages/ManageStudents'
// import Teachers from './components/Pages/Teachers'
// import ManageTeachers from './components/Pages/ManageTeachers'
// import { useState } from 'react'
// import Navbar from './components/Navbar'

import React,{useState} from 'react';
import AuthContext from './context/AuthContext';
import Navigation from './components/Navigation';



function App() {



  const [auth,setAuth]=useState(false);






  return (
    <><div className='Header'>
          <a href = 'https://github.com/Jagadeesh-Kumar-Initial-Is-S' target = '_blank' alt='header' >Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</a>
   </div>
   <div className="App">
      <header className="App-header">

        <AuthContext.Provider value={{
          isLoggedIn: auth,
          setLoggedIn:(value)=>{
            setAuth(value);
          }
        }}>
          <Navigation />
        </AuthContext.Provider>

      </header>
    </div>

    
</>

  )
}

export default App