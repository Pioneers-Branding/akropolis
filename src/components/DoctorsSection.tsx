import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Shield, Award } from 'lucide-react';
import { doctors } from '../data/doctors';

interface DoctorsSectionProps {
  onDoctorClick?: (doctorId: string) => void;
}

const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onDoctorClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const doctorsPerSlide = 3;
  const totalSlides = Math.ceil(doctors.length / doctorsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentDoctors = doctors.slice(
    currentSlide * doctorsPerSlide,
    (currentSlide + 1) * doctorsPerSlide
  );

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Medical Team</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Expert <span className="text-[#328CCB]">Doctors</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Meet our team of highly qualified specialist doctors committed to providing
            world-class healthcare with personalized attention.
          </p>
        </div>

        {/* Doctors Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                  onClick={() => onDoctorClick && onDoctorClick(doctor.id)}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                      </p>

                      <p className="text-[#328CCB] font-semibold mb-1">
                        {doctor.specialization}
                      </p>

                      <p className="text-gray-600 text-sm mb-4">
                        {doctor.qualification}
                      </p>

                      {doctor.registrationVerified && (
                        <div className="inline-flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium mb-3">
                          <Shield className="h-3 w-3" />
                          <span>Verified</span>
                        </div>
                      )}

                      <div className="bg-gray-50 rounded-lg p-4 w-full mb-4">
                        <div className="flex items-center justify-center space-x-2 text-gray-700 mb-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium text-sm">OPD Timing</span>
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                          {doctor.opdTiming}
                        </p>
                      </div>

                      <div className="flex items-center justify-center space-x-4 text-sm font-medium mb-4">
                        <div className="flex items-center space-x-1 text-[#D66C43]">
                          <Award className="h-4 w-4" />
                          <span>{doctor.experience}</span>
                        </div>
                        {doctor.yearsAsSpecialist && (
                          <div className="text-gray-600 text-xs">
                            ({doctor.yearsAsSpecialist})
                          </div>
                        )}
                      </div>

                      <a
                        href="/contact"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.history.pushState({}, '', '/contact');
                          window.location.reload();
                        }}
                        className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-fit mx-auto"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>Book Appointment</span>
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDoctorClick && onDoctorClick(doctor.id);
                        }}
                        className="mt-2 text-[#328CCB] hover:text-[#2a7bb5] font-medium text-sm transition-colors duration-200"
                      >
                        View Full Profile →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-[#328CCB]' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="/doctors"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/doctors');
              window.location.reload();
            }}
            className="bg-[#D66C43] w-fit hover:bg-[#c55a36] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
          >
            <span>View All Doctors</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;