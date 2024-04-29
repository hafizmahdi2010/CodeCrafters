import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TemplateCard from '../components/TemplateCard'
import FakeTemApi from '../API.json'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Templates = () => {

  const [allData, setAllData] = useState(null);
  const [filterData, setFilterData] = useState(null);



  const [searchVal, setSearchVal] = useState("")
  const navigate = useNavigate();


  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?searchQuery=${searchVal}`)
    }
  }


  useEffect(() => {
    setAllData(FakeTemApi)
    setFilterData(allData)
  }, [])
  
  
  return (
    <>
      <Navbar />
      <div className="tamplatesHero">
        <div className="tem_left">
          <h1>Get <span className='sp-text'>Awsome</span> Modern Websites Templates <br /> With <span className='sp-text'>codeCrafters.</span></h1>
          <div className="flex items-center gap-3 mt-5">
            <button className="btnRed">Paid Templetes</button>
            <button className="btn">Free Templetes</button>
          </div>
        </div>

        <div className="tem_right">
          <img src="https://themeforest.img.customer.envatousercontent.com/files/255162553/01_banner.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=219ed4b3122fa8033a48342ccf2dea8f" alt="" />
        </div>
      </div>

      <div className="searchTemHead">
        <h3 className='text-4xl'><span className='sp-text'>Templ</span>ates</h3>

        <div className="inputBox">
          <input onChange={(e)=>setSearchVal(e.target.value)} value={searchVal} onKeyUp={(e)=>checkEnter(e)} type="text" placeholder='Search Templates Here...' />
          <i className="ri-search-line text-xl mr-3 cursor-pointer"></i>
        </div>

      </div>
      <div className="gridContainer mt-5 mb-5">
        {
          allData ? 
          allData.map((elem,index)=>{
            return (
              <>
                <TemplateCard elem={elem}/>
              </>
            )
          }) : "No Data"
        }
      </div>

      <Footer/>
    </>
  )
}

export default Templates