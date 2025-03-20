import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import CtaBlock from './components/CtaBlock'
import CaseSubhead from './components/CaseSubhead'
import Case from './components/Case'
import Process from './components/Process'
import Tean from './components/Tean'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-[8vw] '>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <CtaBlock />
      <CaseSubhead />
      <Case />
      <Process />
      <Tean />
      <Contact />
      <Footer />
      {/*need to add carousel here*/}
      {/* <Testimonials />  */}
    </div>
  )
}

export default App