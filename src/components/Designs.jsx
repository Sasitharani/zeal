import React from 'react';
import { Link } from 'react-router-dom';

const Designs = () => {
    return (
        <div className='my-12 mx-36 flex justify-center items-center h-screen border-2 border-cyan-900 rounded-lg text-cyan-900'>
      
            <Link to="/customised-designs" className="text-cyan-900 underline">
             Customised Designs
            </Link>
            <Link to="/parallax" className="text-cyan-900 underline">
            Latest Designs
            </Link>
            <Link to="/sliding-tiles" className="text-cyan-900 underline">
            Sliding Tiles
            </Link>
            <Link to="/Flower-Background" className="text-cyan-900 underline">
            Flower Background
            </Link>
            <Link to="/text-animation" className="text-cyan-900 underline">
            Text Animation
            </Link>
        </div>
    );
};

export default Designs;
