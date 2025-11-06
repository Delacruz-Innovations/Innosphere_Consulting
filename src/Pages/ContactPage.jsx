import React, { useState } from 'react';
import { Facebook, MessageCircle, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState('');
const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');
  setSubmitSuccess(false);
  
  try {
    const response = await fetch('https://formspree.io/f/mjkpnawy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSubmitError('Failed to send message. Please try again.');
    }
  } catch (error) {
    setSubmitError('Network error. Please check your connection and try again.');
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="min-h-screen bg-gray-950 pt-20">
 

    

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Contact us</h1>
          <p className="text-gray-300 text-lg">Feel free to contact us any time you want</p>
        </div>

        {/* Contact Form and Info */}
        <div className="max-w-6xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's talk!</h2>
              
              <p className="text-gray-300 mb-8">
                hate forms? Instead, send us an <a href="mailto:custom_email@doamin.com" className="text-blue-400 hover:text-blue-300">e-mail</a>.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">+234 9073329957</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Contect@innosphere.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                     Ajao Estate<br />
                        Isolo
                      Lagos State
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">FULL NAME</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">SUB</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                  placeholder="Your message"
                />
              </div>

             <button
  type="submit"
  disabled={isSubmitting}
  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
>
  {isSubmitting ? 'Sending...' : 'Send this message'}
</button>
{/* Success Message */}
{submitSuccess && (
  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
    ✓ Message sent successfully! We'll get back to you soon.
  </div>
)}

{/* Error Message */}
{submitError && (
  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
    {submitError}
  </div>
)}
            </form>
          </div>
        </div>
      </div>

      {/* Messenger Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
        <MessageCircle size={28} className="text-white" />
      </button>


    </div>
  );
}