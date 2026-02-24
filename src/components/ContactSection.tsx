import React from 'react';
import { Phone, Mail, MapPin, Navigation, Send, User, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#328CCB] font-semibold text-lg">Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Contact <span className="text-[#328CCB]">& Location</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Visit us or contact our team for appointments, emergency services, or any healthcare queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Emergency Contact */}
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="bg-[#D66C43] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D66C43] text-lg">Emergency 24×7</h4>
                    <a href={`tel:${CONTACT_INFO.emergency}`}><p className="text-[#D66C43] font-semibold text-xl">{CONTACT_INFO.emergency}</p></a>
                  </div>
                </div>

              

                {/* General Contact */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#328CCB]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#328CCB]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">General Inquiries</h4>
                    <a href={`tel:${CONTACT_INFO.phone}`}><p className="text-gray-700 text-lg">{CONTACT_INFO.phone}</p></a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`}><p className="text-gray-700">{CONTACT_INFO.email}</p></a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-700">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-fit mx-auto">
                <Navigation className="h-5 w-5" />
                <a href="https://maps.app.goo.gl/GdmJvL8Yuz1VUMvw8" target="_blank" rel="noopener noreferrer"><span>Get Directions</span></a>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
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
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
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
                    rows={3}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                    placeholder="Please describe your inquiry or message..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg w-fit mx-auto"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>

              {/* Form Note */}
              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24 hours. For emergencies, please call{' '}
                <a href="tel:9100009744" className="text-[#D66C43] font-semibold hover:underline">
                  9100009744
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;