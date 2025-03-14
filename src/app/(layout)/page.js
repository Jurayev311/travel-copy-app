import Discover from '@/components/Discover'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Point from '@/components/Point'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <Point />
      <Discover />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home