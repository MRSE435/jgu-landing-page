import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Programs from "./components/Programs"
import Join from "./components/Join"
import Alumni from "./components/Alumni"
import Campus from './components/Campus'
import Partners from "./components/Partners"
import Lastsection
  from './components/Lastsection'
import Footer
  from './components/Footer'
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Join />
      <Alumni />
      <Campus />
      <Partners />
      <Lastsection />
      <Footer />
    </>

  )
}

export default page
