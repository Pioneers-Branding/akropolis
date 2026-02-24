import React, { useState } from 'react';
import { Heart, Brain, Activity, Pill, Droplets, Baby, Sparkles, Ear, Eye, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Bone, Scissors, Apple, Camera, Dumbbell } from 'lucide-react';
import { departments } from '../data/departments';

interface DepartmentsSectionProps {
  onNavigate?: (page: string) => void;
  activeDepartment?: string;
  onDepartmentChange?: (departmentId: string) => void;
}

const iconMap = {
  Heart,
  Brain,
  Bone,
  Scissors,
  Activity,
  Pill,
  Droplets,
  Baby,
  Sparkles,
  Ear,
  Eye,
  Apple,
  Camera,
  Dumbbell,
};

// All 13 departments data
const allDepartments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    title: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art cardiac procedures, interventional cardiology, and comprehensive cardiovascular treatments.',
    icon: 'Heart',
    image: 'https://brandingpioneers.co.in/akropolis/Cardiology.jpg',
    services: [
      'Cardiac Catheterization',
      'Angioplasty & Stenting',
      'Echocardiography',
      'Stress Testing'
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology',
    title: 'Neurology',
    description: 'Comprehensive brain and nervous system care with advanced neurological treatments and diagnostic services.',
    icon: 'Brain',
    image: '/images/Neurology.webp',
    services: [
      'Stroke Management',
      'Epilepsy Treatment',
      'Neurological Diagnostics',
      'Movement Disorders'
    ]
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    title: 'Nephrology',
    description: 'Comprehensive kidney care with advanced treatments for all renal conditions and dialysis services.',
    icon: 'Droplets',
    image: 'https://brandingpioneers.co.in/akropolis/Nephrology.webp',
    services: [
      'Kidney Disease Treatment',
      'Dialysis Services',
      'Transplant Care',
      'Hypertension Management'
    ]
  },
  {
    id: 'oncology',
    name: 'Oncology',
    title: 'Oncology',
    description: 'Comprehensive cancer care with advanced treatment options and multidisciplinary approach.',
    icon: 'Activity',
    image: 'https://brandingpioneers.co.in/akropolis/Oncology.webp',
    services: [
      'Cancer Diagnosis',
      'Chemotherapy',
      'Radiation Therapy',
      'Surgical Oncology'
    ]
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    title: 'Gynecology',
    description: 'Comprehensive women\'s health and reproductive care with advanced gynecological treatments and maternity services.',
    icon: 'Heart',
    image: 'https://brandingpioneers.co.in/akropolis/Gynecology.webp',
    services: [
      'Maternity Care',
      'Gynecological Surgery',
      'Fertility Treatment',
      'Women\'s Health Screening'
    ]
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    title: 'Orthopedics',
    description: 'Expert bone, joint, and muscle care with advanced orthopedic surgery and comprehensive musculoskeletal treatments.',
    icon: 'Bone',
    image: 'https://brandingpioneers.co.in/akropolis/Orthopaedics.jpg',
    services: [
      'Joint Replacement Surgery',
      'Arthroscopic Surgery',
      'Fracture Treatment',
      'Sports Medicine'
    ]
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    title: 'Plastic Surgery',
    description: 'Comprehensive surgical services with minimally invasive techniques and advanced surgical procedures.',
    icon: 'Scissors',
    image: 'https://brandingpioneers.co.in/akropolis/Plastic-Surgery.webp',
    services: [
      'Cosmetic Surgery',
      'Reconstructive Surgery',
      'Burn Treatment',
      'Aesthetic Procedures'
    ]
  },
  {
    id: 'ent',
    name: 'ENT',
    title: 'ENT',
    description: 'Ear, nose, and throat care with advanced ENT surgery and comprehensive treatment for hearing and speech disorders.',
    icon: 'Ear',
    image: 'https://brandingpioneers.co.in/akropolis/ENT.webp',
    services: [
      'Hearing Loss Treatment',
      'Sinus Surgery',
      'Throat Disorders',
      'Voice & Speech Therapy'
    ]
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    title: 'Ophthalmology',
    description: 'Advanced eye care and vision treatment with comprehensive ophthalmological services.',
    icon: 'Eye',
    image: 'https://brandingpioneers.co.in/akropolis/Ophthalmology.webp',
    services: [
      'Cataract Surgery',
      'Retinal Treatment',
      'Glaucoma Management',
      'Vision Correction'
    ]
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    title: 'Dermatology',
    description: 'Comprehensive skin, hair, and nail care with advanced dermatological treatments.',
    icon: 'Sparkles',
    image: 'https://brandingpioneers.co.in/akropolis/Dermatology.webp',
    services: [
      'Skin Disease Treatment',
      'Cosmetic Dermatology',
      'Hair Treatment',
      'Laser Therapy'
    ]
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    title: 'Gastroenterology',
    description: 'Advanced digestive system care with comprehensive gastroenterological treatments.',
    icon: 'Pill',
    image: 'https://brandingpioneers.co.in/akropolis/Gastroenterology.webp',
    services: [
      'Endoscopy',
      'Colonoscopy',
      'Liver Disease Treatment',
      'Digestive Disorders'
    ]
  },
  {
    id: 'nicu-pediatrics',
    name: 'NICU/Pediatrics',
    title: 'NICU & Pediatrics',
    description: 'Specialized care for newborns and children with advanced pediatric treatments.',
    icon: 'Baby',
    image: 'https://brandingpioneers.co.in/akropolis/NICU & Pediatrics.webp',
    services: [
      'Newborn Care',
      'Pediatric Surgery',
      'Child Development',
      'Vaccination Programs'
    ]
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    title: 'Health & Nutrition',
    description: 'Comprehensive nutritional counseling and wellness programs for optimal health.',
    icon: 'Apple',
    image: 'https://brandingpioneers.co.in/akropolis/Health & Nutrition.webp',
    services: [
      'Diet Planning',
      'Nutritional Counseling',
      'Weight Management',
      'Wellness Programs'
    ]
  }
];

