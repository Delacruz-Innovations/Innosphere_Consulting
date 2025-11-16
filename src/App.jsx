// src/App.js
import React, { useEffect, useRef } from 'react';
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

import { initGA, logPageView, logEvent } from './utils/analytics';

// Get page title based on route
const getPageTitle = (pathname) => {
  const routes = {
    '/': 'Home',
    '/about': 'About Us',
    '/solutions': 'Solutions',
    '/cases': 'Case Studies',
    '/insights': 'Insights',
    '/contact': 'Contact',
    '/Consultation': 'Consultation',
    '/Privacy_Policy': 'Privacy Policy',
    '/Term_&_Condition': 'Terms & Conditions',
    '/Academy': 'Academy',
    '/Industries': 'Industries',
    '/our_services': 'Our Services'
  };

  // Check exact match first
  if (routes[pathname]) {
    return routes[pathname];
  }

  // Handle dynamic routes
  if (pathname.startsWith('/solution/')) return 'Solution Detail';
  if (pathname.startsWith('/cases/')) return 'Case Study Detail';
  if (pathname.startsWith('/insights/')) return 'Insight Detail';

  return '404 Not Found';
};

// Component to track route changes and user behavior
function RouteTracker() {
  const location = useLocation();
  const pageStartTime = useRef(Date.now());
  const previousPath = useRef(location.pathname);
  const sessionStartTime = useRef(Date.now());

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    const pageTitle = getPageTitle(location.pathname);

    if (previousPath.current !== location.pathname && previousPath.current) {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      const previousTitle = getPageTitle(previousPath.current);
      if (timeSpent > 0) {
        logEvent('Engagement', 'Time on Page', previousTitle, timeSpent);
      }
    }

    logPageView(currentPath, pageTitle);
    pageStartTime.current = Date.now();
    previousPath.current = location.pathname;
  }, [location]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const totalSessionTime = Math.round((Date.now() - sessionStartTime.current) / 1000);
      const currentPageTime = Math.round((Date.now() - pageStartTime.current) / 1000);
      const currentTitle = getPageTitle(location.pathname);

      if (currentPageTime > 0) {
        logEvent('Engagement', 'Time on Page', currentTitle, currentPageTime);
      }
      if (totalSessionTime > 0) {
        logEvent('Engagement', 'Total Session Time', 'Site Wide', totalSessionTime);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload();
    };
  }, [location.pathname]);

  return null;
}

function ScrollDepthTracker() {
  const location = useLocation();
  const trackedDepths = useRef(new Set());

  useEffect(() => {
    trackedDepths.current = new Set();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      [25, 50, 75, 100].forEach(milestone => {
        if (scrollPercent >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone);
          logEvent('Scroll', `${milestone}% Depth`, getPageTitle(location.pathname));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return null;
}

function InteractionTracker() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a');
      const button = e.target.closest('button');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href?.startsWith('http') && !href.includes(window.location.hostname)) {
          logEvent('Outbound Link', 'Click', href);
        }
      }
      
      if (button) {
        const buttonText = button.textContent.trim() || button.getAttribute('aria-label') || 'Unknown Button';
        logEvent('Button', 'Click', buttonText);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}

const App = () => {
  const appMountTime = useRef(Date.now());

  useEffect(() => {
    // Initialize GA4
    initGA();
    
    // Log initial page view
    logPageView();

    // Track browser and device info
    logEvent('User Info', 'Browser', navigator.userAgent.split(' ').pop());
    logEvent('User Info', 'Platform', navigator.platform);
    logEvent('User Info', 'Screen Size', `${window.screen.width}x${window.screen.height}`);
    logEvent('User Info', 'Viewport Size', `${window.innerWidth}x${window.innerHeight}`);

    // Track performance metrics
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          if (pageLoadTime > 0) {
            logEvent('Performance', 'Page Load Time', 'Homepage', Math.round(pageLoadTime));
            console.log(`Page load time: ${pageLoadTime}ms`);
          }
        }, 0);
      });
    }

    // Track visibility changes (tab switching)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        logEvent('User Behavior', 'Tab Hidden', window.location.pathname);
      } else {
        logEvent('User Behavior', 'Tab Visible', window.location.pathname);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Track total app session time
      const totalAppTime = Math.round((Date.now() - appMountTime.current) / 1000);
      if (totalAppTime > 0) {
        logEvent('Engagement', 'App Session Time', 'Total', totalAppTime);
        console.log(`Total app session: ${totalAppTime} seconds`);
      }
    };
  }, []);

  return (
    <Router basename='/Innosphere_Consulting'>
      <ScrollToTop />
      <RouteTracker />
      <ScrollDepthTracker />
      <InteractionTracker />
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