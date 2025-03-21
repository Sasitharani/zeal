import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Designs from './components/Designs';
import Portfolio from './components/Portfolio';
import WebDesign from './pages/WebDesign';
import PortfolioManagement from './pages/PortfolioManagement';
import ContentManagement from './pages/ContentManagement';
import RealTimeWebApplication from './pages/RealTimeWebApplication';
import ERP from './pages/ERP';
import APIDevelopment from './pages/APIDevelopment';
import Navbar from './components/Navbar'; // Import Navbar component
import Test from './components/Test'; // Import Test component
import CustomisedDesigns from './components/CustomisedDesigns'; // Import CustomisedDesigns component
import Parallax from './components/designs/Parallax';
import SlidingTiles from './components/designs/SlidingTiles'; // Import SlidingTiles component
import FlowerBackground from './components/designs/FlowerBackground';
import TextAnimation from './components/designs/TextAnimation'; // Import TextAnimation component
import FontsUse from './components/designs/FontsUse'; // Import FontsUse component
import Sliders from './components/designs/Sliders'; // Import Sliders component

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                {/* Add a Link to Customised Designs */}
           
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/designs" element={<Designs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/web-design" element={<WebDesign />} />
                    <Route path="/portfolio-management" element={<PortfolioManagement />} />
                    <Route path="/content-management" element={<ContentManagement />} />
                    <Route path="/real-time-web-application" element={<RealTimeWebApplication />} />
                    <Route path="/erp" element={<ERP />} />
                    <Route path="/api-development" element={<APIDevelopment />} />
                    <Route path="/navbar" element={<Navbar />} /> {/* Added route for Navbar */}
                    <Route path="/test" element={<Test />} /> {/* Added route for Test */}
                    <Route path="/customised-designs" element={<CustomisedDesigns />} /> {/* Added route */}
                    <Route path="/parallax" element={<Parallax />} />
                    <Route path="/sliding-tiles" element={<SlidingTiles />} /> {/* Added route for SlidingTiles */}
                    <Route path="/Flower-Background" element={<FlowerBackground />} /> {/* Added route for SlidingTiles */}
                    <Route path="/text-animation" element={<TextAnimation />} /> {/* Added route for TextAnimation */}
                    <Route path="/fonts-use" element={<FontsUse />} /> {/* Added route for FontsUse */}
                    <Route path="/sliders" element={<Sliders />} /> {/* Added route for Sliders */}
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
