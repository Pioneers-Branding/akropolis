import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const FloatingCTAs: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-4 right-4 lg:hidden z-40">
      <div className="flex space-x-3">
        <a
          href="tel:9100009744"
          className="flex-1 bg-[#D66C43] hover:bg-[#c55a36] text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
        >
          <Phone className="h-5 w-5" />
          <span>Emergency</span>
        </a>
        <a 
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/contact');
            window.location.reload();
          }}
          className="flex-1 bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
        >
          <Calendar className="h-5 w-5" />
          <span>Appointment</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTAs;