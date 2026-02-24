import React, { useState } from 'react';
import {
  Brain,
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
  Shield,
  Zap,
  Microscope,
  Building2,
  AlertCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Info,
  Target,
  FileText,
  Heart,
  Leaf,
  UserCheck,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const NeurologyPage: React.FC = () => {
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
    console.log('Neurology consultation form submitted:', formData);
  };

  const services = [
    {
      name: 'Stroke Care & Management',
      description: 'Rapid diagnosis and treatment of acute stroke with 24/7 stroke team availability',
      icon: Brain
    },
    {
      name: 'Epilepsy Treatment',
      description: 'Comprehensive epilepsy management including EEG monitoring and medication optimization',
      icon: Activity
    },
    {
      name: 'Headache & Migraine Clinic',
      description: 'Specialized treatment for chronic headaches, migraines, and related disorders',
      icon: AlertCircle
    },
    {
      name: 'Movement Disorders',
      description: 'Expert care for Parkinson\'s disease, tremors, and other movement disorders',
      icon: Zap
    },
    {
      name: 'Neuromuscular Disorders',
      description: 'Diagnosis and treatment of conditions affecting nerves and muscles',
      icon: Stethoscope
    },
    {
      name: 'Memory & Cognition Clinic',
      description: 'Evaluation and management of dementia, Alzheimer\'s, and cognitive disorders',
      icon: Microscope
    }
  ];

  const conditions = [
    'Stroke and TIA (Mini-Stroke)',
    'Epilepsy and Seizure Disorders',
    'Parkinson\'s Disease',
    'Alzheimer\'s Disease and Dementia',
    'Multiple Sclerosis (MS)',
    'Migraines and Headaches',
    'Peripheral Neuropathy',
    'Brain Tumors',
    'Spinal Cord Disorders',
    'Sleep Disorders'
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Neuro-ICU',
      description: 'State-of-the-art neurological intensive care unit with specialized monitoring'
    },
    {
      icon: Award,
      title: 'Expert Neurologists',
      description: 'Board-certified specialists with fellowship training in neurological care'
    },
    {
      icon: Clock,
      title: '24/7 Stroke Care',
      description: 'Round-the-clock stroke response team for immediate emergency treatment'
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
      title: 'Acute Stroke Management',
      description: 'Immediate intervention with thrombolysis and thrombectomy for acute ischemic stroke, minimizing brain damage and improving outcomes.',
      features: ['Door-to-Needle Protocol', 'Advanced Imaging', 'Clot Retrieval Therapy']
    },
    {
      icon: Brain,
      title: 'Neurological Diagnostics',
      description: 'Comprehensive diagnostic capabilities including MRI, CT, EEG, EMG, and advanced neurophysiology testing.',
      features: ['High-field MRI', 'Video EEG Monitoring', 'Nerve Conduction Studies']
    },
    {
      icon: Zap,
      title: 'Interventional Neurology',
      description: 'Minimally invasive procedures for treating brain aneurysms, AVMs, and neurovascular conditions.',
      features: ['Aneurysm Coiling', 'Carotid Stenting', 'Neuro-interventions']
    },
    {
      icon: HeartHandshake,
      title: 'Neuro-Rehabilitation',
      description: 'Comprehensive rehabilitation programs for stroke recovery, brain injury, and neurological conditions.',
      features: ['Physical Therapy', 'Speech Therapy', 'Occupational Therapy']
    }
  ];

  const statistics = [
    { number: '8,000+', label: 'Neurological Patients Annually' },
    { number: '90%', label: 'Stroke Recovery Success Rate' },
    { number: '20+', label: 'Years of Neuro Excellence' },
    { number: '<60min', label: 'Average Door-to-Needle Time' }
  ];

  const patientResources = [
    {
      icon: FileText,
      title: 'Neurological Education',
      description: 'Comprehensive guides about brain and nervous system disorders, symptoms, and treatment options.'
    },
    {
      icon: Brain,
      title: 'Stroke Prevention Programs',
      description: 'Risk assessment and prevention strategies to reduce stroke risk through lifestyle and medication.'
    },
    {
      icon: BookOpen,
      title: 'Seizure Management Plans',
      description: 'Detailed seizure action plans, medication schedules, and emergency response protocols.'
    },
    {
      icon: Heart,
      title: 'Support Groups',
      description: 'Peer support for patients with neurological conditions and their families.'
    },
    {
      icon: Leaf,
      title: 'Brain Health Programs',
      description: 'Cognitive training, memory exercises, and brain health optimization strategies.'
    },
    {
      icon: UserCheck,
      title: 'Caregiver Training',
      description: 'Education and support for caregivers of patients with neurological conditions.'
    }
  ];

  const faqs = [
    {
      question: 'What are the warning signs of a stroke?',
      answer: 'Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Other signs include sudden numbness, confusion, trouble seeing, difficulty walking, or severe headache. Call emergency services immediately if you notice these symptoms.'
    },
    {
      question: 'How is epilepsy diagnosed and treated?',
      answer: 'Epilepsy is diagnosed through EEG (brain wave testing), MRI scans, and detailed seizure history. Treatment typically involves anti-seizure medications, with surgery or devices considered for drug-resistant epilepsy. Most patients achieve good seizure control with proper treatment.'
    },
    {
      question: 'What causes migraines and how are they treated?',
      answer: 'Migraines involve complex brain changes and can be triggered by stress, foods, hormones, or environmental factors. Treatment includes preventive medications, acute treatments during attacks, lifestyle modifications, and avoiding known triggers. Many patients find significant relief with proper management.'
    },
    {
      question: 'Can memory loss be reversed?',
      answer: 'It depends on the cause. Some memory problems from medications, depression, or vitamin deficiencies can be reversed. Degenerative conditions like Alzheimer\'s cannot be reversed but progression can be slowed with medications and cognitive interventions. Early evaluation is important.'
    },
    {
      question: 'What is the recovery time after a stroke?',
      answer: 'Recovery varies greatly depending on stroke severity and location. Most recovery occurs in the first 3-6 months, but improvement can continue for years. Intensive rehabilitation, medications, and lifestyle changes significantly improve outcomes. Early treatment is crucial.'
    },
    {
      question: 'When should I see a neurologist for headaches?',
      answer: 'See a neurologist if you have frequent or severe headaches, sudden onset of worst headache ever, headaches with neurological symptoms (vision changes, weakness, confusion), or headaches not responding to standard treatments. Early evaluation helps identify serious conditions.'
    }
  ];

  const neurologicalWarnings = [
    {
      symptom: 'Sudden Severe Headache',
      description: 'Worst headache of your life, especially with stiff neck or confusion'
    },
    {
      symptom: 'Face/Arm/Leg Weakness',
      description: 'Sudden weakness or numbness, especially on one side of the body'
    },
    {
      symptom: 'Speech Difficulty',
      description: 'Sudden trouble speaking, understanding speech, or slurred words'
    },
    {
      symptom: 'Vision Problems',
      description: 'Sudden loss of vision in one or both eyes, or double vision'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Brain className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Neurology Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Brain &
              <span className="block">Nervous System Care</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Comprehensive neurological care with cutting-edge diagnostics, expert neurologists,
              and compassionate support for all brain and nervous system conditions.
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

      {/* Emergency Warning Section */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-red-900">
                Recognize Neurological Emergency Signs
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {neurologicalWarnings.map((item, index) => (
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
                immediately. Quick treatment saves brain tissue!
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
              <span>Why Choose Our Neurology Department</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Neurological
              <span className="text-[#328CCB]"> Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our neurology department offers integrated care with advanced diagnostics,
              expert physicians, and cutting-edge treatments for optimal brain health.
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
              Advanced Neurological
              <span className="text-[#328CCB]"> Treatment Approaches</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From emergency stroke care to chronic disease management, we provide complete
              neurological care tailored to each patient's unique needs.
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
              Comprehensive Neurology
              <span className="text-[#328CCB]"> Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From diagnostic testing to advanced treatments, we provide
              complete neurological care under one roof.
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
                Neurological Conditions
                <span className="text-[#328CCB]"> We Specialize In</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced neurology team treats a wide range of brain and nervous system conditions
                with personalized treatment plans designed for optimal outcomes.
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

      {/* Patient Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Patient Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Brain Health Resources for
              <span className="text-[#328CCB]"> Patients & Families</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources to support your neurological health journey and recovery.
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Common Questions About
              <span className="text-[#328CCB]"> Neurological Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about neurology services and brain health.
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
                Schedule Your Neurology
                <span className="text-[#328CCB]"> Consultation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Begin your journey to better brain health. Fill out the form below
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
                    Current Symptoms or Concerns
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <Brain className="h-5 w-5 text-gray-400" />
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Need Immediate Neurological Support?
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

export default NeurologyPage;
