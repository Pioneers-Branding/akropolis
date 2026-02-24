import React, { useState } from 'react';
import { 
  Activity, 
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
  Star,
  TrendingUp,
  Building2,
  ArrowRight,
  Heart,
  Zap,
  Eye
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface BronchoscopyPageProps {
  onNavigate?: (page: string) => void;
}

const BronchoscopyPage: React.FC<BronchoscopyPageProps> = ({ onNavigate }) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bronchoscopy appointment form submitted:', formData);
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.href = page === 'home' ? '/' : `/${page}`;
    }
  };

  const procedureTypes = [
    {
      name: 'Flexible Bronchoscopy',
      description: 'Minimally invasive examination of airways using a flexible bronchoscope for diagnostic purposes',
      icon: Activity,
      duration: '20-30 minutes',
      image: 'https://brandingpioneers.co.in/akropolis/Flexible-Bronchoscopy.webp'
    },
    {
      name: 'Rigid Bronchoscopy',
      description: 'Therapeutic procedure using rigid bronchoscope for complex interventions and foreign body removal',
      icon: Heart,
      duration: '30-60 minutes',
      image: 'https://brandingpioneers.co.in/akropolis/Rigid-Bronchoscopy.webp'
    },
    {
      name: 'Endobronchial Ultrasound',
      description: 'Advanced imaging technique combining bronchoscopy with ultrasound for precise diagnosis',
      icon: Eye,
      duration: '45-90 minutes',
      image: 'https://brandingpioneers.co.in/akropolis/Endobronchial-Ultrasound.webp'
    },
    {
      name: 'Therapeutic Bronchoscopy',
      description: 'Treatment procedures including laser therapy, stent placement, and airway clearance',
      icon: Zap,
      duration: '30-120 minutes',
      image: 'https://brandingpioneers.co.in/akropolis/Therapeutic-Bronchoscopy.webp'
    }
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Bronchoscopy Suite',
      description: 'State-of-the-art bronchoscopy equipment with high-definition imaging and therapeutic capabilities'
    },
    {
      icon: Award,
      title: 'Expert Pulmonologists',
      description: 'Board-certified pulmonologists with extensive experience in bronchoscopic procedures'
    },
    {
      icon: Clock,
      title: 'Same-Day Procedures',
      description: 'Convenient scheduling with minimal waiting times and efficient patient care'
    },
    {
      icon: Shield,
      title: 'Patient Safety First',
      description: 'Comprehensive safety protocols and sedation monitoring for patient comfort'
    }
  ];

  const conditions = [
    'Chronic Cough Investigation',
    'Lung Cancer Diagnosis & Staging',
    'Pneumonia & Lung Infections',
    'Airway Obstruction',
    'Hemoptysis (Coughing Blood)',
    'Lung Nodules & Masses',
    'Interstitial Lung Disease',
    'Foreign Body Removal',
    'Airway Stenosis',
    'Pleural Effusion',
    'Lung Biopsy',
    'Bronchial Asthma',
    'COPD Assessment',
    'Tuberculosis Diagnosis',
    'Lung Transplant Evaluation'
  ];

  const preparationSteps = [
    {
      title: 'Pre-Procedure Preparation',
      icon: Clock,
      steps: [
        'Fast for 8-12 hours before the procedure',
        'Stop blood-thinning medications as advised',
        'Arrange for someone to drive you home',
        'Inform about all current medications'
      ]
    },
    {
      title: 'During the Procedure',
      icon: Activity,
      steps: [
        'Local anesthesia and mild sedation provided',
        'Bronchoscope inserted through nose or mouth',
        'Airways examined and samples collected if needed',
        'Vital signs continuously monitored'
      ]
    },
    {
      title: 'Post-Procedure Care',
      icon: Shield,
      steps: [
        'Recovery monitoring for 1-2 hours',
        'No eating/drinking until throat numbness subsides',
        'Results discussed with pulmonologist',
        'Follow-up appointment scheduled if needed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://brandingpioneers.co.in/akropolis/Bronchoscopy-Breadcrumes.webp)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Activity className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Respiratory Care</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Bronchoscopy
              <span className="block">Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Advanced bronchoscopic procedures for respiratory system diagnosis and treatment 
              with expert pulmonologists and state-of-the-art technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#appointment-form"
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Bronchoscopy</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergency}`}
                className="bg-white hover:bg-gray-50 text-[#328CCB] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
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
                  handleNavigation('home');
                }}
                className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
              >
                ← Back to Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity className="h-4 w-4" />
              <span>Why Choose Our Bronchoscopy Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Bronchoscopy
              <span className="text-[#328CCB]"> Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our bronchoscopy department provides comprehensive respiratory care with 
              cutting-edge technology and expert pulmonologists for accurate diagnosis and treatment.
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

      {/* Procedure Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Eye className="h-4 w-4" />
              <span>Our Procedures</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bronchoscopy Procedures
              <span className="text-[#328CCB]"> We Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of bronchoscopic procedures for diagnosis and treatment 
              of respiratory conditions with advanced technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {procedureTypes.map((procedure, index) => {
              const IconComponent = procedure.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 hover:bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 hover:border-[#328CCB]/20 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={procedure.image}
                      alt={procedure.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#328CCB]/10 p-3 rounded-xl">
                        <IconComponent className="h-6 w-6 text-[#328CCB]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {procedure.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-[#D66C43]">
                          <Clock className="h-4 w-4" />
                          <span>Duration: {procedure.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {procedure.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Procedure Guide</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What to Expect During
              <span className="text-[#328CCB]"> Your Visit</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive guide to help you prepare for your bronchoscopy procedure 
              and understand the process from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#D66C43]/10 p-4 rounded-xl w-fit mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-[#D66C43]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {step.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {step.steps.map((stepItem, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3 text-left">
                        <CheckCircle className="h-5 w-5 text-[#328CCB] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{stepItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                <span>Conditions We Treat</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Respiratory Conditions
                <span className="text-[#328CCB]"> We Diagnose & Treat</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our bronchoscopy services help diagnose and treat various respiratory 
                conditions with precision and minimal invasiveness.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Appointment Form */}
      <section id="appointment-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                <span>Book Procedure</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Schedule Your Bronchoscopy
                <span className="text-[#328CCB]"> Procedure</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Book your bronchoscopy procedure with our expert pulmonologists. 
                We ensure patient comfort and accurate diagnosis.
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
                    Respiratory Symptoms or Concerns
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <Activity className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      rows={3}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Please describe your respiratory symptoms or concerns..."
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
                      placeholder="Any additional information..."
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    <span>Book Bronchoscopy</span>
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Our pulmonology team will contact you within 24 hours to confirm your appointment. 
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

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Need Immediate Respiratory Care?
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
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-green-600 font-semibold hover:underline">
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

export default BronchoscopyPage;