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
        <header className="flex h-16"> {/* Reduced height */}
            <div className="w-1/6 bg-white flex items-center justify-center relative overflow-hidden"> {/* Reduced width */}
                <img src="src/img/logo.jpg" alt="Logo" className=" object-contain" /> {/* Adjusted size */}
                <div className="absolute right-0 top-0 w-8 bg-white rounded-r-full "></div> {/* Arched border */}
            </div>
            <div className="w-1/6 bg-white flex items-center justify-center relative  overflow-hidden"> {/* Rounded width*/}
                <div className="ml-32 w-1/2 h-full bg-gradient-to-r from-cyan-600 to-cyan-900 rounded-tl-full"></div> {/* Quarter circle (left upper) */}
            </div>
            <div className="w-4/6 bg-gradient-to-r from-cyan-900 via-cyan-600 to-black p-2 text-white flex justify-start items-center relative"> {/* Balanced width */}
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
