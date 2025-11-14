import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Blocks, TrendingUp, Zap, ArrowRight, ChevronRight } from 'lucide-react';

import solutionsData from '../Solution';

const SolutionsPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

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

  const handleSolutionClick = (slug) => {
    navigate(`/solution/${slug}`);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const getIcon = (iconName) => {
    const icons = {
      building: Building2,
      blocks: Blocks,
      trending: TrendingUp,
      zap: Zap
    };
    const Icon = icons[iconName] || Building2;
    return <Icon className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Professional Header */}
      <div className="">
        <div ref={heroRef} className="container mx-auto px-6 pt-38">
          <div className="max-w-4xl">
            <div className="mb-6 hidden">
              <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
           Our Services
            </h1>
            <div className="w-16 h-0.5 bg-blue-500 mb-6 hidden"></div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl hidden">
              Discover our comprehensive range of solutions designed to transform your business 
              and drive innovation across every aspect of your organization.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions List */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-8">
          {solutionsData.solutions.map((solution, index) => (
            <div
              key={solution.id}
              ref={el => cardsRef.current[index] = el}
              className="group md:bg-gray-900 md:border md:border-gray-800 md:rounded-lg overflow-hidden hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300 cursor-pointer"
              onClick={() => handleSolutionClick(solution.slug)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative overflow-hidden max-md:rounded-xl bg-gray-800">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                      {getIcon(solution.icon)}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-4 md:p-10 flex flex-col justify-center">
                  <div className="mb-4 hidden md:block">
                    <span className="inline-block text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                      {solution.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {solution.shortDescription}
                  </p>
                  <div className="flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/btn">
                    <span className="mr-2">Learn More</span>
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
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team of experts can help you design and implement tailored solutions 
              for your unique business needs and drive measurable results.
            </p>
            <button 
              onClick={() => handleNavigation('/consultation')}
              className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-900/30"
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

export default SolutionsPage;