import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="h-left">
          <p>Welcome To The</p>
          <h1 id="hero-main-text"><span className="text-green-400">codeCrafters.</span> Where You Will Find Modern Animated
            Websites. <br /> With Best <span className="text-green-400">Prices</span></h1>
          <button className="btn mt-5 bg-green-400">Get Started</button>
        </div>


        <div className="h-right">
          <div className="h-r-bg">
            <div className="circle-bg bg-yellow-300"></div>
            <div className="circle-bg bg-pink-300 ml-[30%]"></div>
            <div className="circle-bg bg-blue-300 mt-[30%] ml-[20%]"></div>
            <div className="card flex w-[70%] h-[80%] p-5 bg-blue-300 rounded-lg flex-col">
              <h3 className="text-2xl mb-5">Animated Websites</h3>
              <p><i className="ri-check-line bg-green-500 mr-2 cursor-pointer"></i> Responsive Layout</p>
              <p><i className="ri-check-line bg-green-500 mr-2 cursor-pointer"></i> Animated Components</p>
              <p><i className="ri-check-line bg-green-500 mr-2 cursor-pointer"></i> 10 Pages Free</p>
              <p><i className="ri-check-line bg-green-500 mr-2 cursor-pointer"></i> Free Deployment</p>
              <p><i className="ri-check-line bg-green-500 mr-2 cursor-pointer"></i> 30+ Components</p>
              <p><i className="ri-check-line bg-green-500 mr-2 cursor-pointer"></i> Much More, etc</p>

            </div>
          </div>
        </div>

        <div className="h-r-b">
          <h3 className="text-xl text-left">
            <i className="ri-double-quotes-l"></i>
            Don't Waste Your Time In Creating Simple <br /> Websites Its Your Time <br /> To Level Up And Create <br /> Some Magic
            With <span className="text-green-600">codeCrafters.</span>
            <i className="ri-double-quotes-r"></i>
          </h3>
        </div>

      </div>

    </>
  )
}

export default Hero