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
        <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">My App</h1>
            <nav>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/about" className="mr-4">About</Link>
                <Link to="/contact" className="mr-4">Contact</Link>
                <Link to="/designs" className="mr-4">Designs</Link>
                <Link to="/portfolio" className="mr-4">Portfolio</Link>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
                ) : (
                    <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
