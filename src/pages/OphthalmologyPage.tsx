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
  Eye,
  Baby,
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
  UserCheck,
  Leaf,
  AlertCircle,
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const OphthalmologyPage: React.FC = () => {
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
    console.log('Ophthalmology consultation form submitted:', formData);
  };

  const services = [
    {
      name: 'Cataract Surgery',
      description: 'Advanced surgical removal of clouded lens with modern intraocular lens implants',
      icon: Eye
    },
    {
      name: 'LASIK Surgery',
      description: 'Laser vision correction for nearsightedness, farsightedness, and astigmatism',
      icon: Zap
    },
    {
      name: 'Glaucoma Treatment',
      description: 'Medical and surgical management to prevent vision loss from glaucoma',
      icon: AlertCircle
    },
    {
      name: 'Retina Services',
      description: 'Specialized care for retinal detachment, macular degeneration, and diabetic retinopathy',
      icon: Activity
    },
    {
      name: 'Cornea Treatment',
      description: 'Treatment for corneal diseases, infections, and transplant services',
      icon: Shield
    },
    {
      name: 'Pediatric Ophthalmology',
      description: 'Comprehensive eye care for children including vision screening and treatment',
      icon: Baby
    }
  ];

  const conditions = [
    'Cataracts',
    'Glaucoma',
    'Macular Degeneration',
    'Diabetic Retinopathy',
    'Dry Eye Syndrome',
    'Refractive Errors (Myopia, Hyperopia)',
    'Retinal Detachment',
    'Corneal Diseases',
    'Eye Infections & Inflammations',
    'Strabismus (Crossed Eyes)'
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Ophthalmology Facilities',
      description: 'State-of-the-art equipment for diagnosis and treatment of Ophthalmology conditions'
    },
    {
      icon: Award,
      title: 'Expert Ophthalmology Specialists',
      description: 'Board-certified otolaryngologists with extensive experience'
    },
    {
      icon: Clock,
      title: 'Comprehensive Care',
      description: 'Complete Ophthalmology care from diagnosis through treatment and follow-up'
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
      title: 'Personalized Treatment Plans',
      description: 'Each patient receives customized care based on their specific Ophthalmology condition, medical history, and individual needs for optimal outcomes.',
      features: ['Detailed Evaluation', 'Diagnostic Testing', 'Individualized Protocols']
    },
    {
      icon: Zap,
      title: 'Minimally Invasive Procedures',
      description: 'Advanced endoscopic and microsurgical techniques for faster recovery with less pain and minimal scarring.',
      features: ['Endoscopic Surgery', 'Laser Procedures', 'Quick Recovery']
    },
    {
      icon: Stethoscope,
      title: 'Medical Management',
      description: 'Comprehensive medical treatment options including medications, therapies, and lifestyle modifications for Ophthalmology conditions.',
      features: ['Medication Therapy', 'Allergy Management', 'Conservative Care']
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Services',
      description: 'Complete support including audiology, speech therapy, allergy testing, and rehabilitation services for optimal recovery.',
      features: ['Audiology Services', 'Speech Therapy', 'Allergy Testing']
    }
  ];

  const statistics = [
    { number: '15,000+', label: 'Ophthalmology Procedures Annually' },
    { number: '95%', label: 'Patient Satisfaction Rate' },
    { number: '25+', label: 'Years of Ophthalmology Excellence' },
    { number: '24/7', label: 'Emergency Ophthalmology Care' }
  ];

  const patientResources = [
    {
      icon: FileText,
      title: 'Ophthalmology Condition Guides',
      description: 'Comprehensive information about skin, hair, and nail conditions and treatments.'
    },
    {
      icon: Heart,
      title: 'Pre & Post-Op Care',
      description: 'Instructions and guidelines for preparing for and recovering from Ophthalmology procedures.'
    },
    {
      icon: BookOpen,
      title: 'Treatment Options',
      description: 'Detailed information about surgical and non-surgical eye treatment approaches.'
    },
    {
      icon: Eye,
      title: 'Vision Care Resources',
      description: 'Information about glasses, contact lenses, and vision correction options.'
    },
    {
      icon: Leaf,
      title: 'Eye Health Tips',
      description: 'Guidelines for maintaining healthy eyes and preventing vision problems.'
    },
    {
      icon: UserCheck,
      title: 'Support Services',
      description: 'Access to audiologists, speech therapists, and support groups.'
    }
  ];

  const faqs = [
    {
      question: 'When should I see an Ophthalmology specialist?',
      answer: 'You should see an Ophthalmology specialist for persistent ear infections, chronic sinusitis lasting more than 3 months, hearing loss, persistent sore throat, difficulty swallowing, chronic hoarseness, severe snoring or sleep apnea, frequent nosebleeds, or any concerning symptoms affecting your eye care and vision that don\'t improve with general treatment.'
    },
    {
      question: 'How is chronic sinusitis diagnosed and treated?',
      answer: 'Chronic sinusitis is diagnosed through physical examination, nasal endoscopy, and CT scans. Treatment typically starts with medications including antibiotics, nasal corticosteroids, and saline irrigation. If medical management fails, minimally invasive endoscopic sinus surgery may be recommended to improve drainage and ventilation of the sinuses.'
    },
    {
      question: 'What causes hearing loss and can it be treated?',
      answer: 'Hearing loss can result from various causes including aging, noise exposure, infections, genetic factors, or physical damage. Treatment depends on the type and cause: conductive hearing loss may be treated with medications or surgery, while sensorineural hearing loss often requires hearing aids or cochlear implants. Early evaluation is important for the best outcomes.'
    },
    {
      question: 'Do I need surgery for tonsillitis?',
      answer: 'Not all cases of tonsillitis require surgery. Tonsillectomy is typically recommended for recurrent infections (7+ episodes in one year, 5+ per year for two years, or 3+ per year for three years), obstructive sleep apnea caused by enlarged tonsils, difficulty swallowing, or when medical treatment is ineffective. Your Ophthalmology specialist will assess your specific situation.'
    },
    {
      question: 'What is endoscopic sinus surgery?',
      answer: 'Endoscopic sinus surgery is a minimally invasive procedure using a thin, lighted tube (endoscope) inserted through the nostrils to remove blockages, polyps, or diseased tissue from the sinuses. It requires no external incisions, has faster recovery than traditional surgery, and is typically done as an outpatient procedure. Most patients return to normal activities within a week.'
    },
    {
      question: 'How can I prevent ear infections?',
      answer: 'To reduce the risk of ear infections: keep ears dry, avoid inserting objects into ears, practice good hygiene, stay current with vaccinations, avoid secondhand smoke, manage allergies, and for children, avoid bottle-feeding while lying down. If you\'re prone to infections after swimming, use earplugs and dry ears thoroughly. Seek prompt treatment for upper respiratory infections.'
    }
  ];

  const emergencyWarnings = [
    {
      symptom: 'Sudden Hearing Loss',
      description: 'Rapid onset hearing loss in one or both ears'
    },
    {
      symptom: 'Severe Bleeding',
      description: 'Uncontrolled bleeding from nose or throat'
    },
    {
      symptom: 'Breathing Difficulty',
      description: 'Difficulty breathing or swallowing'
    },
    {
      symptom: 'Severe Pain',
      description: 'Intense ear, facial, or throat pain with fever'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] bg-opacity-85"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Eye className="h-6 w-6 text-blue-200" />
              <span className="text-blue-100 font-semibold">Eye Care & Vision Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Ophthalmology
              <span className="block">& Vision Care</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Expert eye care from routine vision exams to advanced surgical treatments
              for all eye conditions from experienced ophthalmologists.
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
                Ophthalmology Emergency Warning Signs
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
                If you experience these symptoms, call{' '}
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
              <span>Why Choose Our Ophthalmology Department</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Ear, Nose &
              <span className="text-[#328CCB]"> Throat Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our Ophthalmology department provides comprehensive care for all conditions affecting the ears, nose,
              throat, and related structures with advanced technology and experienced specialists.
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
              Advanced Ophthalmology
              <span className="text-[#328CCB]"> Treatment Approaches</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From medical management to advanced surgical procedures, we provide complete
              Ophthalmology care tailored to each patient's unique needs.
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
              Advanced Ophthalmology
              <span className="text-[#328CCB]"> Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From routine eye exams to complex surgical procedures, we provide
              complete vision care services with expertise and compassion.
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
                Ophthalmology Conditions
                <span className="text-[#328CCB]"> We Specialize In</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced Ophthalmology team treats a wide range of skin, hair, and nail
                conditions with personalized care plans for optimal outcomes.
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
              Ophthalmology Resources for
              <span className="text-[#328CCB]"> Patients & Families</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources to support your Ophthalmology care journey.
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
              <span className="text-[#328CCB]"> Ophthalmology Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about skin, hair, and nail conditions and treatments.
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
                Schedule Your Ophthalmology
                <span className="text-[#328CCB]"> Consultation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get expert care for your ear, nose, or throat condition. Fill out the form below
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
                    Symptoms or Concerns
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <Eye className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      rows={3}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Please describe your Ophthalmology symptoms or concerns..."
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
              Need Immediate Ophthalmology Support?
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

export default OphthalmologyPage;
