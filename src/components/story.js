import React from 'react'
import Story1 from '../media/story3.webp'
import Story2 from '../media/story2.webp'
import Story3 from '../media/story1.webp'
import '../styles/story.css'

const story = () => {
  return (
    <div className='container'>
        <div className='story'>
          <div className='sleft'>
            <h1>Shop our collection of <br></br>ceramics planters</h1>
            <button>Shop now</button>
          </div>
          <div className='sright'><img src={Story1}></img></div>
        </div>
        <div className='story'>
          <div className='sleft1'><img src={Story2}></img></div>
          <div className='sright1'>
          <h1>Shop our collection of <br></br>ceramics planters</h1>
          <button>Shop now</button>
          </div>
        </div>
        <div className='story'>
          <div className='sleft'>
            <h1>Unlike humans, plants<br></br> don’t need to be<br></br> watered everyday.</h1>
            <button className='under'>Shop now</button>
          </div>
          <div className='sright'><img src={Story3}></img></div>
        </div>
         
    </div>
  )
}

export default story
