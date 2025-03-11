import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Ensure this import is present
import store from './store'; // Assuming you have a Redux store setup
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; // Import About component
import Contact from './components/Contact'; // Import Contact component
import Designs from './components/Designs'; // Import Designs component
import Portfolio from './components/Portfolio'; // Import Portfolio component

function App() {
    return (
        <Provider store={store}> {/* Wrap with Provider */}
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> {/* Add About route */}
                <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
                <Route path="/designs" element={<Designs />} /> {/* Add Designs route */}
                <Route path="/portfolio" element={<Portfolio />} /> {/* Add Portfolio route */}
            </Routes>
        </Router>
        </Provider>
    );
}

export default App;
