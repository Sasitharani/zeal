import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const SlidingTiles = () => {
    const tiles = [
        { bgColor: '#D8BFD8', textColor: '#2E1A47', text: 'Tile 1' },
        { bgColor: '#98FF98', textColor: '#1A3C34', text: 'Tile 2' },
        { bgColor: '#FFDAB9', textColor: '#4A2C2A', text: 'Tile 3' },
        { bgColor: '#87CEEB', textColor: '#1C2526', text: 'Tile 4' },
        { bgColor: '#FFC107', textColor: '#3C2F2F', text: 'Tile 5' },
        { bgColor: '#FF7F50', textColor: '#FFFFFF', text: 'Tile 6' },
    ];

    return (
        <div className="h-screen w-screen flex">
            {/* Left side */}
            <div className="w-1/4 bg-pink-500 flex flex-col justify-center items-center">
                <h1 className="text-white font-bold text-2xl">Welcome to Sliding Tiles</h1>
                <Link to="/text-animation" className="mt-4 text-white underline">
                    Go to Text Animation
                </Link>
            </div>
            {/* Right side */}
            <div className="w-3/4  bg-pink-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                    {tiles.map((tile, index) => (
                        <div
                            key={index}
                            className="m-0 p-2 flex justify-center items-center"
                            style={{
                                backgroundColor: tile.bgColor,
                                color: tile.textColor,
                                width: '280px',
                                height: '250px',
                                transition: 'transform 0.3s',
                                border: '2px solid #FFF', // Added border
                                borderRadius: '10px', // Added rounded border
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.zIndex = '10'; // Set highest zIndex on hover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.zIndex = '1'; // Reset zIndex on leave
                            }}
                        >
                            {tile.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlidingTiles;
