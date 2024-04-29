import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import API from '../API.json'
import Footer from '../components/Footer';

const SearchPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  const [results, setResults] = useState([])
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery") || '';

  useEffect(() => {
    setData(API)
  }, [])

  useEffect(() => {
    if (!data) return; // Return if data is not available yet
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  }, [data, searchQuery]);

  
  

  return (
    <>
    <Navbar/>
    <div className="searchContainer">

    <h3 className='text-3xl mb-5'>Search Results For "{searchQuery}", <span className='sp-text'>{results.length}</span> {results.length > 1 ? "Results" : "Result"} Found</h3>
    {
      results ? 
      results.map((elem,index)=>{
        return (
          <>
            <div className="searchResult">
              <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.toocss.com/wp-content/uploads/2023/05/lugx-toocss.jpg" alt="" />
            
              <div className="ml-3 searchDetails relative">
                <h3 className='text-2xl mb-2 line-clamp-1'>{elem.title}</h3>
                <p>{elem.description}</p>

                <div className="flex absolute bottom-1 gap-2 items-center">
                <p className='text-2xl '>{elem.price === 0 ? <span className="text-green-600">FREE</span> : "$"+elem.price}</p>
                <p className='text-green-600 text-1xl line-clamp-3'>Off {elem.discount}%</p>
                </div>
                
              </div>

            </div>
          </>
        )
      }) : ""
    }



    </div>

    <Footer/>
    </>
  )
}

export default SearchPage