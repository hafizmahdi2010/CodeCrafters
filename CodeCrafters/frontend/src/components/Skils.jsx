import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap';

const Skils = () => {

  
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const progElements = document.querySelectorAll(".progr");

  //   progElements.forEach((e) => {
  //     const elemPer = e.getAttribute("data-per");

  //     gsap.to(e, {
  //       scrollTrigger: {
  //         trigger: e,
  //         start: "top center",
  //         end: "bottom 30%",
  //         // markers: true,
  //         scrub: true,
  //       },
  //       width: `${elemPer}%`,
  //       duration: 2,
  //     });
  //   });
  // }, []); // Empty dependency array ensures this effect runs only once after initial render



  return (
    <>
      <div className="skils">
        <h1 className='text-4xl mb-10'>My Skils On My Works.</h1>
        <div className="mb-1 text-base font-medium text-green-500">Modern Website</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
          <div className="h-2.5 rounded-full progr bg-green-500" style={{ width: "95%" }}></div>
        </div>
        <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Dinaminc Web Application</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
          <div className="bg-blue-600 h-2.5 rounded-full progr" data-per="80" style={{ width: "80%" }}></div>
        </div>
        <div className="mb-1 text-base font-medium text-green-500">AI Development</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
          <div className="h-2.5 rounded-full progr bg-green-500" data-per="93" style={{ width: "93%" }}></div>
        </div>
        <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Animated Websites</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
          <div className="h-2.5 rounded-full progr bg-green-500" data-per="89" style={{ width: "89%" }}></div>
        </div>
        <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Software Development</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
          <div className="bg-yellow-400 h-2.5 rounded-full progr" data-per="75" style={{ width: "75%" }}></div>
        </div>
        <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">Teaching</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 ">
          <div className="bg-indigo-600 h-2.5 rounded-full progr dark:bg-indigo-500" data-per="79" style={{ width: "79%" }}></div>
        </div>
      </div>
    </>
  )
}

export default Skils