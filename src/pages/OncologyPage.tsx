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
  Microscope,
  Pill,
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
  Leaf
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const OncologyPage: React.FC = () => {
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
    console.log('Oncology consultation form submitted:', formData);
  };

  const services = [
    {
      name: 'Chemotherapy',
      description: 'Advanced chemotherapy protocols with supportive care management',
      icon: Pill
    },
    {
      name: 'Radiation Therapy',
      description: 'Precision radiation treatment with latest technology',
      icon: Activity
    },
    {
      name: 'Surgical Oncology',
      description: 'Expert surgical treatment for various types of cancer',
      icon: Shield
    },
    {
      name: 'Diagnostic Services',
      description: 'Comprehensive cancer screening and diagnostic testing',
      icon: Microscope
    },
    {
      name: 'Supportive Care',
      description: 'Pain management, nutrition counseling, and psychological support',
      icon: Heart
    },
    {
      name: 'Multidisciplinary Care',
      description: 'Collaborative treatment approach with specialist team',
      icon: Users
    }
  ];

  const conditions = [
    'Breast Cancer',
    'Lung Cancer',
    'Colorectal Cancer',
    'Prostate Cancer',
    'Blood Cancers (Leukemia, Lymphoma)',
    'Head and Neck Cancers',
    'Gynecological Cancers',
    'Gastrointestinal Cancers',
    'Bone and Soft Tissue Sarcomas',
    'Brain and CNS Tumors'
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Treatment Facilities',
      description: 'State-of-the-art oncology center with latest treatment technology'
    },
    {
      icon: Award,
      title: 'Expert Oncologists',
      description: 'Board-certified specialists with extensive cancer treatment experience'
    },
    {
      icon: Clock,
      title: 'Comprehensive Care',
      description: 'Complete cancer care from diagnosis through treatment and follow-up'
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
      description: 'Each patient receives a customized treatment strategy based on cancer type, stage, genetic profile, and overall health status.',
      features: ['Genomic Testing', 'Molecular Profiling', 'Individualized Protocols']
    },
    {
      icon: Users,
      title: 'Multidisciplinary Tumor Board',
      description: 'Our team of medical oncologists, surgical oncologists, radiation oncologists, and specialists collaborate for optimal outcomes.',
      features: ['Weekly Case Reviews', 'Combined Expertise', 'Holistic Approach']
    },
    {
      icon: Zap,
      title: 'Advanced Therapies',
      description: 'Access to cutting-edge treatments including immunotherapy, targeted therapy, and precision medicine protocols.',
      features: ['Immunotherapy', 'Targeted Therapy', 'Clinical Trials']
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Care Services',
      description: 'Comprehensive support including pain management, nutrition counseling, psychological support, and palliative care.',
      features: ['Pain Management', 'Nutrition Support', 'Mental Health']
    }
  ];

  const statistics = [
    { number: '10,000+', label: 'Cancer Patients Treated Annually' },
    { number: '85%', label: 'Patient Satisfaction Rate' },
    { number: '20+', label: 'Years of Oncology Excellence' },
    { number: '24/7', label: 'Emergency Cancer Care Available' }
  ];

  const patientResources = [
    {
      icon: FileText,
      title: 'Patient Education Materials',
      description: 'Comprehensive guides about different cancer types, treatments, and what to expect during your care journey.'
    },
    {
      icon: Users,
      title: 'Support Groups',
      description: 'Connect with other patients and survivors through our facilitated support groups and peer mentorship programs.'
    },
    {
      icon: BookOpen,
      title: 'Treatment Guides',
      description: 'Detailed information about chemotherapy, radiation, surgery, and other treatment options available.'
    },
    {
      icon: Heart,
      title: 'Caregiver Support',
      description: 'Resources and guidance for family members and caregivers supporting loved ones through cancer treatment.'
    },
    {
      icon: Leaf,
      title: 'Wellness Programs',
      description: 'Yoga, meditation, nutrition workshops, and other integrative therapies to support overall wellbeing.'
    },
    {
      icon: UserCheck,
      title: 'Financial Counseling',
      description: 'Assistance with insurance, treatment costs, and financial planning during your cancer care journey.'
    }
  ];

  const faqs = [
    {
      question: 'What should I bring to my first oncology appointment?',
      answer: 'Please bring all previous medical records, imaging reports, biopsy results, list of current medications, insurance information, and a family member or friend for support. Also prepare a list of questions you want to ask the oncologist.'
    },
    {
      question: 'How long does cancer treatment typically take?',
      answer: 'Treatment duration varies significantly based on cancer type, stage, and treatment plan. It can range from a few weeks for early-stage cancers to several months or longer for advanced cases. Your oncologist will provide a personalized timeline.'
    },
    {
      question: 'What are the side effects of chemotherapy?',
      answer: 'Common side effects include fatigue, nausea, hair loss, and lowered blood counts. However, modern supportive care medications can effectively manage most side effects. Your care team will closely monitor you and adjust treatment as needed.'
    },
    {
      question: 'Do you offer second opinion consultations?',
      answer: 'Yes, we encourage second opinions and welcome patients seeking additional perspectives on their diagnosis and treatment options. Our team will review your case thoroughly and provide comprehensive recommendations.'
    },
    {
      question: 'Are clinical trials available?',
      answer: 'Yes, we participate in numerous clinical trials offering access to innovative treatments. Your oncologist will discuss whether any current trials are appropriate for your specific cancer type and situation.'
    },
    {
      question: 'How can family members support during treatment?',
      answer: 'Family support is crucial. We offer family counseling, educational sessions, and caregiver resources. Family members can attend appointments, help track symptoms, provide emotional support, and assist with daily activities during treatment.'
    }
  ];

  const cancerStages = [
    {
      stage: 'Stage 0',
      name: 'Carcinoma in Situ',
      description: 'Abnormal cells present but have not spread to nearby tissue. Often highly treatable.'
    },
    {
      stage: 'Stage I',
      name: 'Early Cancer',
      description: 'Cancer is small and has not spread to lymph nodes. Generally has excellent prognosis.'
    },
    {
      stage: 'Stage II',
      name: 'Localized Cancer',
      description: 'Cancer is larger but still localized. May require combination therapy.'
    },
    {
      stage: 'Stage III',
      name: 'Regional Spread',
      description: 'Cancer has spread to nearby lymph nodes or tissues. Requires aggressive treatment.'
    },
    {
      stage: 'Stage IV',
      name: 'Metastatic Cancer',
      description: 'Cancer has spread to distant organs. Focus on controlling disease and maintaining quality of life.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Oncology Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Cancer
              <span className="block">Treatment & Care</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cancer care with cutting-edge treatment options, multidisciplinary expertise,
              and compassionate support throughout your journey to recovery.
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

      {/* Statistics Section */}
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Why Choose Our Oncology Department</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Cancer
              <span className="text-[#328CCB]"> Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our oncology department offers integrated cancer care with a multidisciplinary approach,
              combining medical expertise with emotional support for the best possible outcomes.
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

      {/* Treatment Approaches Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Our Treatment Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Treatment
              <span className="text-[#328CCB]"> Approaches</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our multidisciplinary approach combines the latest medical advances with compassionate,
              personalized care tailored to each patient's unique needs.
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

      {/* Cancer Stages Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Understanding Cancer Stages</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cancer Staging
              <span className="text-[#328CCB]"> Guide</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Understanding cancer stages helps guide treatment decisions and provides insight into prognosis.
              Our team will thoroughly explain your specific diagnosis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {cancerStages.map((stage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="mb-4 md:mb-0">
                    <div className="bg-[#328CCB] text-white px-4 py-2 rounded-lg font-bold text-center min-w-[100px]">
                      {stage.stage}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {stage.name}
                    </h3>
                    <p className="text-gray-600">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Oncology
              <span className="text-[#328CCB]"> Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From early detection to advanced treatment and supportive care, we provide
              complete oncology services tailored to each patient's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-[#328CCB]/30 hover:shadow-lg"
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Activity className="h-4 w-4" />
                <span>Conditions We Treat</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cancer Types
                <span className="text-[#328CCB]"> We Specialize In</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced oncology team treats a wide range of cancers
                with personalized treatment plans designed for optimal outcomes.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
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

      {/* Patient Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Patient Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Support & Resources for
              <span className="text-[#328CCB]"> Patients & Families</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive resources to support you and your loved ones throughout
              your cancer care journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {patientResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Common Questions About
              <span className="text-[#328CCB]"> Cancer Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about oncology services, treatments, and what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
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
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
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

      <section id="consultation-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                <span>Book Consultation</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Schedule Your Oncology
                <span className="text-[#328CCB]"> Consultation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Begin your journey with our expert oncology team. Fill out the form below
                and we will contact you to schedule your appointment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
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
                    Current Symptoms or Concerns
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <Shield className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      rows={3}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Please describe any symptoms or concerns you have..."
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Need Immediate Oncology Support?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Phone className="h-8 w-8 text-[#328CCB] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Emergency</h4>
                <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#328CCB] font-semibold hover:underline text-lg">
                  {CONTACT_INFO.emergency}
                </a>
                <p className="text-sm text-gray-500 mt-1">24/7 Available</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Phone className="h-8 w-8 text-[#328CCB] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Appointments</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold hover:underline text-lg">
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">Mon-Sat: 8 AM - 8 PM</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
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

export default OncologyPage;
