import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiSections from '../components/AiSections'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testamonials from '../components/Testamonials'
import Skils from '../components/Skils'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".upper", {
      scrollTrigger: {
        trigger: ".upper",
        start: "top center",
        end: "bottom 30%",
        markers: false,
        scrub: true
      },
      width: "100%"
    })
  }, [])



  return (
    <>
      <Navbar />
      <Hero />
      {/* <AiSections /> */}
      {/* <Services /> */}
      <div className="quote">
        <h3 className="inner">
          Don't Waste Your <span className="sp-text text-green-500">Important</span>
          Time In Building Normal Websites <br /> Its Your Time To Create Modern <span className="sp-text text-green-500">Animated</span> Website
        </h3>

        <h3 className="upper">Don't Waste Your <span className="sp-text text-green-500">Important</span>
          Time In Building Normal Websites <br /> Its Your Time To Create Modern <span className="sp-text text-green-500">Animated</span> Website
        </h3>
      </div>
      <Projects />
      <Testamonials />
      <Skils />
      <Contact />
      <Footer />
    </>
  )
}

export default Home