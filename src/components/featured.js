import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/featured.css'; // go one level up from /components to /styles

// Import images from /media
import product1 from '../media/pot1.webp';
import product2 from '../media/pot2.webp';
import product3 from '../media/pot4.webp';
import table from '../media/table.webp';
import shelf1 from '../media/shelf1.webp';
import shelf2 from '../media/shelf2.webp';
import shelf3 from '../media/shelf3.webp';

const Featured = () => {
  return (
    <div>
      <div className='featured'>
        <h1>Featured Products</h1>
        <button>View all </button>
        <div className='products_featured'>
          <Link to="/product/feroniella-bonsai" className='card'>
            <img src={product1} style={{width:'auto',height:'auto'}} alt="Feroniella Bonsai" />
            <h3>Feroniella Bonsai</h3>
            <p>from SGD 148.00</p>
          </Link>
          <Link to="/product/variegated-three-leaf-clover" className='card'>
            <img src={product2} style={{width:'auto',height:'auto'}} alt="Variegated Three Leaf Clover" />
            <h3>Variegated Three Leaf Clover</h3>
            <p>SGD 228.00</p>
          </Link>
          <Link to="/product/three-leaf-clover" className='card'>
            <img src={product3} style={{width:'auto',height:'auto'}} alt="Three Leaf Clover" />
            <h3>Three Leaf Clover</h3>
            <p>SGD 98.00</p>
          </Link>
        </div>
      </div>

      <div className='soilboy'>
        <div className='soildboy_cont'>
          <img src={table} alt="Soilboy Lamp" />
          <h3>Soilboy Lamp - handcrafted in Japan</h3>
          <button>Shop Now</button>
        </div>
      </div>

      <div className='featured'>
        <h1>Soilboy Modular Shelves</h1>
        <p className='fxpa'>A thoughtful collaboration between Soilboy & Rhombus Lab.</p>
        <button className='fxva'>View all </button>
        <div className='products_featured'>
          <Link to="/product/soilboy-plant-stand-ivory" className='card'>
            <img src={shelf1} style={{width:'auto',height:'auto'}} alt="Soilboy Modular Plant Stand - Ivory" />
            <h3>soilboy-plant-stand-ivory</h3>
            <p>from SGD 148.00</p>
          </Link>
          <Link to="/product/soilboy-plant-trolley" className='card'>
            <img src={shelf2} style={{width:'auto',height:'auto'}} alt="Soilboy Modular Plant Trolley" />
            <h3>soilboy-plant-trolley</h3>
            <p>SGD 228.00</p>
          </Link>
          <Link to="/product/soilboy-plant-stand-black" className='card'>
            <img src={shelf3} style={{width:'auto',height:'auto'}} alt="Soilboy Modular Plant Stand - Black" />
            <h3>soilboy-plant-stand-black</h3>
            <p>SGD 98.00</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured;
