import React, {useEffect} from 'react';
import { Zap, TrendingUp, Users, Globe } from 'lucide-react';
import { logEvent } from '../utils/analytics';
const InnosphereAbout = () => {
      useEffect(() => {
    logEvent('Section View', 'About Section Viewed', 'Innosphere About');
  }, []);

  const pillars = [
    {
      icon: TrendingUp,
      title: "Innovation that drives growth",
      description: "We don't just ideate—we implement. Our strategies are built for measurable, sustainable growth that transforms your bottom line."
    },
    {
      icon: Zap,
      title: "Transformation through execution",
      description: "Strategy without execution is just theory. We bridge the gap between vision and reality with precision, speed, and impact."
    },
    {
      icon: Users,
      title: "Leadership that builds capability",
      description: "True transformation starts with people. We develop leaders who can drive change and build organizations that thrive."
    },
    {
      icon: Globe,
      title: "Local insight, global standards",
      description: "Deep UAE and GCC market knowledge combined with world-class methodologies—the best of both worlds."
    }
  ];


    // Add this function to track pillar card interactions
  const handlePillarClick = (pillarTitle) => {
    logEvent('User Interaction', 'Pillar Card Clicked', pillarTitle);
  };

  return (
    <div className="bg-[#0a1929] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">Who We Are</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            We Turn <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Vision</span> Into <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Value</span>
          </h2>

          <div className="grid  gap-8 ">
            <p className="text-xl text-gray-300 leading-relaxed">
              Innosphere Consulting UAE is a strategy, digital transformation, and product leadership consulting firm built for the modern era.
               We bridge global best practices with local insight to help organizations across the UAE and GCC move from strategy to execution—fast, bold, and with lasting impact.
            </p>
          
          </div>
        </div>

        {/* Core Messaging Pillars */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-600/5 blur-3xl"></div>
          
          <div className="relative">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core <span className="text-cyan-400">Principles</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Bold, disruptive, and visionary we're not here to maintain the status quo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                     onClick={() => handlePillarClick(pillar.title)}
                  className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300"></div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <pillar.icon className="w-8 h-8 text-cyan-400" strokeWidth={2} />
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/20 group-hover:to-blue-600/20 rounded-bl-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default InnosphereAbout;