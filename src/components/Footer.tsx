import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/', page: 'home' },
    { name: 'About Us', href: '/about', page: 'about' },
    { name: 'Departments', href: '/departments', page: 'departments' },
    { name: 'Doctors', href: '/doctors', page: 'doctors' },
    { name: 'Contact', href: '/contact', page: 'contact' }
  ];

  const patientServices = [
    { name: 'CT Scan', href: '/services/ct-scan', page: 'ct-scan' },
    { name: 'Endoscopy', href: '/services/endoscopy', page: 'endoscopy' },
    { name: 'Colonoscopy', href: '/services/colonoscopy', page: 'colonoscopy' },
    { name: 'Bronchoscopy', href: '/services/bronchoscopy', page: 'bronchoscopy' },
    { name: 'Dialysis', href: '/services/dialysis', page: 'dialysis' },
    { name: 'Laboratory', href: '/services/laboratory', page: 'laboratory' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <img
              src="https://brandingpioneers.co.in/akropolis/WhatsApp Image 2025-08-16 at 12.12.12_9a8761f4.jpg"
              alt="Akropolis Hospital Logo"
              className="h-16 w-auto mb-6 bg-white p-2 rounded-lg"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Akropolis Super Speciality Hospital - Your trusted partner in healthcare excellence
              with advanced medical technology and compassionate care.
            </p>

            {/* Emergency Contact Highlight */}
            <div className="bg-[#D66C43] rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <div>
                  <div className="font-semibold">Emergency 24×7</div>
                  <a href={`tel:${CONTACT_INFO.emergency}`}><div className="text-lg font-bold">{CONTACT_INFO.emergency}</div></a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61580596171533#" target="_blank" className="bg-gray-800 hover:bg-[#328CCB] p-2 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>

              <a href="https://www.instagram.com/akropolishospital/" target="_blank" className="bg-gray-800 hover:bg-[#D66C43] p-2 rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@akropolishhospital/videos" target="_blank" className="bg-gray-800 hover:bg-[#D66C43] p-2 rounded-lg transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.page) {
                        e.preventDefault();
                        window.history.pushState({}, '', `/${link.page}`);
                        window.location.reload();
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Patient Services</h3>
            <ul className="space-y-3">
              {patientServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      if (service.page) {
                        e.preventDefault();
                        window.history.pushState({}, '', service.href);
                        window.location.reload();
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`}><p className="text-gray-300">{CONTACT_INFO.phone}</p></a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`}><p className="text-gray-300">{CONTACT_INFO.email}</p></a>
              </div>
            </div>

            {/* Accreditation */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-yellow-400 p-1 rounded">
                  <span className="text-gray-900 font-bold text-xs">NABH</span>
                </div>
                <span className="font-semibold">Accredited</span>
              </div>
              <p className="text-gray-400 text-sm">Quality healthcare standards certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Akropolis Super Speciality Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/contact" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
                window.location.reload();
              }} className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/contact" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
                window.location.reload();
              }} className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
                window.location.reload();
              }} className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;