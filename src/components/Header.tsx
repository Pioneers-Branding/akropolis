import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, Bone, Scissors, Heart, HeartPulse, Brain, Activity, Pill, Droplets, Baby, Sparkles, Ear, Eye, Shield } from 'lucide-react';
import { megaMenuDepartments } from '../data/megaMenuDepartments';

const iconMap = {
  Bone,
  Scissors,
  Heart,
  HeartPulse,
  Brain,
  Activity,
  Pill,
  Droplets,
  Baby,
  Sparkles,
  Ear,
  Eye,
  Shield
};

const servicesMenuItems = [
  { name: 'CT Scan', href: '/services/ct-scan', page: 'ct-scan' },
  { name: 'Endoscopy', href: '/services/endoscopy', page: 'endoscopy' },
  { name: 'Dialysis', href: '/services/dialysis', page: 'dialysis' },
  { name: 'Laboratory', href: '/services/laboratory', page: 'laboratory' },
  { name: 'Bronchoscopy', href: '/services/bronchoscopy', page: 'bronchoscopy' },
  { name: 'Colonoscopy', href: '/services/colonoscopy', page: 'colonoscopy' }
];

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'About', href: '#about', page: 'about' },
    { name: 'Departments', href: '#departments', page: 'departments', hasMegaMenu: true },
    { name: 'Doctors', href: '#doctors', page: 'doctors' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Contact', href: '#contact', page: 'contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-8 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://brandingpioneers.co.in/akropolis/WhatsApp Image 2025-08-16 at 12.12.12_9a8761f4.jpg"
              alt="Akropolis Hospital Logo"
              className="h-12 lg:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <a
                  href={item.href}
                  onMouseEnter={() => {
                    if (item.hasMegaMenu) setIsDepartmentsOpen(true);
                    if (item.hasDropdown) setIsServicesOpen(true);
                  }}
                  onClick={(e) => {
                    if (item.page) {
                      e.preventDefault();
                      setCurrentPage(item.page);
                      // Update URL
                      if (item.page === 'home') {
                        window.history.pushState({}, '', '/');
                      } else {
                        window.history.pushState({}, '', `/${item.page}`);
                      }
                    }
                  }}
                  className="text-gray-700 hover:text-[#328CCB] font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {(item.hasMegaMenu || item.hasDropdown) && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${(item.hasMegaMenu && isDepartmentsOpen) || (item.hasDropdown && isServicesOpen) ? 'rotate-180' : ''
                      }`} />
                  )}
                </a>

                {/* Mega Menu */}
                {item.hasMegaMenu && isDepartmentsOpen && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-8"
                    onMouseEnter={() => setIsDepartmentsOpen(true)}
                    onMouseLeave={() => setIsDepartmentsOpen(false)}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Departments</h3>
                      <p className="text-gray-600">Comprehensive healthcare services across all specialties</p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {megaMenuDepartments.slice(0, 15).map((dept) => {
                        const IconComponent = iconMap[dept.icon as keyof typeof iconMap];
                        const pageMap: { [key: string]: string } = {
                          '/cardiology': 'cardiology',
                          '/neurology': 'neurology',
                          '/nephrology': 'nephrology',
                          '/orthopedics': 'orthopedics',
                          '/pediatrics': 'pediatrics',
                          '/oncology': 'oncology',
                          '/obstetrics-gynecology': 'obstetrics-gynecology',
                          '/plastic-surgery': 'plastic-surgery',
                          '/ent': 'ent',
                          '/ophthalmology': 'ophthalmology',
                          '/dermatology': 'dermatology',
                          '/gastroenterology': 'gastroenterology',
                          '/health-nutrition': 'health-nutrition',
                          '/emergency': 'emergency'
                        };
                        const page = pageMap[dept.href];

                        return (
                          <a
                            key={dept.id}
                            href={dept.href}
                            onClick={(e) => {
                              if (page) {
                                e.preventDefault();
                                setCurrentPage(page);
                                window.history.pushState({}, '', dept.href);
                                setIsDepartmentsOpen(false);
                              }
                            }}
                            className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-[#328CCB]/5 hover:shadow-md transition-all duration-200 cursor-pointer"
                          >
                            <div className="bg-[#328CCB]/10 p-3 rounded-lg">
                              <IconComponent className="h-6 w-6 text-[#328CCB]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {dept.name}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {dept.description}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                      <a
                        href="/departments"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage('departments');
                          window.history.pushState({}, '', '/departments');
                          setIsDepartmentsOpen(false);
                        }}
                        className="inline-flex items-center space-x-2 bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        <span>View All Departments</span>
                        <ChevronDown className="h-4 w-4 rotate-270" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-4"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-bold text-gray-900">Medical Services</h3>
                      <p className="text-sm text-gray-600">Advanced diagnostic services</p>
                    </div>
                    <div className="py-2">
                      {servicesMenuItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          onClick={(e) => {
                            if (service.page) {
                              e.preventDefault();
                              setCurrentPage(service.page);
                              window.history.pushState({}, '', service.href);
                            }
                          }}
                          className="block px-4 py-3 text-gray-700 hover:bg-[#328CCB]/5 hover:text-[#328CCB] transition-colors duration-200 font-medium"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <a
                        href="/departments"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage('departments');
                          window.history.pushState({}, '', '/departments');
                          setIsServicesOpen(false);
                        }}
                        className="block text-center bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
                      >
                        View All Services
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:9100009744"
              className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-[#328CCB] font-medium py-2"
                    onClick={(e) => {
                      if (item.page) {
                        e.preventDefault();
                        setCurrentPage(item.page);
                        if (item.page === 'home') {
                          window.history.pushState({}, '', '/');
                        } else {
                          window.history.pushState({}, '', `/${item.page}`);
                        }
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {servicesMenuItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block text-gray-600 hover:text-[#328CCB] py-1 text-sm"
                          onClick={(e) => {
                            if (service.page) {
                              e.preventDefault();
                              setCurrentPage(service.page);
                              window.history.pushState({}, '', service.href);
                            }
                            setIsMenuOpen(false);
                          }}
                        >
                          • {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:9100009744"
                  className="w-full bg-[#D66C43] hover:bg-[#c55a36] text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Emergency Services</span>
                </a>
                <a
                  href="#contact"
                  className="w-full bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;