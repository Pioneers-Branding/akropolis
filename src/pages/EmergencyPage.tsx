import React, { useState } from 'react';
import {
  Ambulance,
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
  Users,
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
  HeartHandshake,
  Timer
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const EmergencyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    emergency: '',
    location: '',
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
    console.log('Emergency contact form submitted:', formData);
  };

  const services = [
    {
      name: '24/7 Emergency Care',
      description: 'Round-the-clock emergency medical services with immediate triage and treatment',
      icon: Ambulance
    },
    {
      name: 'Trauma Care',
      description: 'Advanced trauma management for accidents, injuries, and life-threatening conditions',
      icon: Activity
    },
    {
      name: 'Cardiac Emergency',
      description: 'Immediate care for heart attacks, chest pain, and cardiac emergencies',
      icon: Heart
    },
    {
      name: 'Stroke Response',
      description: 'Rapid stroke assessment and treatment with door-to-needle protocol',
      icon: Zap
    },
    {
      name: 'Critical Care ICU',
      description: 'Advanced intensive care for critically ill patients with 24/7 monitoring',
      icon: Building2
    },
    {
      name: 'Ambulance Services',
      description: 'Fully-equipped ambulances with trained paramedics for emergency transport',
      icon: Users
    }
  ];

  const conditions = [
    'Heart Attack and Chest Pain',
    'Stroke and Paralysis',
    'Severe Injuries and Trauma',
    'Breathing Difficulties',
    'Severe Bleeding',
    'Poisoning and Overdose',
    'Severe Burns',
    'Fractures and Dislocations',
    'Allergic Reactions',
    'Loss of Consciousness'
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Emergency Department',
      description: 'State-of-the-art emergency facilities with latest life-saving equipment'
    },
    {
      icon: Award,
      title: 'Expert Emergency Physicians',
      description: 'Board-certified specialists trained in emergency and trauma medicine'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Always open with full staff ready to handle any medical emergency'
    },
    {
      icon: Shield,
      title: 'NABH Accredited',
      description: 'Quality emergency care standards certified for patient safety'
    }
  ];

  const treatmentApproaches = [
    {
      icon: Target,
      title: 'Rapid Triage System',
      description: 'Immediate assessment and prioritization of patients based on severity, ensuring critical cases receive instant attention.',
      features: ['Color-Coded Priority', 'Immediate Assessment', 'Fast-Track System']
    },
    {
      icon: Ambulance,
      title: 'Golden Hour Protocol',
      description: 'Time-sensitive emergency care focusing on the critical first hour to maximize survival and recovery chances.',
      features: ['Quick Response Time', 'Stabilization', 'Rapid Transport']
    },
    {
      icon: Heart,
      title: 'Life Support Systems',
      description: 'Advanced life support equipment and protocols for cardiac arrest, respiratory failure, and critical conditions.',
      features: ['ACLS Protocol', 'Ventilator Support', 'Defibrillation']
    },
    {
      icon: HeartHandshake,
      title: 'Multi-Disciplinary Team',
      description: 'Coordinated care with specialists from surgery, cardiology, neurology, and other departments available on-call.',
      features: ['Specialist Access', 'Team Coordination', 'Seamless Care']
    }
  ];

  const statistics = [
    { number: '20,000+', label: 'Emergency Cases Annually' },
    { number: '<10min', label: 'Average Response Time' },
    { number: '100%', label: 'Availability - Always Open' },
    { number: '95%', label: 'Patient Survival Rate' }
  ];

  const patientResources = [
    {
      icon: FileText,
      title: 'When to Visit ER',
      description: 'Guidelines for recognizing true emergencies and when to seek immediate care.'
    },
    {
      icon: Ambulance,
      title: 'How to Call Emergency',
      description: 'Step-by-step guide for calling emergency services and what information to provide.'
    },
    {
      icon: BookOpen,
      title: 'First Aid Basics',
      description: 'Essential first aid techniques for common emergencies before help arrives.'
    },
    {
      icon: Heart,
      title: 'CPR Instructions',
      description: 'Life-saving CPR steps for cardiac arrest situations with illustrated guides.'
    },
    {
      icon: Leaf,
      title: 'Emergency Preparedness',
      description: 'How to prepare for medical emergencies at home with essential supplies.'
    },
    {
      icon: UserCheck,
      title: 'Post-Emergency Care',
      description: 'Follow-up care instructions and when to schedule appointments after ER visit.'
    }
  ];

  const faqs = [
    {
      question: 'When should I go to the emergency room?',
      answer: 'Go to the ER for life-threatening conditions: chest pain/heart attack symptoms, stroke signs (FAST), severe bleeding, difficulty breathing, severe injuries, poisoning, loss of consciousness, severe burns, or sudden severe pain. For minor issues, consider urgent care or your primary doctor.'
    },
    {
      question: 'What should I bring to the emergency room?',
      answer: 'Bring identification, insurance cards, list of current medications, medical history summary, allergy information, and contact details for your primary doctor. If possible, have a family member or friend accompany you to help communicate and remember information.'
    },
    {
      question: 'How long will I wait in the emergency room?',
      answer: 'Wait times vary based on severity. Critical cases are seen immediately (triage priority). Less urgent cases may wait longer. Our triage system ensures the sickest patients receive care first. Average wait times are updated regularly and displayed in our waiting area.'
    },
    {
      question: 'What happens during emergency room triage?',
      answer: 'Triage nurses quickly assess your condition, vital signs, and symptoms to determine urgency. You\'re assigned a priority level: red (immediate), yellow (urgent), green (semi-urgent), or blue (non-urgent). This ensures critical patients receive care first while everyone gets appropriate treatment.'
    },
    {
      question: 'Can family members stay with me in the ER?',
      answer: 'Generally, one adult family member can accompany you during treatment, though this may vary based on the situation and available space. During procedures or when multiple staff are working, visitors may be asked to wait outside temporarily. Children may have different visitor policies.'
    },
    {
      question: 'What if I can\'t afford emergency care?',
      answer: 'Emergency medical treatment is provided regardless of ability to pay. After stabilization, our financial counselors can discuss payment options, insurance coverage, government programs, and payment plans. Never delay emergency care due to cost concerns - get treated first.'
    }
  ];

  const emergencyWarnings = [
    {
      symptom: 'Chest Pain',
      description: 'Severe chest pain, pressure, or tightness especially with arm/jaw pain'
    },
    {
      symptom: 'Stroke Signs (FAST)',
      description: 'Face drooping, Arm weakness, Speech difficulty - Time to call emergency'
    },
    {
      symptom: 'Severe Bleeding',
      description: 'Uncontrolled bleeding that won\'t stop with direct pressure'
    },
    {
      symptom: 'Difficulty Breathing',
      description: 'Severe shortness of breath, choking, or unable to speak full sentences'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#D66C43] to-[#c55a36] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-[#D66C43] bg-opacity-80"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Ambulance className="h-6 w-6 text-yellow-300" />
              <span className="text-yellow-300 font-semibold">24/7 Emergency Services</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Immediate Emergency Care
              <span className="block">When Every Second Counts</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-red-50 max-w-3xl mx-auto leading-relaxed">
              Round-the-clock emergency medical services with expert physicians, advanced equipment,
              and rapid response for all medical emergencies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${CONTACT_INFO.emergency}`}
                className="bg-white hover:bg-gray-50 text-[#D66C43] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: {CONTACT_INFO.emergency}</span>
              </a>
              <a
                href="#emergency-info"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Emergency Guidelines</span>
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
                className="text-white hover:text-red-100 font-medium transition-colors duration-200"
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
                <div className="text-4xl lg:text-5xl font-bold text-[#D66C43] mb-2">
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

      <section id="emergency-info" className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-red-900">
                Call {CONTACT_INFO.emergency} Immediately For These Symptoms
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
              <p className="text-red-900 font-semibold text-lg">
                For any life-threatening emergency, call{' '}
                <a href={`tel:${CONTACT_INFO.emergency}`} className="underline text-xl">
                  {CONTACT_INFO.emergency}
                </a>{' '}
                or come directly to our Emergency Department!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Why Choose Our Emergency Department</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Emergency
              <span className="text-[#D66C43]"> Medical Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our emergency department offers immediate care with expert physicians,
              advanced technology, and rapid response for all medical emergencies.
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
                  <div className="bg-[#D66C43]/10 p-4 rounded-xl w-fit mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-[#D66C43]" />
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
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Our Emergency Care Approach</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Rapid Response & Expert
              <span className="text-[#D66C43]"> Emergency Treatment</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From triage to treatment, we provide immediate emergency care
              with protocols designed to save lives and optimize outcomes.
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
                    <div className="bg-[#D66C43]/10 p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-[#D66C43]" />
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
                        <CheckCircle className="h-4 w-4 text-[#D66C43] flex-shrink-0" />
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
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4" />
              <span>Emergency Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Emergency
              <span className="text-[#D66C43]"> Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From trauma care to cardiac emergencies, we provide
              complete emergency medical services 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white hover:bg-gray-50 rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-[#D66C43]/30 hover:shadow-lg"
                >
                  <div className="bg-[#D66C43]/10 p-3 rounded-xl w-fit mb-6">
                    <IconComponent className="h-6 w-6 text-[#D66C43]" />
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
              <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Activity className="h-4 w-4" />
                <span>Emergency Conditions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Life-Threatening Conditions
                <span className="text-[#D66C43]"> We Handle</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our emergency team is trained to handle all types of medical emergencies
                with rapid assessment and immediate treatment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#D66C43] flex-shrink-0" />
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
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Emergency Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Essential Emergency
              <span className="text-[#D66C43]"> Information</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Important resources to help you understand emergency care and be prepared.
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
                  <div className="bg-[#D66C43]/10 p-3 rounded-xl w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-[#D66C43]" />
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
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Common Questions About
              <span className="text-[#D66C43]"> Emergency Care</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about emergency department services.
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
                    <ChevronUp className="h-5 w-5 text-[#D66C43] flex-shrink-0" />
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

      <section className="py-20 bg-[#D66C43] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Ambulance className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Emergency? Don't Wait - Call Now!
            </h2>
            <p className="text-xl text-red-50 mb-8">
              For life-threatening emergencies, every second counts. Our emergency team is ready 24/7.
            </p>
            <a
              href={`tel:${CONTACT_INFO.emergency}`}
              className="inline-flex items-center space-x-3 bg-white hover:bg-gray-100 text-[#D66C43] px-10 py-5 rounded-xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Phone className="h-8 w-8" />
              <span>{CONTACT_INFO.emergency}</span>
            </a>
            <p className="mt-6 text-red-100">
              Or visit our Emergency Department directly - we're always open!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Need Non-Emergency Support?
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

export default EmergencyPage;