const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ 
  onNavigate, 
  activeDepartment = 'cardiology',
  onDepartmentChange 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const activeTab = activeDepartment;
  const activeDepartmentData = allDepartments.find(dept => dept.id === activeTab) || allDepartments[0];
  const IconComponent = iconMap[activeDepartmentData.icon as keyof typeof iconMap];

  // Slider configuration
  const itemsPerSlide = 4; // Show 4 tabs at a time on desktop, 2 on mobile
  const totalSlides = Math.ceil(allDepartments.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentDepartments = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return allDepartments.slice(startIndex, startIndex + itemsPerSlide);
  };

  const handleTabClick = (departmentId: string) => {
    if (onDepartmentChange) {
      onDepartmentChange(departmentId);
    }
  };

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            <span>Our Departments</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            World-Class <span className="text-[#328CCB]">Medical Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services across all medical specialties with expert doctors and advanced technology.
          </p>
        </div>

        {/* Horizontal Slider for Department Tabs */}
        <div className="mb-12">
          <div className="relative">
            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200 z-10"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200 z-10"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </>
            )}

            {/* Slider Container */}
            <div className={`overflow-hidden ${totalSlides > 1 ? 'mx-8' : ''}`}>
              {totalSlides > 1 ? (
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="flex space-x-4 min-w-full flex-shrink-0">
                      {allDepartments.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((dept) => {
                        const TabIconComponent = iconMap[dept.icon as keyof typeof iconMap];
                        return (
                          <button
                            key={dept.id}
                            onClick={() => handleTabClick(dept.id)}
                            className={`flex items-center space-x-3 px-6 py-4 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-1 justify-center ${
                              activeTab === dept.id
                                ? 'bg-[#D66C43] text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                            }`}
                          >
                            <TabIconComponent className="h-5 w-5" />
                            <span>{dept.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-4">
                  {allDepartments.map((dept) => {
                    const TabIconComponent = iconMap[dept.icon as keyof typeof iconMap];
                    return (
                      <button
                        key={dept.id}
                        onClick={() => handleTabClick(dept.id)}
                        className={`flex items-center space-x-3 px-6 py-4 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                          activeTab === dept.id
                            ? 'bg-[#D66C43] text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                        }`}
                      >
                        <TabIconComponent className="h-5 w-5" />
                        <span>{dept.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-[#D66C43]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Featured Department Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Department Number */}
                <div className="text-8xl font-bold text-gray-100 mb-4 leading-none">
                  {String(allDepartments.findIndex(d => d.id === activeDepartmentData.id) + 1).padStart(2, '0')}
                </div>

                {/* Department Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {activeDepartmentData.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeDepartmentData.description}
                </p>

                {/* Services List */}
                <div className="space-y-3 mb-8">
                  {activeDepartmentData.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#D66C43] flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Department Link Button */}
                <button
                  onClick={() => {
                    const pageMap: { [key: string]: string } = {
                      'cardiology': 'cardiology',
                      'neurology': 'neurology',
                      'nephrology': 'nephrology',
                      'orthopedics': 'orthopedics',
                      'nicu-pediatrics': 'pediatrics',
                      'oncology': 'oncology',
                      'gynecology': 'obstetrics-gynecology',
                      'plastic-surgery': 'plastic-surgery',
                      'ent': 'ent',
                      'ophthalmology': 'ophthalmology',
                      'dermatology': 'dermatology',
                      'gastroenterology': 'gastroenterology',
                      'nutrition': 'health-nutrition'
                    };
                    const page = pageMap[activeDepartmentData.id];
                    if (page && onNavigate) {
                      onNavigate(page);
                    }
                  }}
                  className={`${
                    ['cardiology', 'neurology', 'nephrology', 'orthopedics', 'nicu-pediatrics', 'oncology', 'gynecology', 'plastic-surgery', 'ent', 'ophthalmology', 'dermatology', 'gastroenterology', 'nutrition'].includes(activeDepartmentData.id)
                      ? 'bg-[#328CCB] hover:bg-[#2a7bb5] text-white cursor-pointer'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-fit`}
                  disabled={!['cardiology', 'neurology', 'nephrology', 'orthopedics', 'nicu-pediatrics', 'oncology', 'gynecology', 'plastic-surgery', 'ent', 'ophthalmology', 'dermatology', 'gastroenterology', 'nutrition'].includes(activeDepartmentData.id)}
                >
                  <span>Learn More About This Department</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src={activeDepartmentData.image}
                  alt={activeDepartmentData.title}
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate && onNavigate('departments');
            }}
            className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit mx-auto shadow-lg"
          >
            <span>View All Departments</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;