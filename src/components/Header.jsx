import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice'; // Import logout action

const Header = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn); // Get isLoggedIn from slice
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout({ meta: { fileName: 'Header.jsx' } })); // Dispatch logout action
        localStorage.removeItem('user'); // Remove user from local storage
        localStorage.removeItem('lastSpinTime'); // Reset last spin time
        navigate('/'); // Redirect to home page
    };

    return (
        <header className="flex">
            <div className="w-1/4 bg-white p-4 flex items-center justify-center relative border-gray-200 border-2 h-20 overflow-hidden">
                <img src="src/img/logo.jpg" alt="Logo" className="h-20 object-contain" /> {/* Adjusted size */}
                <div className="absolute right-0 top-0 w-8 bg-white rounded-r-full h-full"></div> {/* Arched border */}
            </div>
            <div className="w-3/4 bg-gradient-to-l from-gray-500 to-black p-2 text-black flex justify-start items-center relative border-red-500 border-2 shadow-lg rounded-lg">
                <div className="absolute left-0 top-0 w-8 bg-white rounded-r-full"></div>
                <nav className="flex-1 flex justify-end items-center">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/about" className="mr-4">About</Link>
                    <Link to="/contact" className="mr-4">Contact</Link>
                    <Link to="/designs" className="mr-4">Designs</Link>
                    <Link to="/portfolio" className="mr-4">Portfolio</Link>
                    {isLoggedIn && (
                        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
