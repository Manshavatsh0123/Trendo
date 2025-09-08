import React from 'react'
import Carusol from '../components/Carusol'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'


const Home = () => {
  return (
    <div className="mt-24 mb-10 px-5">
      <Carusol />
      <MidBanner />
      <Features />
    </div>
  )
}

export default Home