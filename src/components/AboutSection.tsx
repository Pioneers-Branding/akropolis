import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, Clock, Shield, Heart, Star, TrendingUp, Building2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: 'Award',
      title: 'NABH Accredited Healthcare',
      description: 'Quality healthcare standards certified'
    },
    {
      icon: 'Users',
      title: '50+ Doctors',
      description: 'Expert medical professionals'
    },
    {
      icon: 'Building2',
      title: '5K+ Successful Treatments',
      description: 'Comprehensive healthcare services'
    },
    {
      icon: 'Clock',
      title: '24/7 Emergency Care',
      description: 'Round-the-clock medical care'
    },
    {
      icon: 'Shield',
      title: 'Advanced Diagnostic Center',
      description: 'State-of-the-art medical technology'
    },
    {
      icon: 'Heart',
      title: 'Insurance Cashless Facility',
      description: 'Hassle-free treatment options'
    }
  ];

  const iconMap = {
    Award,
    Users,
    Building2,
    Clock,
    Shield,
    Heart
  };


  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://brandingpioneers.co.in/akropolis/help-desk-img.webp"
                alt="Modern Hospital Building"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-gray-900 text-sm">NABH Certified</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                <span>About Akropolis</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Committed to
                <span className="text-[#328CCB]"> Healthcare Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Akropolis Super Speciality Hospital stands as a beacon of advanced healthcare,
                offering comprehensive medical services with cutting-edge technology and
                compassionate care. Our NABH accredited facility ensures the highest standards
                of patient safety and treatment outcomes.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className={`group bg-gray-50 hover:bg-[#328CCB]/5 rounded-xl p-4 transition-all duration-300 border border-gray-100 hover:border-[#328CCB]/20`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-white group-hover:bg-[#328CCB]/10 p-2 rounded-lg transition-colors duration-300">
                        <IconComponent className="h-5 w-5 text-[#328CCB]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/about');
                  window.location.reload();
                }}
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit shadow-lg"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;