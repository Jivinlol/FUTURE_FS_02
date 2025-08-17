import React from 'react'
import Monster from '../media/monstera-2.webp'
import '../styles/featured.css'
const Banner = () => {
  return (
         <div className='soilboy'>
          <div className='soildboy_cont'>
            <img src={Monster}></img>
            <h3>Soilboy Lamp - handcrafted in Japan</h3>
            <button>Shop Now</button>
          </div>
        </div>

  )
}

export default Banner;
