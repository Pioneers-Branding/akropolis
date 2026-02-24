import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Navigation, 
  Send, 
  User, 
  MessageSquare, 
  Clock,
  Award,
  Heart,
  Calendar,
  Ambulance,
  Building2,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency 24×7',
      value: CONTACT_INFO.emergency,
      description: 'For medical emergencies and urgent care',
      color: 'bg-[#D66C43]',
      textColor: 'text-[#D66C43]',
      bgColor: 'bg-[#D66C43]/10',
      borderColor: 'border-[#D66C43]/20'
    },
    {
      icon: Phone,
      title: 'General Inquiries',
      value: CONTACT_INFO.phone,
      description: 'For appointments and general information',
      color: 'bg-[#328CCB]',
      textColor: 'text-[#328CCB]',
      bgColor: 'bg-[#328CCB]/10',
      borderColor: 'border-[#328CCB]/20'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: CONTACT_INFO.email,
      description: 'Send us your queries and feedback',
      color: 'bg-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: CONTACT_INFO.address,
      description: 'Our hospital location in Noida',
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const operatingHours = [
    { day: 'Emergency Services', time: '24/7 Available', highlight: true },
    { day: 'OPD Timings', time: '8:00 AM - 8:00 PM', highlight: false },
    { day: 'Laboratory', time: '6:00 AM - 10:00 PM', highlight: false },
    { day: 'Pharmacy', time: '24/7 Available', highlight: true },
    { day: 'Radiology', time: '7:00 AM - 9:00 PM', highlight: false },
    { day: 'Dialysis Center', time: '24/7 Available', highlight: true }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Phone className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact Akropolis
              <span className="block">Super Speciality Hospital</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help you with appointments, emergency services, and all your healthcare needs.
            </p>       
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              <span>Contact Information</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with
              <span className="text-[#328CCB]"> Our Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for your healthcare needs, emergency services, and general inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={index}
                  className={`${method.bgColor} ${method.borderColor} border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`${method.color} p-4 rounded-xl w-fit mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className={`text-xl font-bold ${method.textColor} mb-2`}>
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-900 font-semibold text-lg mb-2">
                    {method.value}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>        
        </div>
      </section>

      {/* Contact Form & Operating Hours */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Message</span> 
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form accept-charset='UTF-8' action='https://app.formester.com/forms/26PHowyy9/submissions' method='POST' className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="emergency">Emergency Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="insurance">Insurance Query</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Please describe your inquiry or message..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#D66C43] hover:bg-[#c55a36] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                {/* Form Note */}
                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours. For emergencies, please call{' '}
                  <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#D66C43] font-semibold hover:underline">
                    {CONTACT_INFO.emergency}
                  </a>
                </p>
              </form>
            </div>

            {/* Operating Hours & Additional Info */}
            <div className="space-y-8">
              {/* Operating Hours */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-[#328CCB]/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-[#328CCB]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
                    <p className="text-gray-600">Our service timings</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {operatingHours.map((hour, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        hour.highlight ? 'bg-[#D66C43]/10 border border-[#D66C43]/20' : 'bg-gray-50'
                      }`}
                    >
                      <span className={`font-semibold ${hour.highlight ? 'text-[#D66C43]' : 'text-gray-700'}`}>
                        {hour.day}
                      </span>
                      <span className={`font-bold ${hour.highlight ? 'text-[#D66C43]' : 'text-gray-900'}`}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hospital Features */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-[#D66C43]/10 p-3 rounded-xl">
                    <Award className="h-6 w-6 text-[#D66C43]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
                    <p className="text-gray-600">Our key features</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    'NABH Accredited Hospital',
                    '24×7 Emergency Services',
                    'Advanced Diagnostic Center',
                    'Expert Medical Team',
                    'Insurance Cashless Facility',
                    'Patient-Centric Care'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#D66C43] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>            
            </div> 
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Find Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our
              <span className="text-[#328CCB]"> Hospital</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Noida with easy accessibility and ample parking facilities.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-96 lg:h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-600 mb-2">Interactive Map</h3>
                  <p className="text-gray-500">Google Maps integration would be here</p>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Hospital Location
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#328CCB]/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#328CCB]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-700 leading-relaxed">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                      <Navigation className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Directions</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Easy access via metro, bus, and private transport. Ample parking available.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Visiting Hours</h4>
                      <p className="text-gray-700 leading-relaxed">
                        OPD: 8:00 AM - 8:00 PM | Emergency: 24/7 Available
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/GdmJvL8Yuz1VUMvw8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;