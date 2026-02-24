import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Insurance partners with their logo paths
const INSURANCE_PARTNERS = [
  {
    name: 'Acko Health Insurance',
    logo: 'https://brandingpioneers.co.in/akropolis/Acko-Health-Insurance.png'
  },
  {
    name: 'Aditya Birla',
    logo: 'https://brandingpioneers.co.in/akropolis/Aditya-Birla.png'
  },
  {
    name: 'Bajaj Allianz General Insurance',
    logo: 'https://brandingpioneers.co.in/akropolis/Bajaj-Allianz-General-Insurance-Co. Ltd.png'
  },
  {
    name: 'Care Health Insurance',
    logo: 'https://brandingpioneers.co.in/akropolis/Car- Health-Insurance.png'
  },
  {
    name: 'Cholamandalam MS',
    logo: 'https://brandingpioneers.co.in/akropolis/Cholamandalam \'.png'
  },
  {
    name: 'Ericson',
    logo: 'https://brandingpioneers.co.in/akropolis/Ericson-TPA.png'
  },
  {
    name: 'GIPSA',
    logo: 'https://brandingpioneers.co.in/akropolis/GIPSA.png'
  },
  {
    name: 'Genins',
    logo: 'https://brandingpioneers.co.in/akropolis/Genins-TPA.png'
  },
  {
    name: 'Future-Generali',
    logo: 'https://brandingpioneers.co.in/akropolis/Future-Generali.png'
  },
  {
    name: 'FHP',
    logo: 'https://brandingpioneers.co.in/akropolis/FHP- TPA.png'
  },
  {
    name: 'Go-Digit',
    logo: 'https://brandingpioneers.co.in/akropolis/Go-Digit.png'
  },
  {
    name: 'Good-Health-Plan-Ltd',
    logo: 'https://brandingpioneers.co.in/akropolis/Good-Health-Plan-Ltd.png'
  },
  {
    name: 'Health-India-TPA',
    logo: 'https://brandingpioneers.co.in/akropolis/Health-India-TPA.png'
  },
  {
    name: 'Heritage-Health-TPA',
    logo: 'https://brandingpioneers.co.in/akropolis/Heritage-Health-TPA.png'
  },
  {
    name: 'IFFCO-Tokio-General-Insurance Co. Ltd',
    logo: 'https://brandingpioneers.co.in/akropolis/IFFCO-Tokio-General-Insurance Co. Ltd.png'
  },
  {
    name: 'NATIONAL-INSURANCE-COMPANY',
    logo: 'https://brandingpioneers.co.in/akropolis/NATIONAL-INSURANCE-COMPANY.png'
  },
  {
    name: 'Medsave-TPA',
    logo: 'https://brandingpioneers.co.in/akropolis/Medsave-TPA.png'
  },
  {
    name: 'Mediassist-TPA- Pvt-Insurance',
    logo: 'https://brandingpioneers.co.in/akropolis/Mediassist-TPA- Pvt-Insurance.png'
  },
  {
    name: 'MD-India',
    logo: 'https://brandingpioneers.co.in/akropolis/MD-India.png'
  },
  {
    name: 'LIBERTY-GENERA- INSURANCE',
    logo: 'https://brandingpioneers.co.in/akropolis/LIBERTY-GENERA- INSURANCE.png'
  },
];
const InsuranceSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(INSURANCE_PARTNERS.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentPartners = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return INSURANCE_PARTNERS.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">          
            Trusted by Leading <span className="text-[#328CCB]">Insurance Partners</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Cashless treatment available with major insurance providers
          </p>
        </div>

        {/* Insurance Partners Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
              {getCurrentPartners().map((partner, index) => (
                <div 
                  key={`${currentIndex}-${index}`}
                  className="bg-white hover:bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 text-center transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center min-h-[120px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain mb-3"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                  <h4 className="text-sm font-semibold text-gray-800 hidden">
                    {partner.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-[#328CCB]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Cashless treatment available • Easy claim process • Direct billing facility
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSlider;