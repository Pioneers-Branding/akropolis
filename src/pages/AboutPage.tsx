import React from 'react';
import {
  Award,
  Heart,
  Shield,
  Clock,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Activity,
  Brain,
  Baby,
  Droplets,
  Eye,
  Scissors,
  Bone,
  Pill,
  Sparkles,
  Ear,
  Camera,
  Dumbbell,
  Apple
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const departments = [
    {
      name: 'Orthopaedics & Joint Replacement',
      description: 'Trauma care, knee & hip replacements, spine surgery, sports injury management.',
      icon: Bone,
      color: 'bg-blue-50 text-blue-600',
      link: '/orthopedics'
    },
    {
      name: 'Cardiac Sciences (Cath Lab Equipped)',
      description: 'Angioplasty, pacemaker, stent placement, heart failure management, non-invasive and invasive cardiology.',
      icon: Heart,
      color: 'bg-red-50 text-red-600',
      link: '/cardiology'
    },
    {
      name: 'Neurology & Neurosurgery',
      description: 'Comprehensive brain and nervous system care with advanced neurological treatments.',
      icon: Brain,
      color: 'bg-purple-50 text-purple-600',
      link: '/neurology'
    },
    {
      name: 'Oncology (Cancer Care)',
      description: 'Comprehensive cancer care with advanced treatment options and multidisciplinary approach.',
      icon: Activity,
      color: 'bg-orange-50 text-orange-600',
      link: '/oncology'
    },
    {
      name: 'Critical Care & Emergency',
      description: '24x7 advanced ICU, MICU, and NICU (Neonatal Intensive Care Unit) for newborns.',
      icon: Activity,
      color: 'bg-orange-50 text-orange-600',
      link: '/emergency'
    },
    {
      name: 'Nephrology & Dialysis',
      description: 'State-of-the-art dialysis centre with round-the-clock renal support.',
      icon: Droplets,
      color: 'bg-cyan-50 text-cyan-600',
      link: '/nephrology'
    },
    {
      name: 'Gastroenterology & Endoscopy Unit',
      description: 'Endoscopy, colonoscopy, ERCP, and minimally invasive GI procedures.',
      icon: Pill,
      color: 'bg-green-50 text-green-600',
      link: '/gastroenterology'
    },
    {
      name: 'General & Laparoscopic Surgery',
      description: 'Hernia, gallbladder, appendix, complex gynae & ENT surgeries.',
      icon: Scissors,
      color: 'bg-purple-50 text-purple-600',
      link: '/departments'
    },
    {
      name: 'Obstetrics & Gynaecology',
      description: 'High-risk pregnancy, fertility management, laparoscopic gynaecological procedures.',
      icon: Heart,
      color: 'bg-pink-50 text-pink-600',
      link: '/obstetrics-gynecology'
    },
    {
      name: 'Paediatrics & Neonatology',
      description: 'Child care, immunization, newborn intensive care (NICU).',
      icon: Baby,
      color: 'bg-yellow-50 text-yellow-600',
      link: '/pediatrics'
    },
    {
      name: 'Plastic & Reconstructive Surgery',
      description: 'Cosmetic, trauma, burns, and reconstructive procedures.',
      icon: Scissors,
      color: 'bg-indigo-50 text-indigo-600',
      link: '/plastic-surgery'
    },
    {
      name: 'Dermatology & Cosmetology',
      description: 'Clinical dermatology, skincare, hair treatments, and aesthetic solutions.',
      icon: Sparkles,
      color: 'bg-teal-50 text-teal-600',
      link: '/dermatology'
    },
    {
      name: 'ENT (Ear, Nose & Throat)',
      description: 'Sinus surgery, tonsillectomy, ear microsurgeries.',
      icon: Ear,
      color: 'bg-amber-50 text-amber-600',
      link: '/ent'
    },
    {
      name: 'Ophthalmology (Eye Care)',
      description: 'Advanced diagnostic and surgical eye care.',
      icon: Eye,
      color: 'bg-emerald-50 text-emerald-600',
      link: '/ophthalmology'
    },
    {
      name: 'Diet & Nutrition Services',
      description: 'Clinical diet plans, lifestyle counselling, nutrition therapy.',
      icon: Apple,
      color: 'bg-lime-50 text-lime-600',
      link: '/health-nutrition'
    },
    {
      name: 'Radiology & Imaging',
      description: 'CT Scan, digital X-ray, ultrasound, advanced imaging diagnostics.',
      icon: Camera,
      color: 'bg-slate-50 text-slate-600',
      link: '/services/ct-scan'
    },
    {
      name: 'Physiotherapy & Rehabilitation',
      description: 'Recovery support for post-surgery, sports injuries, and chronic conditions.',
      icon: Dumbbell,
      color: 'bg-rose-50 text-rose-600',
      link: '/departments'
    }
  ];

  const treatmentApproach = [
    {
      title: 'Patient-Centric Care',
      description: 'Every treatment plan is designed keeping the patient\'s unique needs at the centre.',
      icon: Heart
    },
    {
      title: 'Technology-Driven',
      description: 'Equipped with a Cath Lab, CT Scan, Endoscopy suite, advanced ICUs, and digital imaging labs for accurate diagnosis and effective treatments.',
      icon: Building2
    },
    {
      title: 'Expert Team',
      description: 'A multidisciplinary panel of highly qualified doctors and surgeons, each specialised in their respective fields.',
      icon: Users
    },
    {
      title: 'Comprehensive Care',
      description: 'From emergency response to post-treatment rehabilitation, we provide end-to-end healthcare solutions under one roof.',
      icon: Clock
    },
    {
      title: 'Preventive Focus',
      description: 'Beyond treatment, Acropolis Hospital emphasises preventive care, wellness checks, and lifestyle counselling.',
      icon: Shield
    },
    {
      title: 'Quality & Accreditation',
      description: 'NABH accreditation ensures adherence to the highest standards of patient safety, hygiene, and clinical protocols.',
      icon: Award
    }
  ];

  const whyChooseUs = [
    '24x7 Emergency & Trauma Support',
    'NABH Accredited Multispeciality Care',
    'Dedicated ICU & NICU for critical patients',
    'Advanced Cath Lab & Minimally Invasive Surgeries',
    'Comprehensive Diagnostic & Imaging Support',
    'Patient-first, compassionate approach'
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">NABH Accredited Hospital</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              About Akropolis
              <span className="block">Super Speciality Hospital</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Located in Sector 69, Gurugram (near Vatika Chowk) - Your trusted partner in
              world-class healthcare with compassion, precision, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://brandingpioneers.co.in/akropolis/help-desk-img.webp"
                  alt="Acropolis Hospital Building"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#328CCB]/10 p-3 rounded-xl">
                    <Stethoscope className="h-8 w-8 text-[#328CCB]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Medical Specialities</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900 text-sm">NABH Certified</span>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" />
                <span>Our Story</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Patient-First
                <span className="text-[#328CCB]"> Healthcare Excellence</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Akropolis Super Speciality Hospital is a NABH-accredited, multi-speciality hospital
                committed to delivering world-class healthcare with compassion, precision, and trust.
                Designed as a patient-first institution, the hospital blends advanced technology,
                leading medical expertise, and personalised care.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From emergency response to complex surgeries, Akropolis Hospital offers 24x7 comprehensive medical services, guided by a team of highly experienced doctors,
                skilled nursing staff, and advanced diagnostic infrastructure. The hospital stands
                as a centre of excellence in multiple specialities, dedicated to improving quality
                of life and restoring health with integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit shadow-lg"
                >
                  <span>Our Services</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Medical Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Centres of Excellence &
              <span className="text-[#328CCB]"> Departments</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Akropolis Hospital is home to a wide range of departments, covering both primary
              healthcare and advanced speciality services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6"
                >
                  <div className={`${dept.color} p-3 rounded-xl w-fit mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {dept.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-3">
                    {dept.description}
                  </p>
                  <a href={dept.link} onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', dept.link);
                    window.location.reload();
                  }} className="text-[#328CCB] hover:underline"> Read More...</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Approach to
              <span className="text-[#328CCB]"> Treatment</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Every aspect of our care is designed to ensure the best possible outcomes for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentApproach.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-[#328CCB]/5 rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-[#328CCB]/20"
                >
                  <div className="bg-[#328CCB]/10 p-4 rounded-xl w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-[#328CCB]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {approach.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-[#D66C43]/10 text-[#D66C43] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="text-[#328CCB]"> Akropolis Hospital?</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#D66C43]/10 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#D66C43]" />
                    </div>
                    <p className="text-gray-700 font-medium">{reason}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/contact');
                    window.location.reload();
                  }}
                  className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit mx-auto shadow-lg"
                >
                  <span> Book an Appointment</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#328CCB]/10 p-6 rounded-2xl mb-4">
                <div className="text-4xl font-bold text-[#328CCB] mb-2">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#D66C43]/10 p-6 rounded-2xl mb-4">
                <div className="text-4xl font-bold text-[#D66C43] mb-2">5K+</div>
                <div className="text-gray-600">Successful Treatments</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#328CCB]/10 p-6 rounded-2xl mb-4">
                <div className="text-4xl font-bold text-[#328CCB] mb-2">50+</div>
                <div className="text-gray-600">Doctors</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#D66C43]/10 p-6 rounded-2xl mb-4">
                <div className="text-4xl font-bold text-[#D66C43] mb-2">90%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;