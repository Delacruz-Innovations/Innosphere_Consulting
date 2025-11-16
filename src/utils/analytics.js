// src/utils/analytics.js
import ReactGA from "react-ga4";
import { useRef } from 'react';
// Initialize GA4
export const initGA = () => {
  ReactGA.initialize("G-JJ7L25T8TX", {
    gaOptions: {
      debug_mode: process.env.NODE_ENV === 'development',
    },
    gtagOptions: {
      send_page_view: false // We'll handle page views manually
    }
  });
  console.log("GA4 Initialized");
};
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
  if (routes[pathname]) return routes[pathname];
  if (pathname.startsWith('/solution/')) return 'Solution Detail';
  if (pathname.startsWith('/cases/')) return 'Case Study Detail';
  if (pathname.startsWith('/insights/')) return 'Insight Detail';
  return '404 Not Found';
};

// Log page views
export const logPageView = (path, title) => {
  const pagePath = path || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;
  
  ReactGA.send({ 
    hitType: "pageview", 
    page: pagePath,
    title: pageTitle 
  });
  console.log(`Page view logged: ${pagePath} - ${pageTitle}`);
};

// Track custom events
export const logEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value
  });
  console.log(`Event logged: ${category} - ${action}${label ? ` - ${label}` : ''}`);
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  logEvent("Button", "Click", buttonName);
};

// Track form submissions
export const trackFormSubmit = (formName, success = true) => {
  logEvent("Form", success ? "Submit" : "Submit Failed", formName);
};

// Track external link clicks
export const trackOutboundLink = (url) => {
  logEvent("Outbound Link", "Click", url);
};

// Track downloads
export const trackDownload = (fileName) => {
  logEvent("Download", "Click", fileName);
};

// Track scroll depth
export const trackScrollDepth = (depth, pageTitle) => {
  logEvent("Scroll", `${depth}% Depth`, pageTitle);
};

// Track section views
export const trackSectionView = (sectionName, pageTitle) => {
  logEvent("Section View", "Visible", `${pageTitle} - ${sectionName}`);
};

// Track time on page (in seconds)
export const trackTimeOnPage = (seconds, pageTitle) => {
  logEvent("Engagement", "Time on Page", pageTitle, seconds);
};

// Track accordion/collapsible interactions
export const trackAccordionToggle = (accordionName, isExpanded) => {
  logEvent("Accordion", isExpanded ? "Expand" : "Collapse", accordionName);
};

// Track CTA (Call to Action) clicks
export const trackCTAClick = (ctaName, ctaLocation) => {
  logEvent("CTA", "Click", `${ctaName} - ${ctaLocation}`);
};

// Track video interactions
export const trackVideoPlay = (videoTitle) => {
  logEvent("Video", "Play", videoTitle);
};

export const trackVideoComplete = (videoTitle) => {
  logEvent("Video", "Complete", videoTitle);
};

// Track search
export const trackSearch = (searchTerm, resultsCount = null) => {
  logEvent("Search", "Query", searchTerm, resultsCount);
};

// Track social media clicks
export const trackSocialClick = (platform, action = "Click") => {
  logEvent("Social", action, platform);
};

// Track errors
export const trackError = (errorMessage, errorType = "general") => {
  logEvent("Error", errorType, errorMessage);
};

// Track form interactions
export const trackFormStart = (formName) => {
  logEvent("Form", "Start", formName);
};

export const trackFormFieldInteraction = (formName, fieldName) => {
  logEvent("Form", "Field Interaction", `${formName} - ${fieldName}`);
};

// Track navigation
export const trackNavigation = (linkText, destination) => {
  logEvent("Navigation", "Click", `${linkText} -> ${destination}`);
};

// Scroll tracking utility
export const setupScrollTracking = (pageTitle, milestones = [25, 50, 75, 100]) => {
  let maxScroll = 0;
  const tracked = new Set();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }

    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        trackScrollDepth(milestone, pageTitle);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// Section visibility tracking utility
export const setupSectionTracking = (pageTitle) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            trackSectionView(sectionName, pageTitle);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  const sections = document.querySelectorAll('[data-section]');
  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
};

// Time on page tracking utility
export const setupTimeTracking = (pageTitle) => {
  const startTime = Date.now();

  return () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (timeSpent > 0) {
      trackTimeOnPage(timeSpent, pageTitle);
    }
  };
};

export default {
  initGA,
  logPageView,
  logEvent,
  trackButtonClick,
  trackFormSubmit,
  trackOutboundLink,
  trackDownload,
  trackScrollDepth,
  trackSectionView,
  trackTimeOnPage,
  trackAccordionToggle,
  trackCTAClick,
  trackVideoPlay,
  trackVideoComplete,
  trackSearch,
  trackSocialClick,
  trackError,
  trackFormStart,
  trackFormFieldInteraction,
  trackNavigation,
  setupScrollTracking,
  setupSectionTracking,
  setupTimeTracking,
};