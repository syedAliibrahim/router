// import React from 'react'
// import { BrowserRouter as Route, Routes,Router } from "react-router-dom";
// import Home from '../components/Home';
// // import {}
// function AppRouter() {
//   return (
  
//       <Routes>
//          <Route path='/' element={<Home/>}/>
//        </Routes>
  
//   )
// }

// export default AppRouter


import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import About from '../components/About';
import ClassRoom from '../components/ClassRoom';
import Contact from '../components/Contact';
import Cuser from '../components/Cuser';
import Dashboard from '../components/Dashboard';
// import './App.css';
import Home from '../components/Home'
import NavBar from '../components/navBar';
import Student from '../components/Student';
import Teacher from '../components/Teacher';
// 
// import AppRouter from'../src/config/AppRouter'

function Appr() {
  // const navigate = useNavigate();
  // const NavigateToAbout=()=>{
  //   navigate('/about');
  // }
  return (
    <>
       <BrowserRouter>
       <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cuser/:name' element={<Cuser/>}/>
            {/* <Route path='/*' element={<h1>page not find</h1>}/> */}
            <Route path='/dashboard/' element={<Dashboard/>}>
              <Route path='teacher' element={<Teacher/>}/>
              <Route path='student' element={<Student/>}/>
              <Route path='classroom' element={<ClassRoom/>}/>
            </Route>
          </Routes>
          
       </BrowserRouter>
    </>
  );
}

export default Appr;