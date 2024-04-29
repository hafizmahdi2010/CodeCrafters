import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { RiOpenaiFill } from "react-icons/ri";

const AiSections = () => {
  return (
    <>
      <h1 className='text-center text-4xl my-[5%] mb-[2%]' data-aos="flip-up">Build With AI</h1>
      <div className="aiSection">
      <Parallax speed={-15} className='prallex'>
      <div className="prallex flex items-center h-28 rounded-lg w-80">
      <i className="ri-search-line"></i>
      <i className="ri-openai-fill"></i>
      <i className="ri-bard-fill"></i>
      <i className="ri-brain-line"></i>
      </div>
      </Parallax>


      <Parallax speed={-15} className='prallex'>
      <div className="prallex parallex2 flex items-center h-28 rounded-lg w-80">
      <i className="ri-search-line"></i>
      <i className="ri-openai-fill"></i>
      <i className="ri-bard-fill"></i>
      <i className="ri-brain-line"></i>
      </div>
      </Parallax>

      <div className="aiInputSection">
        <p className='glass absolute bottom-4 rounded-lg left-[20%] flex items-center gap-2 p-4 text-lg w-[450px]'><RiOpenaiFill /> AI Is Generating...</p>
      </div>
      </div>
     
    </>
  )
}

export default AiSections