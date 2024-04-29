import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Courses = () => {
  const [searchVal, setSearchVal] = useState("")


  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      console.log("Enter Press");
    }
  }

 
  return (
    <>
    <Navbar/>

    <div className="container-center min-h-screen">

    <div className="searchTemHead w-[100%] pr-16">
        <h3 className='text-4xl'><span className='sp-text'>Cour</span>ses</h3>

        <div className="inputBox">
          <input onChange={(e)=>setSearchVal(e.target.value)} value={searchVal} onKeyUp={(e)=>checkEnter(e)} type="text" placeholder='Search Courses Here...' />
          <i className="ri-search-line text-xl mr-3 cursor-pointer"></i>
        </div>

      </div>

    <div className="courses mb-5 mt-4 grid-container-three">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>


    </div>

    <Footer/>
    </>
  )
}

export default Courses