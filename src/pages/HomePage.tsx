import React from 'react';
import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import AboutSection from '../components/AboutSection';
import DepartmentsSection from '../components/DepartmentsSection';
import ServicesSection from '../components/ServicesSection';
import DoctorsSection from '../components/DoctorsSection';
import InsuranceSlider from '../components/InsuranceSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';

interface HomePageProps {
  onDoctorClick: (doctorId: string) => void;
  onNavigate: (page: string) => void;
  onServiceNavigate?: (serviceId: string) => void;
  activeDepartment?: string;
  onDepartmentChange?: (departmentId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  onDoctorClick, 
  onNavigate, 
  onServiceNavigate,
  activeDepartment = 'cardiology',
  onDepartmentChange 
}) => {
  return (
    <>
      <Hero />
      <TrustSignals />
      <AboutSection />
      <DepartmentsSection 
        onNavigate={onNavigate} 
        activeDepartment={activeDepartment}
        onDepartmentChange={onDepartmentChange}
      />
      <ServicesSection onServiceNavigate={onServiceNavigate} />
      <DoctorsSection onDoctorClick={onDoctorClick} />
      <InsuranceSlider />
      <TestimonialsSection />      
      <ContactSection />
    </>
  );
};

export default HomePage;