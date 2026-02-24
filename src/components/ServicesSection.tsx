import React from 'react';
import { Scan, Eye, Search, Activity, TestTube, Clock, CheckCircle, ArrowRight, Award, Sparkles, Zap, Shield } from 'lucide-react';
import { services } from '../data/services';

interface ServicesSectionProps {
  onServiceNavigate?: (serviceId: string) => void;
}

const iconMap = {
  Scan,
  Eye,
  Search,
  Activity,
  TestTube,
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceNavigate }) => {
  
  const handleServiceClick = (serviceId: string) => {
    if (onServiceNavigate) {
      // Map service IDs to page routes
      const serviceRoutes: { [key: string]: string } = {
        'ct-scan': 'ct-scan',
        'endoscopy': 'endoscopy',
        'colonoscopy': 'colonoscopy',
        'bronchoscopy': 'bronchoscopy',
        'dialysis': 'dialysis',
        'laboratory': 'laboratory',
      };
      
      const route = serviceRoutes[serviceId];
      if (route) {
        onServiceNavigate(route);
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Advanced Technology</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Advanced <span className="text-[#328CCB]">Diagnostic Excellence</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience precision healthcare with our cutting-edge diagnostic technology and expert medical professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={service.id}
                className="group relative transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  
                  <div className="p-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="bg-[#328CCB]/10 group-hover:bg-[#328CCB] p-4 rounded-xl transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-[#328CCB] group-hover:text-white transition-colors duration-300" />
                        </div>
                        {service.available247 && (
                          <div className="absolute -top-2 -right-2 bg-[#D66C43] text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>24/7</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Expert Medical Staff</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Latest Technology</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Quick & Accurate Results</span>
                      </div>
                    </div>
                    
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick(service.id);
                      }}
                      className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-fit mx-auto"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;