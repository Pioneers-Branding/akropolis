import React, { useState } from 'react';
import {
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
  ArrowRight,
  CheckCircle,
  Award,
  Building2,
  Phone,
  Calendar
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

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
      'Stress Testing',
      'Holter Monitoring',
      'Pacemaker Implantation'
    ],
    color: 'bg-red-50 border-red-200 text-red-600'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    title: 'Neurology',
    description: 'Comprehensive brain and nervous system care with advanced neurological treatments and diagnostic services.',
    icon: 'Brain',
    image: 'https://brandingpioneers.co.in/akropolis/Neurology.webp',
    services: [
      'Stroke Management',
      'Epilepsy Treatment',
      'Neurological Diagnostics',
      'Movement Disorders',
      'Memory Disorders',
      'Headache Treatment'
    ],
    color: 'bg-purple-50 border-purple-200 text-purple-600'
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    title: 'Nephrology & Dialysis',
    description: 'Comprehensive kidney care with advanced treatments for all renal conditions and dialysis services.',
    icon: 'Droplets',
    image: 'https://brandingpioneers.co.in/akropolis/Nephrology.webp',
    services: [
      'Kidney Disease Treatment',
      'Dialysis Services',
      'Transplant Care',
      'Hypertension Management',
      'Chronic Kidney Disease',
      'Acute Kidney Injury'
    ],
    color: 'bg-cyan-50 border-cyan-200 text-cyan-600'
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
      'Surgical Oncology',
      'Immunotherapy',
      'Palliative Care'
    ],
    color: 'bg-orange-50 border-orange-200 text-orange-600'
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    title: 'Obstetrics & Gynecology',
    description: 'Comprehensive women\'s health and reproductive care with advanced gynecological treatments and maternity services.',
    icon: 'Heart',
    image: 'https://brandingpioneers.co.in/akropolis/Gynecology.webp',
    services: [
      'Maternity Care',
      'Gynecological Surgery',
      'Fertility Treatment',
      'Women\'s Health Screening',
      'High-Risk Pregnancy',
      'Laparoscopic Surgery'
    ],
    color: 'bg-pink-50 border-pink-200 text-pink-600'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    title: 'Orthopedics & Joint Replacement',
    description: 'Expert bone, joint, and muscle care with advanced orthopedic surgery and comprehensive musculoskeletal treatments.',
    icon: 'Bone',
    image: 'https://brandingpioneers.co.in/akropolis/Orthopaedics.jpg',
    services: [
      'Joint Replacement Surgery',
      'Arthroscopic Surgery',
      'Fracture Treatment',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Care'
    ],
    color: 'bg-blue-50 border-blue-200 text-blue-600'
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    title: 'Plastic & Reconstructive Surgery',
    description: 'Comprehensive surgical services with minimally invasive techniques and advanced surgical procedures.',
    icon: 'Scissors',
    image: 'https://brandingpioneers.co.in/akropolis/Plastic-Surgery.webp',
    services: [
      'Cosmetic Surgery',
      'Reconstructive Surgery',
      'Burn Treatment',
      'Aesthetic Procedures',
      'Hand Surgery',
      'Microsurgery'
    ],
    color: 'bg-indigo-50 border-indigo-200 text-indigo-600'
  },
  {
    id: 'ent',
    name: 'ENT',
    title: 'ENT (Ear, Nose & Throat)',
    description: 'Ear, nose, and throat care with advanced ENT surgery and comprehensive treatment for hearing and speech disorders.',
    icon: 'Ear',
    image: 'https://brandingpioneers.co.in/akropolis/ENT.webp',
    services: [
      'Hearing Loss Treatment',
      'Sinus Surgery',
      'Throat Disorders',
      'Voice & Speech Therapy',
      'Tonsillectomy',
      'Ear Microsurgery'
    ],
    color: 'bg-amber-50 border-amber-200 text-amber-600'
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    title: 'Ophthalmology (Eye Care)',
    description: 'Advanced eye care and vision treatment with comprehensive ophthalmological services.',
    icon: 'Eye',
    image: 'https://brandingpioneers.co.in/akropolis/Ophthalmology.webp',
    services: [
      'Cataract Surgery',
      'Retinal Treatment',
      'Glaucoma Management',
      'Vision Correction',
      'Corneal Transplant',
      'Pediatric Ophthalmology'
    ],
    color: 'bg-emerald-50 border-emerald-200 text-emerald-600'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    title: 'Dermatology & Cosmetology',
    description: 'Comprehensive skin, hair, and nail care with advanced dermatological treatments.',
    icon: 'Sparkles',
    image: 'https://brandingpioneers.co.in/akropolis/Dermatology.webp',
    services: [
      'Skin Disease Treatment',
      'Cosmetic Dermatology',
      'Hair Treatment',
      'Laser Therapy',
      'Acne Treatment',
      'Anti-Aging Treatments'
    ],
    color: 'bg-teal-50 border-teal-200 text-teal-600'
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    title: 'Gastroenterology & Endoscopy',
    description: 'Advanced digestive system care with comprehensive gastroenterological treatments.',
    icon: 'Pill',
    image: 'https://brandingpioneers.co.in/akropolis/Gastroenterology.webp',
    services: [
      'Endoscopy',
      'Colonoscopy',
      'Liver Disease Treatment',
      'Digestive Disorders',
      'ERCP Procedures',
      'IBD Treatment'
    ],
    color: 'bg-green-50 border-green-200 text-green-600'
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
      'Vaccination Programs',
      'NICU Services',
      'Pediatric Emergency'
    ],
    color: 'bg-yellow-50 border-yellow-200 text-yellow-600'
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
      'Wellness Programs',
      'Lifestyle Modification',
      'Therapeutic Nutrition'
    ],
    color: 'bg-lime-50 border-lime-200 text-lime-600'
  }
];

