import React from 'react';
import { ArrowRight, Play, Star, Award, Users, TrendingUp, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full translate-y-32 -translate-x-32 opacity-30"></div>

      <div className="container mx-auto px-4 pt-20 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>NABH Accredited Hospital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health,
              <span className="text-[#328CCB]"> Our Priority</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience world-class healthcare with advanced technology,
              expert doctors, and compassionate care at Akropolis Super Speciality Hospital.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-[#328CCB] rounded-full"></div>
                <span>24×7 Emergency Care</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-[#D66C43] rounded-full"></div>
                <span>5K+ Successful Treatments</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Expert Doctors</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="/doctors"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/doctors');
                  window.location.reload();
                }}
                className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergency}`}
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Emergency: {CONTACT_INFO.emergency}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#328CCB] mb-1">5K+</div>
                <div className="text-sm text-gray-600">Successful Treatments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#D66C43] mb-1">50+</div>
                <div className="text-sm text-gray-600">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">90%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://brandingpioneers.co.in/akropolis/hero-banner.webp"
                alt="Modern Hospital Building"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-[#328CCB]/10 p-3 rounded-xl">
                  <Users className="h-8 w-8 text-[#328CCB]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;