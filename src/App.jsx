// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import SolutionPages from '../src/Pages/SolutionPage';
import SolutionDetail from './Components/SolutionDetail';
import ScrollToTop from './Components/ScrollToTop';
import Notfound from './Components/Notfound';
import CaseStudies from './Pages/CaseStudiesList';
import CaseStudyDetails from './Components/CaseStudyDetails';
import InsightsList from './Pages/InsightsList';
import InsightDetails from './Components/InsightDetails';
import ContactPage from './Pages/ContactPage';
import ConsultantForm from './Pages/ConsultantForm';
import DeChatbot from './Components/DeChatbot';
import TermsAndConditions from './Components/TermsAndConditions';
import Policy from './Pages/Policy';
import Academy from './Pages/Academy';
import Industries from './Pages/Industries';

import { initGA, logPageView } from './utils/analytics';

// Component to track route changes
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on every route change
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

const App = () => {
  useEffect(() => {
    // Initialize GA4 with your Measurement ID
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);
    
    // Log initial page view
    logPageView();
  }, []);

  return (
    <Router basename='/Innosphere_Consulting'>
      <ScrollToTop />
      <RouteTracker />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='solutions' element={<SolutionPages />} />
        <Route path='solution/:slug' element={<SolutionDetail />} />
        <Route path='cases' element={<CaseStudies />} />
        <Route path='cases/:slug' element={<CaseStudyDetails />} />
        <Route path='insights' element={<InsightsList />} />
        <Route path='insights/:slug' element={<InsightDetails />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='Consultation' element={<ConsultantForm />} />
        <Route path='Privacy_Policy' element={<Policy />} />
        <Route path='Term_&_Condition' element={<TermsAndConditions />} />
        <Route path='Academy' element={<Academy />} />
        <Route path='Industries' element={<Industries />} />
        <Route path='our_services' element={<SolutionPages />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

      <Footer />
      <DeChatbot />
    </Router>
  );
};

export default App;