interface DepartmentsPageProps {
  onNavigate?: (page: string) => void;
}

const DepartmentsPage: React.FC<DepartmentsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Departments' },
    { id: 'surgical', name: 'Surgical' },
    { id: 'medical', name: 'Medical' },
    { id: 'diagnostic', name: 'Diagnostic' }
  ];

  const filteredDepartments = selectedCategory === 'all'
    ? allDepartments
    : allDepartments.filter(dept => {
      if (selectedCategory === 'surgical') {
        return ['plastic-surgery', 'orthopedics', 'cardiology', 'ent', 'ophthalmology'].includes(dept.id);
      }
      if (selectedCategory === 'medical') {
        return ['neurology', 'nephrology', 'oncology', 'gynecology', 'dermatology', 'gastroenterology', 'nicu-pediatrics'].includes(dept.id);
      }
      if (selectedCategory === 'diagnostic') {
        return ['nutrition'].includes(dept.id);
      }
      return true;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Building2 className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Medical Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Medical
              <span className="block">Departments</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services across all medical specialties with expert doctors,
              advanced technology, and compassionate care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergency}`}
                className="bg-white hover:bg-gray-50 text-[#328CCB] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Emergency: {CONTACT_INFO.emergency}</span>
              </a>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('home');
                  }
                }}
                className="text-blue-200 hover:text-white font-medium transition-colors duration-200"
              >
                ← Back to Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                      ? 'bg-[#D66C43] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-[#328CCB]/10 hover:text-[#328CCB] border border-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#328CCB]">{filteredDepartments.length}</span> departments
                {selectedCategory !== 'all' && (
                  <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((department) => {
              const IconComponent = iconMap[department.icon as keyof typeof iconMap];
              return (
                <div
                  key={department.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Department Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={department.image}
                      alt={department.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <IconComponent className="h-6 w-6 text-[#328CCB]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {department.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {department.description}
                    </p>

                    {/* Services */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Services:</h4>
                      {department.services.slice(0, 4).map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#D66C43] flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{service}</span>
                        </div>
                      ))}
                      {department.services.length > 4 && (
                        <p className="text-xs text-gray-500 mt-2">
                          +{department.services.length - 4} more services
                        </p>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col space-y-3">
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
                          const page = pageMap[department.id];
                          if (page && onNavigate) {
                            onNavigate(page);
                          }
                        }}
                        disabled={!['cardiology', 'neurology', 'nephrology', 'orthopedics', 'nicu-pediatrics', 'oncology', 'gynecology', 'plastic-surgery', 'ent', 'ophthalmology', 'dermatology', 'gastroenterology', 'nutrition'].includes(department.id)}
                        className={`${['cardiology', 'neurology', 'nephrology', 'orthopedics', 'nicu-pediatrics', 'oncology', 'gynecology', 'plastic-surgery', 'ent', 'ophthalmology', 'dermatology', 'gastroenterology', 'nutrition'].includes(department.id)
                            ? 'bg-[#328CCB] hover:bg-[#2a7bb5] text-white cursor-pointer'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          } px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-[#328CCB] hover:text-[#2a7bb5] font-medium text-sm transition-colors duration-200 text-center"
                      >
                        Book Appointment →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              <span>Contact Hospital</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Need Help Choosing a Department?
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our patient care team is here to help you find the right specialist for your medical needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Phone className="h-8 w-8 text-[#328CCB] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">General Inquiries</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold hover:underline">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Phone className="h-8 w-8 text-[#D66C43] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Emergency</h3>
                <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#D66C43] font-semibold hover:underline">
                  {CONTACT_INFO.emergency}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">NABH Accredited</h3>
                <p className="text-gray-600 text-sm">Quality Healthcare Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentsPage;