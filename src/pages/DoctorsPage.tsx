import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Award, 
  Shield, 
  Phone, 
  MapPin,
  Star,
  ChevronDown,
  User,
  Stethoscope,
  Heart,
  Building2
} from 'lucide-react';
import { doctors } from '../data/doctors';
import { CONTACT_INFO } from '../utils/constants';

interface DoctorsPageProps {
  onDoctorClick?: (doctorId: string) => void;
}

const DoctorsPage: React.FC<DoctorsPageProps> = ({ onDoctorClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique specialties
  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialization)));

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialization === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#328CCB] to-[#2a7bb5] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-[#328CCB] bg-opacity-75"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Stethoscope className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Medical Excellence</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet Our Expert
              <span className="block">Medical Team</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Highly qualified specialist doctors committed to providing world-class healthcare 
              with personalized attention and advanced medical expertise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.emergency}`}
                className="bg-white hover:bg-gray-50 text-[#328CCB] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
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
                className="text-blue-200 hover:text-white font-medium transition-colors duration-200"
              >
                ← Back to Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 text-lg"
                />
              </div>

              {/* Specialty Filter */}
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-4 pr-8 focus:ring-2 focus:ring-[#328CCB] focus:border-[#328CCB] transition-colors duration-200 text-lg min-w-[200px]"
                >
                  <option value="">All Specialties</option>
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#328CCB]">{filteredDoctors.length}</span> doctors
                {selectedSpecialty && (
                  <span> in <span className="font-semibold">{selectedSpecialty}</span></span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16">
              <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div 
                  key={doctor.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                  onClick={() => onDoctorClick && onDoctorClick(doctor.id)}
                >
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#328CCB]/20 mb-6"
                      />
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {doctor.name}
                      </h3>
                      
                      <p className="text-[#328CCB] font-semibold text-lg mb-2">
                        {doctor.specialization}
                      </p>
                      
                      <p className="text-gray-600 mb-4">
                        {doctor.qualification}
                      </p>
                      
                      {doctor.registrationVerified && (
                        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                          <Shield className="h-4 w-4" />
                          <span>Medical Registration Verified</span>
                        </div>
                      )}
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full mb-6">
                        <div className="flex items-center justify-center space-x-2 text-gray-700 mb-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">OPD Timing</span>
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                          {doctor.opdTiming}
                        </p>
                      </div>

                      <div className="flex items-center justify-center space-x-6 text-sm font-medium mb-6">
                        <div className="flex items-center space-x-2 text-[#D66C43]">
                          <Award className="h-4 w-4" />
                          <span>{doctor.experience}</span>
                        </div>
                        {doctor.yearsAsSpecialist && (
                          <div className="text-gray-600 text-xs">
                            ({doctor.yearsAsSpecialist})
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col space-y-3 w-full">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `tel:${CONTACT_INFO.phone}`;
                          }}
                          className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>Book Appointment</span>
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDoctorClick && onDoctorClick(doctor.id);
                          }}
                          className="text-[#328CCB] hover:text-[#2a7bb5] font-medium text-sm transition-colors duration-200"
                        >
                          View Full Profile →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              <span>Contact Hospital</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Need Help Choosing a Doctor?
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our patient care team is here to help you find the right specialist for your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Phone className="h-8 w-8 text-[#328CCB] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold hover:underline">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Phone className="h-8 w-8 text-[#D66C43] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Emergency</h3>
                <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#D66C43] font-semibold hover:underline">
                  {CONTACT_INFO.emergency}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">Sector 69, Gurugram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;