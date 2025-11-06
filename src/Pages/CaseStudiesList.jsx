import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ArrowRight, Menu, X } from 'lucide-react';

const CaseStudiesList = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heroRef.current.style.transition = 'all 0.8s ease-out';
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      id: 1,
      slug: 'strategic-plan-development',
      title: "Strategic Plan Development",
      category: "Strategy & Planning",
      excerpt: "A subsidiary of a leading national energy company required a strategic execution plan to kick off its journey to spin-off as a standalone private enterprise.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      id: 2,
      slug: 'operational-excellence-sla',
      title: "Operational Excellence through SLA",
      category: "Operations & Efficiency",
      excerpt: "Development of a comprehensive service-level agreement to enhance operational efficiency at the enterprise level.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      id: 3,
      slug: 'nuclear-energy-financial-model',
      title: "Nuclear Energy Financial Model",
      category: "Finance & Investment",
      excerpt: "A build-finance-own-operate model to facilitate a new nuclear power plant integrated model.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
    },
    {
      id: 4,
      slug: 'digital-transformation-initiative',
      title: "Digital Transformation Initiative",
      category: "Technology & Innovation",
      excerpt: "End-to-end digital transformation for a financial services company to modernize legacy systems and improve customer experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 5,
      slug: 'supply-chain-optimization',
      title: "Supply Chain Optimization",
      category: "Operations & Efficiency",
      excerpt: "Redesigning supply chain network for a manufacturing company to reduce costs and improve delivery times.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
      id: 6,
      slug: 'change-management-program',
      title: "Change Management Program",
      category: "People & Culture",
      excerpt: "Comprehensive change management initiative to support merger integration and cultural alignment.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    }
  ];

  const handleCaseClick = (slug) => {
    window.location.href = `/cases/${slug}`;
  };

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950">
   

      {/* Professional Header */}
      <div className=" ">
        <div ref={heroRef} className="container mx-auto px-6  pt-28">
          <div className="max-w-4xl">
            <div className=" mb-6 hidden">
              <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <div className="w-16 h-0.5 bg-blue-500 mb- hidd"></div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl hidden">
              Demonstrating excellence through strategic consulting and transformative solutions. 
              Our portfolio reflects a commitment to delivering measurable business outcomes across diverse industries.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              ref={el => cardsRef.current[index] = el}
              className="group md:bg-gray-900 md:border md:border-gray-800 md:rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer"
              onClick={() => handleCaseClick(study.slug)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative overflow-hidden max-md:rounded-xl bg-gray-800">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-block bg-gray-900 text-white px-4 py-2 rounded text-sm font-bold shadow-lg border border-gray-700">
                      Case #{String(study.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-4 md:p-10 flex flex-col justify-center">
                  <div className="mb-4 hidden md:block">
                    <span className="inline-block text-blue-400 text-xs font-semibold tracking-wider uppercase">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {study.excerpt}
                  </p>
                  <div className="flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group/btn">
                    <span className="mr-2">View Case Study</span>
                    <ArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional CTA */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner With Us
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover how our strategic consulting expertise can drive meaningful transformation 
              and sustainable growth for your organization.
            </p>
            <button 
              onClick={() => handleNavigation('/consultation')}
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
            >
              <span>Request Consultation</span>
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default CaseStudiesList;