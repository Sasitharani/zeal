import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/AntBorderAnimation.css'; // Import the new CSS file

const Animations = () => {
    return (
        <div className="h-screen overflow-y-scroll mt-16 pb-16">
            <div className="flex flex-col items-center p-4 bg-gradient-to-br from-cyan-700 via-cyan-800 via-cyan-600 via-blue-500 via-gray-700 to-cyan-900 rounded-2xl">
                <h1 className="text-2xl font-bold text-white mb-4">
                    Hover to see the animation
                </h1>
                {/* install npm tailwindcss-animate.css to use these animation */}
                <div className="grid grid-cols-3 gap-4 text-white">
                    <div className="border border-white p-4 rounded hover:animate-bounce">
                        Button Shake
                    </div>
                    <div className="border border-white p-4 rounded hover:border-blue-500">
                        Border Animation
                    </div>
                    <div className="border border-white p-4 rounded hover:text-yellow-500">
                        Text Color Change
                    </div>
                    <div className="border border-white p-4 rounded hover:shadow-lg hover:shadow-blue-500">
                        Shadow Effect
                    </div>
                    <div className="border border-white p-4 rounded hover:rotate-6 transform">
                        Rotate
                    </div>
                    <div className="border border-white p-4 rounded hover:bg-blue-500">
                        Change Background Color
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-bounce">
                        Bounce
                    </div>
                    <div className="border border-white p-4 rounded hover:opacity-50">
                        Fade In/Out
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-pulse">
                        Pulse Effect
                    </div>
                    <div className="border border-white p-4 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500">
                        Gradient Background Animation
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeInLeft">
                        Fade In Left
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeInRight">
                        Fade In Right
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeInUp">
                        Fade In Up
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeOut">
                        Fade Out
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeOutDown">
                        Fade Out Down
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeOutLeft">
                        Fade Out Left
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeOutRight">
                        Fade Out Right
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-fadeOutUp">
                        Fade Out Up
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideInDown">
                        Slide In Down
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideInLeft">
                        Slide In Left
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideInRight">
                        Slide In Right
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideInUp">
                        Slide In Up
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideOutDown">
                        Slide Out Down
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideOutLeft">
                        Slide Out Left
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideOutRight">
                        Slide Out Right
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideOutUp">
                        Slide Out Up
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideDown">
                        Slide Down
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideLeft">
                        Slide Left
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideRight">
                        Slide Right
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-slideUp">
                        Slide Up
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-zoomIn">
                        Zoom In
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-zoomOut">
                        Zoom Out
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-tada">
                        Tada
                    </div>
                    <div className="border border-white p-4 rounded hover:animate-spinnerGrow">
                        Spinner Grow
                    </div>
                    <div className="relative flex items-center justify-center w-40 h-16 group">
                        <div className="absolute flex items-center justify-center w-[102%] h-[117%] rounded-lg opacity-0 group-hover:opacity-100 animate-ant-move"></div>
                        <button className="relative z-10 flex items-center justify-center px-6 py-3 text-white bg-blue-500 rounded-lg">
                            Ant Border Button
                        </button>
                        {/* this animation is from AntBorderAnimation.css if you want to use this in the design use the CSS file also */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animations;
