import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

// Import the article data
import articleData from '../articleData.json'

const InsightDetails = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

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
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleShare = (platform) => {
    console.log(`Share on ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative">
        <div 
          ref={heroRef}
          className="container mx-auto px-6 pt-24 pb-16"
        >
         

          <div className="max-w-4xl pt-8">
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              {articleData.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {articleData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{articleData.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{articleData.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <article ref={contentRef} className="lg:col-span-8">
              {/* Hero Image */}
              <div className="relative rounded-xl overflow-hidden mb-12 shadow-2xl">
                <img
                  src={articleData.heroImage}
                  alt={articleData.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              {/* Introduction */}
              <div data-section id="introduction" className="mb-12">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {articleData.introduction}
                </p>
              </div>

              {/* Main Sections */}
              {articleData.sections.map((section, index) => (
                <div 
                  key={index}
                  data-section 
                  id={section.id}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {section.heading}
                  </h2>
                  
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}

                  {section.image && (
                    <div className="float-right ml-8 mb-6 w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl">
                      <img
                        src={section.image}
                        alt={section.heading}
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {section.points && (
                    <div className="space-y-4 mb-6">
                      {section.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                          <h3 className="text-xl font-bold text-blue-400 mb-3">
                            {point.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div data-section id="conclusion" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {articleData.conclusion.heading}
                </h2>
                {articleData.conclusion.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Authors Section */}
              <div className="mt-16 pt-12 border-t border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-8">Authors</h3>
                <div className="space-y-6">
                  {articleData.authors.map((author, index) => (
                    <div key={index} className="flex items-start gap-6 bg-gray-900 rounded-lg p-6">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {author.name}
                        </h4>
                        <p className="text-blue-400 text-sm mb-3">
                          {author.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-34 space-y-8">
                {/* Share Section */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Share2 size={20} className="mr-2" />
                    Share Article
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={20} className="mx-auto" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex-1 bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={20} className="mx-auto" />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex-1 bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-lg transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={20} className="mx-auto" />
                    </button>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Table of Contents
                  </h3>
                  <nav>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#introduction"
                          className={`block text-sm hover:text-blue-400 transition-colors ${
                            activeSection === 'introduction' ? 'text-blue-400 font-semibold' : 'text-gray-400'
                          }`}
                        >
                          Introduction
                        </a>
                      </li>
                      {articleData.sections.map((section, index) => (
                        <li key={index}>
                          <a
                            href={`#${section.id}`}
                            className={`block text-sm hover:text-blue-400 transition-colors ${
                              activeSection === section.id ? 'text-blue-400 font-semibold' : 'text-gray-400'
                            }`}
                          >
                            {section.heading}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="#conclusion"
                          className={`block text-sm hover:text-blue-400 transition-colors ${
                            activeSection === 'conclusion' ? 'text-blue-400 font-semibold' : 'text-gray-400'
                          }`}
                        >
                          {articleData.conclusion.heading}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Related Articles */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Related Insights
                  </h3>
                  <div className="space-y-4">
                    {articleData.relatedArticles.map((article, index) => (
                      <a
                        key={index}
                        href={`/insights/${article.slug}`}
                        className="block group"
                      >
                        <div className="text-sm text-blue-400 mb-1">
                          {article.category}
                        </div>
                        <div className="text-white group-hover:text-blue-400 transition-colors font-semibold">
                          {article.title}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want More Insights?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest articles and industry trends.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-900/30">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetails;