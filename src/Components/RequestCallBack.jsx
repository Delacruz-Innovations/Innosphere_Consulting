import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const RequestCallBack = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState('');
const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    interest: 'Organizational Effectiveness and Strategy'
  });

  const interests = [
    'Organizational Effectiveness and Strategy',
    'Digital Transformation',
    'Cyber Security',
    'Marketing Solutions',
    'Management Consulting',
    'Software Innovation'
  ];

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');
  setSubmitSuccess(false);
  
  try {
    const response = await fetch('https://formspree.io/f/xzzknjek', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        phoneNumber: formData.phoneNumber,
        interest: formData.interest
      })
    });

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        phoneNumber: '',
        interest: 'Organizational Effectiveness and Strategy'
      });
    } else {
      setSubmitError('Failed to submit. Please try again.');
    }
  } catch (error) {
    setSubmitError('Network error. Please check your connection and try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 bg-black text-white flex items-center justify-center px-4 ">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
          REQUEST A CALL BACK
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Would you like to speak to one of our advisors over the phone? Just submit your details
          and we'll be in touch shortly. You can also email us if you would prefer.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          {/* First Name Input */}
          <div className="flex-1 w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex-1 w-full">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          {/* Dropdown Select */}
          <div className="flex-1 w-full relative">
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-white appearance-none cursor-pointer focus:outline-none focus:border-cyan-500 transition-colors pr-12"
            >
              {interests.map((interest, index) => (
                <option key={index} value={interest} className="bg-gray-900 text-white">
                  {interest}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Submit Button */}
         <button
  type="submit"
  disabled={isSubmitting}
  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
</button>
        </form>

        {/* Success Message */}
{submitSuccess && (
  <p className="text-green-400 text-center mt-6 text-lg">
    ✓ Thank you! We'll be in touch shortly.
  </p>
)}

{/* Error Message */}
{submitError && (
  <p className="text-red-400 text-center mt-6">
    {submitError}
  </p>
)}
      </div>
    </div>
  );
};

export default RequestCallBack;