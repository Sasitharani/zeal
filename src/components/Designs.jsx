import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Designs = () => {
    return (
        <div className="designs-page-container flex justify-center items-center min-h-screen bg-gray-200">
            <div className="designs-container bg-gray-100 p-6 rounded shadow-md">

                <div className='m-4'>
                    <Link to="/parallax" className="text-cyan-900 underline">
                       Design 1 - Parallax
                    </Link>
                </div>
                <div className='m-4'>
                    <Link to="/sliding-tiles" className="text-cyan-900 underline">
                    Design 2 - Sliding Tiles
                    </Link>
                </div>
                <div className='m-4'>
                    <Link to="/Flower-Background" className="text-cyan-900 underline">
                       Pastel Background
                    </Link>
                </div>
                <div className='m-4'>
                    <Link to="/text-animation" className="text-cyan-900 underline">
                        Text Animation
                    </Link>
                </div>
                <div className='m-4'>
                    <Link to="/fonts-use" className="text-cyan-900 underline">
                        Fonts Use
                    </Link>
                </div>
                <div className='m-4'> 
                    <Link to="/customised-designs" className="text-cyan-900 underline">
                        Button/Section Animation
                    </Link>
                </div>
                <div className='m-4'>
                    <Link to="/sliders" className="text-cyan-900 underline">
                        Sliders
                    </Link>
                </div>
            </div>
            <WhatsAppButton />
        </div>
    );
};

export default Designs;
