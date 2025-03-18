import React from 'react';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
    return (
        <nav className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
            <a
                href="#"
                className="hover:animate-shake px-4 py-2 rounded"
            >
                Button Shake
            </a>
            <a
                href="#"
                className="hover:border-2 hover:border-blue-500 px-4 py-2 rounded border border-transparent"
            >
                Border Animation
            </a>
            <a
                href="#"
                className="hover:text-yellow-500 px-4 py-2 rounded"
            >
                Text Color Change
            </a>
            <a
                href="#"
                className="hover:shadow-lg hover:shadow-blue-500 px-4 py-2 rounded"
            >
                Shadow Effect
            </a>
            <a
                href="#"
                className="hover:rotate-6 transform px-4 py-2 rounded"
            >
                Rotate
            </a>
            <a
                href="#"
                className="hover:bg-blue-500 px-4 py-2 rounded"
            >
                Change Background Color
            </a>
            <a
                href="#"
                className="hover:animate-bounce px-4 py-2 rounded"
            >
                Bounce
            </a>
            <a
                href="#"
                className="hover:opacity-50 px-4 py-2 rounded"
            >
                Fade In/Out
            </a>
            <a
                href="#"
                className="hover:animate-pulse px-4 py-2 rounded"
            >
                Pulse Effect
            </a>
            <a
                href="#"
                className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 px-4 py-2 rounded"
            >
                Gradient Background Animation
            </a>
        </nav>
    );
};

export default Navbar;
