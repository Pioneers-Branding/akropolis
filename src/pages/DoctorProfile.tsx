import React from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Award,
  CheckCircle,
  Phone,
  MapPin,
  GraduationCap,
  Stethoscope,
  Star,
  Shield,
  Briefcase,
  FileText,
  Users,
  Mail
} from 'lucide-react';
import { doctors, Doctor } from '../data/doctors';
import { CONTACT_INFO } from '../utils/constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmergencyBar from '../components/EmergencyBar';

interface DoctorProfileProps {
  doctorId: string;
  onBack: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctorId, onBack }) => {
  const [currentPage, setCurrentPage] = React.useState('doctor-profile');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    window.location.reload();
  };

  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
          <button
            onClick={onBack}
            className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <EmergencyBar />
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
       
      {/* Back Button */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#328CCB] transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Doctors</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#328CCB]/20 mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h1>
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
              </div>

              {/* Experience */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#328CCB]/10 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-[#328CCB]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Experience</p>
                    <p className="text-gray-600">{doctor.experience}</p>
                    {doctor.yearsAsSpecialist && (
                      <p className="text-sm text-gray-500">({doctor.yearsAsSpecialist})</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#D66C43]/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-[#D66C43]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">OPD Timing</p>
                    <p className="text-gray-600">{doctor.opdTiming}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Akropolis Super Speciality Hospital</p>
                  </div>
                </div>
              </div>

              {/* Book Appointment Button */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg w-fit mx-auto"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span> 
              </a>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Call: <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold">{CONTACT_INFO.phone}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Doctor */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#328CCB]/10 p-3 rounded-xl">
                  <Stethoscope className="h-6 w-6 text-[#328CCB]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">About Dr. {doctor.name.split(' ').pop()}</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                {doctor.description}
              </p>
            </div>

            {/* Education */}
            {doctor.education && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-[#D66C43]/10 p-3 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-[#D66C43]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                </div>
                
                <div className="space-y-4">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-[#328CCB] pl-6 py-3">
                      <h3 className="font-bold text-gray-900 text-lg">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">Completed in {edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            {doctor.services && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Services Provided</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#328CCB] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Positions */}
            {doctor.positions && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
                </div>

                <div className="space-y-4">
                  {doctor.positions.map((position, index) => (
                    <div key={index} className="border-l-4 border-[#328CCB] pl-6 py-3">
                      <h3 className="font-bold text-gray-900 text-lg">{position.title}</h3>
                      <p className="text-gray-600">{position.organization}</p>
                      <p className="text-sm text-gray-500">{position.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Research & Publications */}
            {doctor.publications && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Research & Publications</h2>
                </div>

                <div className="space-y-3">
                  {doctor.publications.map((publication, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#328CCB] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{publication}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Memberships */}
            {doctor.memberships && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Professional Memberships</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.memberships.map((membership, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#328CCB] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{membership}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Doctor Contact</h3>
                    {doctor.email && (
                      <p className="text-gray-600 flex items-center space-x-2 mb-2">
                        <Mail className="h-4 w-4 text-[#328CCB]" />
                        <a href={`mailto:${doctor.email}`} className="text-[#328CCB] font-semibold hover:underline">{doctor.email}</a>
                      </p>
                    )}
                    {doctor.phone && (
                      <p className="text-gray-600 flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-[#328CCB]" />
                        <a href={`tel:${doctor.phone}`} className="text-[#328CCB] font-semibold hover:underline">{doctor.phone}</a>
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hospital Contact</h3>
                    <p className="text-gray-600">Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#328CCB] font-semibold hover:underline">{CONTACT_INFO.phone}</a></p>
                    <p className="text-gray-600">Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#328CCB] font-semibold hover:underline">{CONTACT_INFO.email}</a></p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency</h3>
                    <p className="text-gray-600">24×7 Emergency: <a href={`tel:${CONTACT_INFO.emergency}`} className="text-[#D66C43] font-semibold hover:underline">{CONTACT_INFO.emergency}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DoctorProfile;