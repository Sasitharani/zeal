import React from 'react';
import { Link } from 'react-router-dom';

const Designs = () => {
    return (
        <div className='my-12 mx-36 flex justify-center items-center h-screen border-2 border-cyan-900 rounded-lg text-cyan-900'>
      
            <Link to="/customised-designs" className="text-cyan-900 underline">
             Customised Designs
            </Link>
        </div>
    );
};

export default Designs;
