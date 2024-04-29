import React from 'react'
import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <div className="contact py-10" id="contact_compo">
        <div className="contact_left lg:w-[50%] sm:w-[100%]">
          <h1 className='text-5xl'>Have A <span className='sp-text'>Projects</span> And Want To <span className='sp-text'>Collaborate</span> With <span className='sp-text'>codeCrafters.</span></h1>
          <hr className='mt-4' />
          <div className='text-lg mt-10'>
            <p>Email : Email@Gmaill.com</p>
            <p>Phone : 376365544</p>
          </div>

          <h3 className='mt-10 text-3xl'>We Are Social</h3>
          <div className='conatct_social mt-5 flex items-center gap-3'>
            <a href=""><i className="ri-instagram-line"></i></a>
            <a href=""><i className="ri-youtube-line"></i></a>
            <a href=""><i className="ri-facebook-box-line"></i></a>
            <a href=""><i className="ri-github-fill"></i></a>
          </div>

        </div>

        <form className="contact_right">
          <div className="contact_from">
            <h3 className='text-2xl mb-5'>Conatct Us</h3>

            <label htmlFor="name">Enter Your Name</label>
            <input type="text" name='name' id='name' placeholder='Enter Your Name' required />

            <label htmlFor="email">Enter Your Email</label>
            <input type="email" name='email' id='email' placeholder='Enter Your Email' required />

            <label htmlFor="number">Enter Your Phone</label>
            <input type="number" name='number' id='number' placeholder='Enter Your Phone' required />

            <label htmlFor="msg">Enter Your Message</label>
            <textarea name="msg" id="msg" placeholder='Enater Your Message'></textarea>

            <button className="btn mt-3">Submit</button>

          </div>
        </form>

      </div>
    </>
  )
}

export default Contact