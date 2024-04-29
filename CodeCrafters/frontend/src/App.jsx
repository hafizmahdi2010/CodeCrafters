import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import "./App.css"
import Lenis from '@studio-freight/lenis'
import MouseFollower from 'mouse-follower';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/tablet.css"
import "./styles/mobile.css"
import Templates from './pages/Templates';
import InfiniteScrollComponent from './pages/InfiniteScrollComponent';
import SearchPage from './pages/SearchPage';
import SingleTemplate from './pages/SingleTemplate';
import Courses from './pages/Courses';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminHome from './Admin/adminPages/AdminHome';
import AdminLogin from './Admin/adminPages/AdminLogin';
import AddTemplate from './Admin/adminPages/AddTemplate';

const App = () => {
  AOS.init();
  const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
  });

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })
  
  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    // console.log({ scroll, limit, velocity, direction, progress })
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  let isLoggedIn = localStorage.getItem("isLoggedIn");

  let isAdmin = localStorage.getItem("isAdmin");


  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          
          {/* secure routes */}
          <Route path='/' element={isLoggedIn ? <Home/> : <Navigate to="/login" />} />
          <Route path='/templates' element={isLoggedIn ? <Templates/> : <Navigate to="/login" />} />
          <Route path='/search' element={isLoggedIn ? <SearchPage/> : <Navigate to="/login" />} />
          <Route path='/courses' element={isLoggedIn ? <Courses/> : <Navigate to="/login" />} />
          <Route path='/singleTemplate/:id' element={isLoggedIn ? <SingleTemplate/> : <Navigate to="/login" />} />
          <Route path='/test' element={<InfiniteScrollComponent />} />
          <Route path="*" element={<NoPage />} />

          {/* Admin */}

          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/admin' element={isAdmin ? <AdminHome/> : <Navigate to="/adminLogin"/>}/>
          <Route path='/addTemplate' element={<AddTemplate/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App