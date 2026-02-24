import React, { useState } from 'react';
import {
  Shield,
  Activity,
  Stethoscope,
  Calendar,
  Phone,
  Clock,
  Award,
  CheckCircle,
  User,
  Mail,
  MessageSquare,
  Send,
  Heart,
  Scissors,
  Sparkles,
  Building2,
  Users,
  Target,
  BookOpen,
  Zap,
  HeartHandshake,
  FileText,
  ChevronDown,
  ChevronUp,
  Info,
  TrendingUp,
  UserCheck,
  Leaf,
  AlertCircle,
  Eye
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const PlasticSurgeryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    symptoms: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Plastic Surgery consultation form submitted:', formData);
  };

  const services = [
    {
      name: 'Reconstructive Surgery',
      description: 'Restoration of form and function after trauma, cancer, or congenital conditions',
      icon: Shield
    },
    {
      name: 'Cosmetic Surgery',
      description: 'Aesthetic procedures to enhance facial and body features',
      icon: Sparkles
    },
    {
      name: 'Burn Treatment',
      description: 'Specialized care for burn injuries with advanced reconstruction',
      icon: Activity
    },
    {
      name: 'Hand Surgery',
      description: 'Microsurgical repair and reconstruction of hand injuries',
      icon: Heart
    },
    {
      name: 'Facial Reconstruction',
      description: 'Complex facial procedures including trauma and cosmetic enhancements',
      icon: Eye
    },
    {
      name: 'Breast Surgery',
      description: 'Reconstruction, reduction, and augmentation procedures',
      icon: Stethoscope
    }
  ];

  const conditions = [
    'Post-Traumatic Reconstruction',
    'Burn Injuries & Scarring',
    'Cleft Lip and Palate',
    'Hand Injuries & Deformities',
    'Facial Trauma',
    'Breast Reconstruction (Post-Cancer)',
    'Skin Cancer Reconstruction',
    'Congenital Deformities',
    'Scar Revision',
    'Cosmetic Enhancement'
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Surgical Facilities',
      description: 'State-of-the-art operation theaters with latest microsurgical technology'
    },
    {
      icon: Award,
      title: 'Expert Plastic Surgeons',
      description: 'Board-certified specialists with extensive reconstructive and cosmetic experience'
    },
    {
      icon: Clock,
      title: 'Comprehensive Care',
      description: 'Complete surgical care from consultation through recovery and follow-up'
    },
    {
      icon: Shield,
      title: 'NABH Accredited',
      description: 'Quality healthcare standards certified for patient safety'
    }
  ];

  const treatmentApproaches = [
    {
      icon: Target,
      title: 'Personalized Surgical Plans',
      description: 'Each patient receives a customized surgical strategy based on their unique needs, anatomy, and desired outcomes for optimal results.',
      features: ['Detailed Consultation', '3D Imaging', 'Customized Approach']
    },
    {
      icon: Scissors,
      title: 'Reconstructive Excellence',
      description: 'Advanced microsurgical techniques for complex reconstructions including post-cancer, trauma, and congenital condition repairs.',
      features: ['Microsurgery', 'Tissue Transfer', 'Functional Restoration']
    },
    {
      icon: Sparkles,
      title: 'Aesthetic Enhancement',
      description: 'Cosmetic procedures performed with artistic precision and medical expertise to achieve natural-looking, beautiful results.',
      features: ['Facial Procedures', 'Body Contouring', 'Minimally Invasive']
    },
    {
      icon: HeartHandshake,
      title: 'Post-Operative Support',
      description: 'Comprehensive care including pain management, wound care, physical therapy, and psychological support throughout recovery.',
      features: ['Pain Management', 'Scar Care', 'Recovery Support']
    }
  ];

  const statistics = [
    { number: '5,000+', label: 'Successful Procedures' },
    { number: '98%', label: 'Patient Satisfaction Rate' },
    { number: '20+', label: 'Years of Excellence' },
    { number: '24/7', label: 'Emergency Services' }
  ];

  const patientResources = [
    {
      icon: FileText,
      title: 'Pre-Surgery Preparation',
      description: 'Essential information and guidelines to prepare for your plastic surgery procedure.'
    },
    {
      icon: Heart,
      title: 'Recovery Guidelines',
      description: 'Detailed post-operative care instructions and recovery expectations.'
    },
    {
      icon: BookOpen,
      title: 'Procedure Information',
      description: 'Comprehensive guides about different plastic surgery procedures and techniques.'
    },
    {
      icon: Sparkles,
      title: 'Before & After Care',
      description: 'Information about wound care, scar management, and long-term results.'
    },
    {
      icon: Leaf,
      title: 'Nutrition & Healing',
      description: 'Dietary guidelines to support optimal healing and recovery after surgery.'
    },
    {
      icon: UserCheck,
      title: 'Support Services',
      description: 'Counseling and support resources for patients and families.'
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between plastic surgery and cosmetic surgery?',
      answer: 'Plastic surgery is a broader specialty that includes both reconstructive and cosmetic procedures. Reconstructive plastic surgery aims to restore form and function after trauma, disease, or congenital conditions. Cosmetic surgery focuses on aesthetic enhancement. Our surgeons are trained in both disciplines and can address medical needs as well as aesthetic goals.'
    },
    {
      question: 'How long is the recovery period after plastic surgery?',
      answer: 'Recovery time varies significantly depending on the procedure. Minor procedures may require only a few days, while major reconstructive surgeries can take several weeks to months. During your consultation, we provide specific recovery timelines, activity restrictions, and what to expect during each phase of healing. We support you throughout the entire recovery process.'
    },
    {
      question: 'Are plastic surgery procedures safe?',
      answer: 'When performed by board-certified plastic surgeons in accredited facilities, plastic surgery is generally safe. We follow strict safety protocols, use advanced techniques, and have comprehensive pre-operative screening to minimize risks. All surgical procedures carry some risk, which we discuss thoroughly during consultation. Our priority is patient safety and achieving the best possible outcomes.'
    },
    {
      question: 'Will there be visible scars after surgery?',
      answer: 'All surgical procedures create scars, but plastic surgeons are specially trained in techniques to minimize scarring. We place incisions in natural skin folds and less visible areas when possible. Scars typically fade significantly over time. We provide comprehensive scar management guidance including specialized treatments and products to optimize healing and minimize scar appearance.'
    },
    {
      question: 'How do I prepare for plastic surgery?',
      answer: 'Preparation includes medical evaluation, laboratory tests, stopping certain medications, quitting smoking, maintaining good nutrition, and arranging post-surgery support. We provide detailed pre-operative instructions specific to your procedure. Mental and emotional preparation is also important. During consultation, we ensure you have realistic expectations and understand all aspects of the procedure and recovery.'
    },
    {
      question: 'Does insurance cover plastic surgery procedures?',
      answer: 'Insurance typically covers reconstructive procedures that restore function or correct abnormalities from trauma, disease, or congenital conditions. This includes breast reconstruction after cancer, cleft repairs, and trauma reconstruction. Cosmetic procedures for aesthetic enhancement are usually not covered. Our team can help verify your insurance coverage and discuss financing options for out-of-pocket expenses.'
    }
  ];

  const emergencyWarnings = [
    {
      symptom: 'Severe Bleeding',
      description: 'Uncontrolled bleeding or blood soaking through dressings'
    },
    {
      symptom: 'Signs of Infection',
      description: 'Fever, increased pain, redness, swelling, or discharge'
    },
    {
      symptom: 'Breathing Difficulty',
      description: 'Shortness of breath or chest pain after surgery'
    },
    {
      symptom: 'Severe Swelling',
      description: 'Sudden, excessive swelling or tissue changes'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] bg-opacity-85"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Scissors className="h-6 w-6 text-blue-200" />
              <span className="text-blue-100 font-semibold">Reconstructive & Aesthetic Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Plastic &
              <span className="block">Reconstructive Surgery</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Expert plastic surgery combining medical precision with artistic excellence for
              reconstructive restoration and aesthetic enhancement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#consultation-form"
                className="bg-white hover:bg-gray-50 text-[#328CCB] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Consultation</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergency}`}
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
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
                  window.history.pushState({}, '', '/');
                  window.location.reload();
                }}
                className="text-white hover:text-blue-100 font-medium transition-colors duration-200"
              >
                ← Back to Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#328CCB] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-red-900">
                Post-Surgical Emergency Warning Signs
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyWarnings.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-700 mb-2">{item.symptom}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-red-900 font-semibold">
                If you experience these symptoms after surgery, call{' '}
                <a href={`tel:${CONTACT_INFO.emergency}`} className="underline">
                  {CONTACT_INFO.emergency}
                </a>{' '}
                immediately!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Why Choose Our Plastic Surgery Department</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Reconstructive &
              <span className="text-[#328CCB]"> Aesthetic Surgery</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our plastic surgery department combines medical expertise with artistic precision,
              offering comprehensive reconstructive and cosmetic procedures with patient-centered care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-8 text-center"
                >
                  <div className="bg-[#328CCB]/10 p-4 rounded-xl w-fit mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-[#328CCB]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Our Treatment Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Plastic Surgery
              <span className="text-[#328CCB]"> Treatment Approaches</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From reconstructive restoration to aesthetic enhancement, we provide complete
              surgical care tailored to each patient's unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {treatmentApproaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-[#328CCB]/10 p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-[#328CCB]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {approach.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-16">
                    {approach.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#328CCB] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Plastic Surgery
              <span className="text-[#328CCB]"> Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From reconstructive procedures to aesthetic enhancements, we provide
              complete plastic surgery care with expertise and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white hover:bg-gray-50 rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-[#328CCB]/30 hover:shadow-lg"
                >
                  <div className="bg-[#328CCB]/10 p-3 rounded-xl w-fit mb-6">
                    <IconComponent className="h-6 w-6 text-[#328CCB]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Activity className="h-4 w-4" />
                <span>Conditions We Treat</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Plastic Surgery Conditions
                <span className="text-[#328CCB]"> We Specialize In</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced plastic surgery team treats a wide range of reconstructive and aesthetic
                conditions with personalized surgical plans designed for optimal outcomes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#328CCB] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Patient Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Plastic Surgery Resources for
              <span className="text-[#328CCB]"> Patients & Families</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources to support your surgical journey and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {patientResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-[#328CCB]/10 p-3 rounded-xl w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-[#328CCB]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {resource.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Common Questions About
              <span className="text-[#328CCB]"> Plastic Surgery</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about plastic and reconstructive surgery procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-left font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#328CCB] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                <span>Book Consultation</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Schedule Your Plastic Surgery
                <span className="text-[#328CCB]"> Consultation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Begin your journey to restoration or enhancement. Fill out the form below
                and we will contact you to schedule your appointment.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <form accept-charset='UTF-8' action='https://app.formester.com/forms/26PHowyy9/submissions' method='POST' className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="120"
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                      placeholder="Enter your age"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="symptoms" className="block text-sm font-semibold text-gray-700 mb-2">
                    Procedure of Interest or Condition
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <Scissors className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      rows={3}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Please describe the procedure you're interested in or condition you'd like to address..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Any additional information you'd like to share..."
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] hover:from-[#2a7bb5] hover:to-[#236999] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    <span>Schedule Consultation</span>
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Our team will contact you within 24 hours to confirm your appointment.
                    For emergencies, please call{' '}
                    <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#328CCB] font-semibold hover:underline">
                      {CONTACT_INFO.emergency}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Need Immediate Plastic Surgery Support?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <Phone className="h-8 w-8 text-[#D66C43] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Emergency</h4>
                <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#D66C43] font-semibold hover:underline text-lg">
                  {CONTACT_INFO.emergency}
                </a>
                <p className="text-sm text-gray-500 mt-1">24/7 Available</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <Phone className="h-8 w-8 text-[#328CCB] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Appointments</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold hover:underline text-lg">
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">Mon-Sat: 8 AM - 8 PM</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <Mail className="h-8 w-8 text-[#328CCB] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#328CCB] font-semibold hover:underline">
                  {CONTACT_INFO.email}
                </a>
                <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlasticSurgeryPage;
