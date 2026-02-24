import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const EmergencyBar: React.FC = () => {
  return (
    <div className="bg-[#D66C43] text-white py-2 px-4 text-center sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        <Phone className="h-4 w-4" />
        <span className="font-semibold text-sm md:text-base">
          Emergency 24×7: {CONTACT_INFO.emergency}
        </span>
      </div>
    </div>
  );
};

export default EmergencyBar;