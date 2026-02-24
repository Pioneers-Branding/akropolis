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
  Baby,
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
  AlertCircle
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const ObstetricsGynecologyPage: React.FC = () => {
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
    console.log('OB/GYN consultation form submitted:', formData);
  };

  const services = [
    {
      name: 'Prenatal Care',
      description: 'Comprehensive pregnancy care from conception to delivery',
      icon: Baby
    },
    {
      name: 'High-Risk Pregnancy',
      description: 'Specialized care for complicated pregnancies with expert monitoring',
      icon: Shield
    },
    {
      name: 'Normal & C-Section Delivery',
      description: 'Safe delivery options with experienced obstetricians',
      icon: Heart
    },
    {
      name: 'Gynecological Surgery',
      description: 'Minimally invasive and traditional surgical procedures',
      icon: Activity
    },
    {
      name: 'Infertility Treatment',
      description: 'Advanced fertility evaluation and treatment options',
      icon: Sparkles
    },
    {
      name: 'Menopause Management',
      description: 'Hormone therapy and comprehensive menopause care',
      icon: Stethoscope
    }
  ];

  const conditions = [
    'Pregnancy & Prenatal Care',
    'High-Risk Pregnancy',
    'Menstrual Disorders',
    'PCOS (Polycystic Ovary Syndrome)',
    'Endometriosis',
    'Uterine Fibroids',
    'Ovarian Cysts',
    'Infertility Issues',
    'Menopause & Hormonal Changes',
    'Cervical & Uterine Cancer Screening',
    'Pelvic Inflammatory Disease',
    'Vaginal Infections'
  ];

  const features = [
    {
      icon: Building2,
      title: 'Advanced Labor & Delivery',
      description: 'Modern labor rooms with fetal monitoring and NICU support'
    },
    {
      icon: Award,
      title: 'Expert OB/GYN Team',
      description: 'Board-certified obstetricians and gynecologists with decades of experience'
    },
    {
      icon: Clock,
      title: '24/7 Maternity Care',
      description: 'Round-the-clock obstetric emergency services and delivery support'
    },
    {
      icon: Shield,
      title: 'NABH Accredited',
      description: 'Quality maternity care standards certified for mother and baby safety'
    }
  ];

  const treatmentApproaches = [
    {
      icon: Target,
      title: 'Preventive Care & Screening',
      description: 'Regular health check-ups, cancer screenings, and early detection programs to maintain women\'s health at every life stage.',
      features: ['Pap Smears', 'Mammography', 'HPV Vaccination']
    },
    {
      icon: Baby,
      title: 'Maternity Care',
      description: 'Complete pregnancy care including prenatal visits, ultrasounds, delivery, and postpartum support for mother and baby.',
      features: ['Prenatal Monitoring', 'Normal Delivery', 'C-Section Delivery']
    },
    {
      icon: Activity,
      title: 'Gynecological Treatment',
      description: 'Medical and surgical treatment for gynecological conditions using latest minimally invasive techniques.',
      features: ['Laparoscopic Surgery', 'Hysteroscopy', 'Medical Management']
    },
    {
      icon: HeartHandshake,
      title: 'Fertility & Hormone Care',
      description: 'Comprehensive infertility evaluation, fertility treatments, and hormonal disorder management with personalized care.',
      features: ['Fertility Assessment', 'Ovulation Induction', 'Hormone Therapy']
    }
  ];

  const statistics = [
    { number: '12,000+', label: 'Safe Deliveries Conducted' },
    { number: '98%', label: 'Patient Satisfaction Rate' },
    { number: '25+', label: 'Years OB/GYN Excellence' },
    { number: '24/7', label: 'Maternity Services Available' }
  ];

  const patientResources = [
    {
      icon: FileText,
      title: 'Pregnancy Guide',
      description: 'Week-by-week pregnancy guide with tips for a healthy pregnancy journey.'
    },
    {
      icon: Baby,
      title: 'Newborn Care',
      description: 'Essential information for caring for your newborn baby at home.'
    },
    {
      icon: BookOpen,
      title: 'Women\'s Health Topics',
      description: 'Educational resources on menstruation, menopause, and gynecological health.'
    },
    {
      icon: Heart,
      title: 'Fertility Information',
      description: 'Understanding fertility, conception, and infertility treatment options.'
    },
    {
      icon: Leaf,
      title: 'Nutrition During Pregnancy',
      description: 'Dietary guidelines and nutrition tips for expecting mothers.'
    },
    {
      icon: UserCheck,
      title: 'Postpartum Recovery',
      description: 'Recovery tips and postpartum care for new mothers after delivery.'
    }
  ];

  const faqs = [
    {
      question: 'When should I schedule my first prenatal visit?',
      answer: 'Schedule your first prenatal visit as soon as you discover you\'re pregnant, ideally within the first 8 weeks. Early prenatal care is crucial for monitoring your health and baby\'s development. Your first visit will include confirmation of pregnancy, medical history review, physical examination, blood tests, and discussion of prenatal vitamins. Regular prenatal visits continue throughout pregnancy with increasing frequency as you approach delivery.'
    },
    {
      question: 'What is the difference between a normal delivery and C-section?',
      answer: 'Normal (vaginal) delivery is the natural birth process where the baby is delivered through the birth canal. C-section (cesarean section) is a surgical procedure where the baby is delivered through an incision in the abdomen and uterus. C-sections may be planned (elective) for medical reasons or performed as emergency procedures if complications arise during labor. Your doctor will recommend the safest delivery method based on your specific situation.'
    },
    {
      question: 'How often should I get gynecological check-ups?',
      answer: 'Women should have annual gynecological check-ups starting from age 21 or when sexually active. These visits include pelvic exams, Pap smears (every 3 years for ages 21-65), breast examinations, and screening for STIs if needed. After menopause or with certain risk factors, your doctor may recommend more frequent visits. Regular check-ups help detect issues early and maintain reproductive health.'
    },
    {
      question: 'What are the treatment options for PCOS?',
      answer: 'PCOS (Polycystic Ovary Syndrome) treatment includes lifestyle modifications (diet and exercise for weight management), hormonal birth control to regulate periods, anti-androgen medications to reduce excess hair growth and acne, metformin for insulin resistance, and fertility medications if pregnancy is desired. Treatment is personalized based on symptoms, whether you want to conceive, and overall health. Regular monitoring is essential.'
    },
    {
      question: 'At what age should I start thinking about fertility?',
      answer: 'Women\'s fertility naturally declines with age, especially after 35. If you\'re under 35 and trying to conceive, seek evaluation after 12 months of unsuccessful attempts. If you\'re 35 or older, consult a fertility specialist after 6 months. However, it\'s good to discuss fertility health during routine gynecological visits at any age, especially if you have irregular periods, PCOS, endometriosis, or family history of early menopause.'
    },
    {
      question: 'What should I expect during menopause?',
      answer: 'Menopause typically occurs between ages 45-55 when menstruation stops permanently. Common symptoms include hot flashes, night sweats, mood changes, sleep disturbances, vaginal dryness, and irregular periods during perimenopause (transition phase). Management includes lifestyle changes, hormone replacement therapy (HRT), non-hormonal medications, and complementary therapies. Regular check-ups help manage symptoms and monitor bone health and cardiovascular risk during this transition.'
    }
  ];

  const emergencyWarnings = [
    {
      symptom: 'Heavy Bleeding',
      description: 'Excessive vaginal bleeding, especially during pregnancy or after childbirth'
    },
    {
      symptom: 'Severe Abdominal Pain',
      description: 'Sudden severe pelvic or abdominal pain, especially with fever'
    },
    {
      symptom: 'Signs of Labor',
      description: 'Regular contractions, water breaking, or bleeding during pregnancy'
    },
    {
      symptom: 'High Fever in Pregnancy',
      description: 'Fever above 100.4°F during pregnancy or postpartum period'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] bg-opacity-85"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-blue-200" />
              <span className="text-blue-100 font-semibold">Women's Health Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Obstetrics &
              <span className="block">Gynecology Care</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Expert women's healthcare from adolescence through menopause, including pregnancy care,
              gynecological treatments, and specialized fertility services.
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
                Recognize Obstetric & Gynecological Emergency Signs
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
                immediately for emergency care!
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
              <span>Why Choose Our OB/GYN Department</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Women's
              <span className="text-[#328CCB]"> Healthcare</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our obstetrics and gynecology department offers comprehensive care with expert specialists,
              modern facilities, and compassionate support for every stage of a woman's life.
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
              Comprehensive Women's Health
              <span className="text-[#328CCB]"> Treatment Approaches</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From preventive care to advanced treatments, we provide complete
              obstetric and gynecological care tailored to each woman's unique needs.
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
              Comprehensive OB/GYN
              <span className="text-[#328CCB]"> Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From pregnancy care to gynecological treatments and fertility services, we provide
              complete women's healthcare under one roof.
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
                Women's Health Conditions
                <span className="text-[#328CCB]"> We Specialize In</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced OB/GYN team treats a wide range of women's health conditions
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Patient Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Women's Health Resources for
              <span className="text-[#328CCB]"> Patients & Families</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources to support your women's health journey and treatment.
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
              <span className="text-[#328CCB]"> Women's Healthcare</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about obstetrics, gynecology, and women's health services.
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
                Schedule Your OB/GYN
                <span className="text-[#328CCB]"> Consultation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Begin your journey to better women's health. Fill out the form below
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
                      <Heart className="h-5 w-5 text-gray-400" />
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
                    className="bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] hover:from-[#2a7bb5] hover:to-[#328CCB] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
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
              Need Immediate Women's Healthcare Support?
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

export default ObstetricsGynecologyPage;
