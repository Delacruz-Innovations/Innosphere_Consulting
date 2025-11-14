import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Calendar, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Academy = () => {
  const heroRef = useRef(null);
  const programsRef = useRef([]);
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

    programsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      id: 1,
      title: "Business Analysis Certification",
      subtitle: "Aligned with BABOK",
      description: "Master the art of business analysis with comprehensive training aligned with the Business Analysis Body of Knowledge (BABOK). Learn to bridge the gap between business needs and technical solutions.",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      icon: Target,
      features: [
        "BABOK-aligned curriculum",
        "Requirements elicitation techniques",
        "Stakeholder analysis and management",
        "Process modeling and documentation",
        "Certification preparation"
      ]
    },
    {
      id: 2,
      title: "Product Management Bootcamp",
      subtitle: "From Concept to Launch",
      description: "Develop the skills to lead product strategy, drive innovation, and deliver customer-centric solutions. Learn from real-world case studies and hands-on projects.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      icon: TrendingUp,
      features: [
        "Product strategy and roadmapping",
        "User research and validation",
        "Agile product development",
        "Stakeholder management",
        "Go-to-market strategies"
      ]
    },
    {
      id: 3,
      title: "Digital Strategy & Transformation Workshop",
      subtitle: "Leading Change in the Digital Age",
      description: "Equip yourself with the frameworks and tools to lead digital transformation initiatives. Understand how to align technology with business strategy for competitive advantage.",
      duration: "5 days intensive",
      level: "Senior & Executive Level",
      icon: BookOpen,
      features: [
        "Digital transformation frameworks",
        "Technology strategy development",
        "Change management in digital context",
        "Innovation and disruption",
        "Case study analysis"
      ]
    },
    {
      id: 4,
      title: "Data Analysis and Management",
      subtitle: "Turn Data into Insights",
      description: "Learn to collect, analyze, and interpret data to drive business decisions. Master tools and techniques for effective data management and visualization.",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      icon: Award,
      features: [
        "Statistical analysis fundamentals",
        "Data visualization techniques",
        "SQL and database management",
        "Business intelligence tools",
        "Data-driven decision making"
      ]
    },
    {
      id: 5,
      title: "Executive Leadership Coaching",
      subtitle: "Elevate Your Leadership Impact",
      description: "One-on-one coaching designed for senior leaders to enhance strategic thinking, emotional intelligence, and organizational influence.",
      duration: "3-6 months",
      level: "Executive Level",
      icon: Users,
      features: [
        "Personalized coaching sessions",
        "360-degree feedback assessment",
        "Leadership style development",
        "Strategic thinking enhancement",
        "Organizational influence strategies"
      ]
    },
    {
      id: 6,
      title: "Agile Coaching",
      subtitle: "Master Agile Methodologies",
      description: "Become a certified Agile practitioner and learn to coach teams in Scrum, Kanban, and other Agile frameworks to improve delivery and collaboration.",
      duration: "6 weeks",
      level: "Intermediate",
      icon: CheckCircle,
      features: [
        "Scrum and Kanban frameworks",
        "Agile ceremonies and artifacts",
        "Team facilitation techniques",
        "Scaling Agile practices",
        "Continuous improvement mindset"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry-Recognized Certifications",
      description: "Earn credentials that are valued by employers across Nigeria and internationally."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals with years of practical experience in their fields."
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "Apply concepts immediately through real-world projects and case studies."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from weekday, weekend, or online options to fit your busy schedule."
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
                Capability Academy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empower Your Future with <span className="text-blue-400">Professional Training</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Our Capability Academy empowers professionals and organizations to build the skills needed to thrive in a digital economy. Elevate your career with industry-leading programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
              >
                <span>Enroll Now</span>
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <span>Explore Programs</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Our Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition-all duration-300"
              >
                <div className="bg-blue-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="container mx-auto px-6 py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Training Programs
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of programs designed to accelerate your professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                ref={el => programsRef.current[index] = el}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <program.icon className="text-blue-400" size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">Duration</div>
                      <div className="text-white font-semibold">{program.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold mb-4">{program.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <div className="inline-block bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
                      {program.level}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wide">What You'll Learn</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-y border-gray-800">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of professionals who have accelerated their careers through our academy. Get in touch to discuss which program is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => navigate('/cases')}
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <span>View Success Stories</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Training Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Corporate Training Solutions
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Looking to upskill your entire team? We offer customized corporate training programs tailored to your organization's specific needs and challenges.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Customized curriculum based on your business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">On-site or remote delivery options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Flexible scheduling to minimize business disruption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Post-training support and coaching</span>
                  </li>
                </ul>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <span>Request Corporate Training</span>
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300">Professionals Trained</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Corporate Clients</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300">Satisfaction Rate</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
                  <div className="text-gray-300">Programs Offered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;