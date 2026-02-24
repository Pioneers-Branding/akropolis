import React from 'react';
import { Award, Clock, Baby, Activity, Shield, CreditCard } from 'lucide-react';
import { TRUST_SIGNALS } from '../utils/constants';

const iconMap = {
  Award,
  Clock,
  Baby,
  Activity,
  Shield,
  CreditCard
};

const TrustSignals: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_SIGNALS.map((signal, index) => {
            const IconComponent = iconMap[signal.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#328CCB]/10 p-2 lg:p-3 rounded-full">
                    <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-[#328CCB]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-xs lg:text-base">
                  {signal.title}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-tight lg:leading-relaxed">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;