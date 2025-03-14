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

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />

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
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
