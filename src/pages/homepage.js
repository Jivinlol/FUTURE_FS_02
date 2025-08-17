import React from 'react'
import Home from '../components/home.js'
import Navbar from '../components/navbar.js';
import Featured from '../components/featured.js';
import Story  from '../components/story.js';
import Banner from '../components/banner.js';
import Footer from '../components/footer.js';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Featured />
      <Story />
      <Banner />
      <Footer />
    </div>
  )
}

export default Homepage;
