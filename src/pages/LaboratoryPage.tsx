import React, { useState } from 'react';
import { 
  TestTube, 
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
  Activity,
  Heart,
  Droplets,
  Microscope
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface LaboratoryPageProps {
  onNavigate?: (page: string) => void;
}

const LaboratoryPage: React.FC<LaboratoryPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    testType: '',
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
    console.log('Laboratory test form submitted:', formData);
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.href = page === 'home' ? '/' : `/${page}`;
    }
  };

  const testCategories = [
    {
      name: 'Blood Tests',
      description: 'Complete blood count, blood chemistry, lipid profiles, and specialized blood tests for comprehensive health assessment',
      icon: Droplets,
      tests: ['CBC', 'Lipid Profile', 'Liver Function', 'Kidney Function'],
      image: 'https://brandingpioneers.co.in/akropolis/BloodTests.webp'
    },
    {
      name: 'Cardiac Markers',
      description: 'Heart-specific tests including troponins, CK-MB, and other cardiac enzymes for heart disease diagnosis',
      icon: Heart,
      tests: ['Troponin I/T', 'CK-MB', 'BNP', 'D-Dimer'],
      image: 'https://brandingpioneers.co.in/akropolis/Cardiac-Markers.webp'
    },
    {
      name: 'Hormone Tests',
      description: 'Thyroid function, diabetes markers, and reproductive hormone testing for endocrine disorders',
      icon: Activity,
      tests: ['TSH', 'HbA1c', 'Insulin', 'Testosterone'],
      image: 'https://brandingpioneers.co.in/akropolis/Hormone-Tests.webp'
    },
    {
      name: 'Microbiology',
      description: 'Culture tests, sensitivity testing, and infectious disease diagnostics for bacterial and viral infections',
      icon: Microscope,
      tests: ['Blood Culture', 'Urine Culture', 'Stool Culture', 'Sensitivity'],
      image: 'https://brandingpioneers.co.in/akropolis/Microbiology.webp'
    }
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Laboratory',
      description: 'State-of-the-art automated analyzers and diagnostic equipment with latest technology'
    },
    {
      icon: Award,
      title: 'NABL Accredited',
      description: 'Quality assured testing with national accreditation standards and certified processes'
    },
    {
      icon: Clock,
      title: 'Quick Results',
      description: 'Fast turnaround times with emergency test capabilities and same-day reporting'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Rigorous quality control measures and external quality assurance ensuring accurate results'
    }
  ];

  const commonTests = [
    'Complete Blood Count (CBC)',
    'Comprehensive Metabolic Panel',
    'Lipid Profile',
    'Thyroid Function Tests',
    'Liver Function Tests',
    'Kidney Function Tests',
    'HbA1c (Diabetes)',
    'Vitamin D',
    'Vitamin B12',
    'Iron Studies',
    'Cardiac Markers',
    'Tumor Markers',
    'Hormone Tests',
    'Infectious Disease Tests',
    'Autoimmune Markers',
    'Coagulation Studies',
    'Allergy Testing',
    'Drug Level Monitoring',
    'Genetic Testing',
    'Pregnancy Tests',
    'STD Screening'
  ];

  const preparationSteps = [
    {
      title: 'Before Your Test',
      steps: [
        'Follow fasting instructions if required',
        'Bring valid ID and prescription',
        'Inform about current medications',
        'Wear comfortable, loose-fitting clothes'
      ]
    },
    {
      title: 'During Sample Collection',
      steps: [
        'Experienced phlebotomists ensure comfort',
        'Sterile equipment and safety protocols',
        'Quick and painless sample collection',
        'Proper labeling and handling procedures'
      ]
    },
    {
      title: 'After Your Test',
      steps: [
        'Results available online and via SMS',
        'Doctor consultation for interpretation',
        'Follow-up recommendations if needed',
        'Digital and physical report options'
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
            backgroundImage: 'url(https://brandingpioneers.co.in/akropolis/Laboratory.webp)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <TestTube className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Diagnostic Excellence</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Laboratory
              <span className="block">Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive diagnostic testing with advanced laboratory technology 
              and expert pathologists for accurate and timely results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#booking-form"
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Lab Test</span>
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
              <TestTube className="h-4 w-4" />
              <span>Why Choose Our Laboratory</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Laboratory
              <span className="text-[#328CCB]"> Technology</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our laboratory combines cutting-edge technology with expert pathologists 
              to deliver accurate, reliable, and timely diagnostic results.
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

      {/* Test Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity className="h-4 w-4" />
              <span>Our Test Categories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Laboratory
              <span className="text-[#328CCB]"> Testing</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Wide range of diagnostic tests covering all medical specialties 
              with advanced technology and expert interpretation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 hover:bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 hover:border-[#328CCB]/20 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
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
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.tests.map((test, testIndex) => (
                        <span 
                          key={testIndex}
                          className="bg-[#328CCB]/10 text-[#328CCB] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
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
              <span>Test Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Laboratory Testing
              <span className="text-[#328CCB]"> Experience</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Simple and convenient laboratory testing process designed 
              for your comfort and accurate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparationSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#D66C43]/10 p-4 rounded-xl w-fit mx-auto mb-6">
                  <Clock className="h-8 w-8 text-[#D66C43]" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Common Tests */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TestTube className="h-4 w-4" />
                <span>Available Tests</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Common Laboratory
                <span className="text-[#328CCB]"> Tests</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive range of diagnostic tests available with quick 
                turnaround times and accurate results.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commonTests.map((test, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#328CCB] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                <span>Book Test</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Book Your Laboratory
                <span className="text-[#328CCB]"> Test</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Schedule your laboratory tests with our expert team. 
                We ensure accurate results and timely delivery.
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
                    <label htmlFor="testType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Test Type *
                    </label>
                    <select
                      id="testType"
                      name="testType"
                      value={formData.testType}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200"
                    >
                      <option value="">Select test type</option>
                      <option value="blood-tests">Blood Tests</option>
                      <option value="cardiac-markers">Cardiac Markers</option>
                      <option value="hormone-tests">Hormone Tests</option>
                      <option value="microbiology">Microbiology</option>
                      <option value="other">Other</option>
                    </select>
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
                      <option value="morning">Morning (7:00 AM - 11:00 AM)</option>
                      <option value="afternoon">Afternoon (11:00 AM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Specific Tests Required or Additional Information
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
                      rows={4}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 resize-none"
                      placeholder="Please specify the tests you need or any additional information..."
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    <span>Book Lab Test</span>
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Our laboratory team will contact you within 24 hours to confirm your appointment. 
                    For urgent tests, please call{' '}
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
              Need Urgent Laboratory Tests?
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
                <h4 className="font-bold text-gray-900 mb-2">Laboratory</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold hover:underline text-lg">
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">Mon-Sun: 6 AM - 10 PM</p>
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

export default LaboratoryPage;