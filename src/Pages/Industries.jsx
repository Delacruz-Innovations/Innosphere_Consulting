import React, { useEffect, useRef } from 'react';
import { Building2, Heart, Zap, Landmark, ShoppingCart, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Industries = () => {
  const heroRef = useRef(null);
  const industriesRef = useRef([]);
  const navigate = useNavigate();

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

    industriesRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      id: 1,
      name: "Financial Services & Fintech",
      slug: "financial-services",
      icon: TrendingUp,
      tagline: "Enabling Digital Platforms and Data-Driven Operations",
      description: "We partner with banks, insurance companies, and fintech startups across Nigeria and West Africa to accelerate digital transformation and unlock new revenue streams through innovative financial technology solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      capabilities: [
        "Digital banking platform modernization",
        "Payment system integration and optimization",
        "Risk management and compliance automation",
        "Customer data analytics and personalization",
        "Mobile and online banking solutions",
        "Blockchain and cryptocurrency advisory"
      ],
      outcomes: [
        "40% reduction in transaction processing time",
        "60% increase in digital channel adoption",
        "Enhanced regulatory compliance",
        "Improved customer satisfaction scores"
      ]
    },
    {
      id: 2,
      name: "Healthcare & MedTech",
      slug: "healthcare",
      icon: Heart,
      tagline: "Supporting Innovation and Patient Experience Transformation",
      description: "From hospitals to health tech startups, we help healthcare organizations in Lagos, Abuja, and Port Harcourt leverage technology to improve patient outcomes, streamline operations, and deliver exceptional care experiences.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      capabilities: [
        "Electronic Health Records (EHR) implementation",
        "Telemedicine platform development",
        "Patient engagement and portal solutions",
        "Healthcare analytics and reporting",
        "Medical device integration",
        "Regulatory compliance management"
      ],
      outcomes: [
        "50% reduction in administrative workload",
        "30% improvement in patient satisfaction",
        "Enhanced care coordination",
        "Streamlined clinical workflows"
      ]
    },
    {
      id: 3,
      name: "Energy & Infrastructure",
      slug: "energy-infrastructure",
      icon: Zap,
      tagline: "Driving Efficiency Through Automation and Analytics",
      description: "We support energy companies and infrastructure providers across Nigeria in optimizing operations, enhancing safety, and preparing for the future of sustainable energy through digital innovation.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      capabilities: [
        "Smart grid and energy management systems",
        "Predictive maintenance solutions",
        "Asset performance optimization",
        "Supply chain digitization",
        "Safety and compliance monitoring",
        "Renewable energy integration"
      ],
      outcomes: [
        "25% improvement in operational efficiency",
        "Reduced downtime and maintenance costs",
        "Enhanced safety compliance",
        "Better resource allocation"
      ]
    },
    {
      id: 4,
      name: "Public Sector",
      slug: "public-sector",
      icon: Landmark,
      tagline: "Aligning Digital Strategy with National Innovation Agenda",
      description: "We work with government agencies and public institutions to modernize service delivery, improve citizen engagement, and drive digital transformation aligned with Nigeria's national development goals.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      capabilities: [
        "E-government platform development",
        "Citizen service digitization",
        "Data governance and security",
        "Process automation and optimization",
        "Change management for digital adoption",
        "Performance measurement frameworks"
      ],
      outcomes: [
        "Improved service delivery times",
        "Enhanced citizen satisfaction",
        "Transparent and efficient operations",
        "Data-driven policy making"
      ]
    },
    {
      id: 5,
      name: "Retail & E-commerce",
      slug: "retail-ecommerce",
      icon: ShoppingCart,
      tagline: "Scaling Digital Sales Channels and Customer Engagement",
      description: "From traditional retailers to digital-first brands, we help Nigerian businesses build compelling online experiences, optimize operations, and compete effectively in the digital marketplace.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
      capabilities: [
        "E-commerce platform development",
        "Omnichannel retail strategy",
        "Customer relationship management (CRM)",
        "Inventory and supply chain optimization",
        "Digital marketing and analytics",
        "Payment gateway integration"
      ],
      outcomes: [
        "120% growth in online sales",
        "Enhanced customer lifetime value",
        "Improved inventory turnover",
        "Seamless omnichannel experience"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div ref={heroRef} className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 px-4 py-2 rounded-full border border-blue-700/50">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Industries Across <span className="text-blue-400">Nigeria & West Africa</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              We serve clients across multiple sectors in Nigeria and the West African region, each with distinct growth and transformation needs. Our deep industry knowledge combined with technical expertise delivers measurable results.
            </p>
          </div>

        </div>
      </div>

      {/* Industries Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tailored solutions designed for the unique challenges and opportunities in each sector
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                ref={el => industriesRef.current[index] = el}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-2 relative overflow-hidden h-64 lg:h-auto">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-8 left-8">
                      <div className="bg-blue-900/80 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center">
                        <industry.icon className="text-blue-400" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wide">
                      {industry.tagline}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Capabilities */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Building2 size={18} className="text-blue-400" />
                          Our Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {industry.capabilities.map((capability, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp size={18} className="text-blue-400" />
                          Typical Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {industry.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button 
                      onClick={() => navigate('/cases')}
                      className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group/btn"
                    >
                      <span>View Case Studies</span>
                      <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Partner With Us?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Our deep industry expertise combined with proven methodologies ensures that your transformation initiatives deliver tangible business value. We understand the unique challenges facing Nigerian businesses and have the track record to prove it.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-white font-semibold mb-1">Local Expertise, Global Standards</div>
                      <div className="text-gray-400 text-sm">Deep understanding of Nigerian market dynamics with international best practices</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-white font-semibold mb-1">Proven Track Record</div>
                      <div className="text-gray-400 text-sm">100+ successful projects across multiple industries in Lagos, Abuja, and Port Harcourt</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-white font-semibold mb-1">End-to-End Partnership</div>
                      <div className="text-gray-400 text-sm">From strategy to implementation and beyond, we're with you every step of the way</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-white font-semibold mb-1">Results-Driven Approach</div>
                      <div className="text-gray-400 text-sm">Focus on measurable outcomes that impact your bottom line</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Client Retention Rate</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Projects Delivered</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Years Combined Experience</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-t border-gray-800">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our industry expertise can help your organization achieve its digital transformation goals. Schedule a consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => navigate('/cases')}
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <span>View Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;