import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import solutionsData from '../Solution';

const SolutionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const solution = solutionsData.solutions.find(s => s.slug === slug);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const descRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!solution) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Solution Not Found</h2>
          <button
            onClick={() => navigate('/service')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Solutions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section with Animated Background */}
      <div className="relative pt-38 pb-16 px-6 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-0 right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full "
            style={{
              filter: 'blur(120px)',
              opacity: 0.2,
              animation: 'float 8s ease-in-out infinite'
            }}
          ></div>
          <div
            className="absolute -top-20 left-0 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full "
            style={{
              filter: 'blur(100px)',
              opacity: 0.15,
              animation: 'float 10s ease-in-out infinite reverse'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
      
          {/* Title with staggered animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="text-white">{solution.title.split(' ').slice(0, -1).join(' ')}</span>
              {' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {solution.title.split(' ').slice(-1)}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
              {solution.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Image and Description Grid */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                About This Service
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {solution.fullDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className={`mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              OUR <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">APPROACH</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic methodology designed to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.approach.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.id}</span>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

       
        <div className='grid md:grid-cols-2 gap-8 mt-20'>
          {/* {solution.marketOpportunity && (
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400 rounded-xl">
              <p className="text-cyan-300 font-medium text-base">
                <span className="font-bold text-cyan-400 block mb-2 text-lg">💡 Market Opportunity</span>
                {solution.marketOpportunity}
              </p>
            </div>
          )} */}
          
          {/* License Coverage */}
          {/* {solution.licenses && solution.licenses.length > 0 && (
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">License Coverage</h3>
              <div className="grid grid-cols-1 gap-3">
                {solution.licenses.map((license, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{license}</span>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>

        {/* CTA Section */}
        <div className={`mt-32 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What your next big move ?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We are a professional, enthusiastic and innovative team, dedicated to providing professional
              Management Consulting Services and evolving people management that help our clients
              become more productive and profitable.
            </p>
           <Link to='/consultation'> <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex gap-2 items-center justify-center mx-auto">
              Book A free consultation <ArrowRight />
            </button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionDetail;