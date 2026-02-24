import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Quote, ArrowRight, Users, Heart } from 'lucide-react';
import { testimonials } from '../data/testimonials';

// YouTube video data for testimonials
const youtubeVideos = [
  { id: '27YYyNBTmqE', url: 'https://youtu.be/27YYyNBTmqE' }, // Parvana's testimonial
  { id: 'VZCHBjHabgA', url: 'https://youtube.com/shorts/VZCHBjHabgA' }, // Mr. Attar Singh's testimonial
  { id: 'J8hHjdXNZK4', url: 'https://youtube.com/shorts/J8hHjdXNZK4' }, // Sunil's testimonial
  { id: '2ptCdyAoazY', url: 'https://youtube.com/shorts/2ptCdyAoazY' }  // Mr. Uppendra's testimonial
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleVideoClick = () => {
    window.open(youtubeVideos[currentSlide].url, '_blank', 'noopener,noreferrer');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            <span>Patient Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Patient <span className="text-[#328CCB]">Experiences</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear directly from our patients about their journey to recovery and the compassionate 
            care they received at Akropolis Hospital.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              {/* Video Section */}
              <div className="relative bg-gray-900">
                <div
                  className="relative h-80 lg:h-full cursor-pointer group"
                  onClick={handleVideoClick}
                >
                  <img
                    src={currentTestimonial.videoThumbnail}
                    alt={`${currentTestimonial.patientName} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-95 group-hover:bg-opacity-100 p-6 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                      <Play className="h-12 w-12 text-[#328CCB] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-gray-900 font-medium text-sm">
                        Watch {currentTestimonial.patientName}'s Recovery Story
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <Quote className="h-12 w-12 text-[#328CCB] mb-6 opacity-50" />
                  
                  <blockquote className="text-gray-700 text-xl lg:text-2xl leading-relaxed font-medium mb-8 italic">
                    "{currentTestimonial.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-[#328CCB] pl-6 mb-8">
                  <h4 className="font-bold text-gray-900 text-xl mb-2">
                    {currentTestimonial.patientName}
                  </h4>
                  <p className="text-gray-600 text-lg mb-1">
                    {currentTestimonial.condition}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Treatment completed in {currentTestimonial.date}
                  </p>
                </div>

                {/* Navigation */}
                {testimonials.length > 1 && (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevSlide}
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                           index === currentSlide ? 'bg-[#328CCB]' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextSlide}
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-[#328CCB] mb-2">90%</div>
              <div className="text-gray-600 text-sm">Patient Satisfaction</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-[#D66C43] mb-2">5K+</div>
              <div className="text-gray-600 text-sm">Successful Treatments</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-[#328CCB] mb-2">50+</div>
              <div className="text-gray-600 text-sm">Doctors</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-[#D66C43] mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Emergency Care</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.location.reload();
            }}
            className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit mx-auto shadow-lg"
          >
            <Users className="h-5 w-5" />
            <span>Share Your Story</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsSection;