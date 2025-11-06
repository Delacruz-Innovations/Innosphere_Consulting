import React, { useEffect, useRef, useState } from 'react';
import { Play, X, ChevronDown, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const aboutLinks = [
    { name: 'What Makes Us Different?', href: 'different' },
    { name: 'Our Leadership', href: 'leadership' }
  ];

  const solutionsLinks = [
    { name: 'Technology & IT Services', href: '/solution/technology-it-services' },
    { name: 'Cyber Security Consulting', href: '/solution/cyber-security-consulting' },
    { name: 'Business Management ', href: '/solution/business-management-consulting' },
    { name: 'Marketing Branding & Advertising', href: '/solution/marketing-branding-advertising' },
    { name: 'Software innoovation', href: '/solution/software-innovation-labs' }
  ];
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  // Add GSAP animation for dropdowns
  useEffect(() => {
    if (aboutDropdownOpen) {
      gsap.fromTo(
        '.about-dropdown',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [aboutDropdownOpen]);

  useEffect(() => {
    if (solutionsDropdownOpen) {
      gsap.fromTo(
        '.solutions-dropdown',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [solutionsDropdownOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [mobileMenuOpen]);

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === `/${path}` || location.pathname === path;
  };
  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-[#0a1929]/90 backdrop-blur-xl border border-gray-700/50 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to='/' className="flex items-center gap-3">
           <img src={Logo} className='w-44 h-14 object-cover' alt="" />
          </Link>
          
          {/* Desktop Menu */}
        {/* Desktop Menu */}
<div className="hidden lg:flex items-center gap-8">
   <Link 
    to="about" 
    className={`transition-colors text-sm font-medium tracking-wide ${
      isActive('about') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
    }`}
  >
    ABOUT US
  </Link>


{/* Solutions Dropdown */}
<div 
  className="relative"
  onMouseEnter={() => setSolutionsDropdownOpen(true)}
  onMouseLeave={() => setSolutionsDropdownOpen(false)}
>
  <button className={`items-center gap-1 transition-colors text-sm font-medium tracking-wide ${
    isActive('org-design') || isActive('culture') || isActive('leadership-dev') || isActive('performance') || isActive('change')
      ? 'text-[#6b9dc7]' 
      : 'text-gray-300 hover:text-[#a8c5e0]'
  }`}>
    SOLUTIONS
  
  </button>
  
  {solutionsDropdownOpen && (
    <div className="solutions-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72">
      <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
        <div className="py-2">
          {solutionsLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`block px-6 py-3 transition-all text-sm ${
                isActive(link.href)
                  ? 'text-[#6b9dc7] bg-[#4a7ba7]/10'
                  : 'text-gray-300 hover:text-[#a8c5e0] hover:bg-[#4a7ba7]/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )}
</div>

  <Link 
    to="cases" 
    className={`transition-colors text-sm font-medium tracking-wide ${
      isActive('cases') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
    }`}
  >
    CASES
  </Link>
  <Link 
    to="insights" 
    className={`transition-colors text-sm font-medium tracking-wide ${
      isActive('insights') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
    }`}
  >
    INSIGHTS
  </Link>
  <Link 
    to="/contact" 
    className={`transition-colors text-sm font-medium tracking-wide uppercase ${
      isActive('insights') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
    }`}
  >
    Contact US
  </Link>
  <Link 
    to="consultation" 
    className={`transition-colors text-sm font-medium tracking-wide bg-blue-500 p-3 hover:bg-blue-700 rounded-full text-white`}
  >
    Book A Consultation
  </Link>
</div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

  {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="mobile-menu lg:hidden absolute top-full left-0 right-0 mt-4 bg-[#0a1929]/95 backdrop-blur-xl border border-[#1e3a5f]/50 rounded-3xl shadow-2xl overflow-hidden">
    <div className="py-4">
    
      <Link 
        to="about" 
        className={`block px-6 py-3 transition-colors text-sm font-medium tracking-wide ${
          isActive('about') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        ABOUT US
      </Link>

      {/* Solutions Mobile */}
      <div>
        <button
          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
          className={`w-full flex items-center justify-between px-6 py-3 transition-colors text-sm font-medium tracking-wide ${
            isActive('org-design') || isActive('culture') || isActive('leadership-dev') || isActive('performance') || isActive('change')
              ? 'text-[#6b9dc7]'
              : 'text-gray-300 hover:text-[#a8c5e0]'
          }`}
        >
          SOLUTIONS
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileSolutionsOpen && (
          <div className="bg-gray-800/50 py-2">
            {solutionsLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`block px-10 py-2 transition-colors text-sm ${
                  isActive(link.href)
                    ? 'text-[#6b9dc7]'
                    : 'text-gray-400 hover:text-[#a8c5e0]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link 
        to="cases" 
        className={`block px-6 py-3 transition-colors text-sm font-medium tracking-wide ${
          isActive('cases') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        CASES
      </Link>
      <Link 
        to="insights" 
        className={`block px-6 py-3 transition-colors text-sm font-medium tracking-wide ${
          isActive('insights') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        INSIGHTS
      </Link>
      <Link 
        to="contact" 
        className={`block px-6 py-3 transition-colors text-sm font-medium tracking-wide ${
          isActive('contact') ? 'text-[#6b9dc7]' : 'text-gray-300 hover:text-[#a8c5e0]'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        CONTACT US
      </Link>
    </div>
  </div>
)}
    </nav>
  );
};
export default Navbar