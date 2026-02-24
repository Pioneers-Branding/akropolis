import React from 'react';
import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import DepartmentLayout from './layouts/DepartmentLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DoctorsPage from './pages/DoctorsPage';
import CardiologyPage from './pages/CardiologyPage';
import NeurologyPage from './pages/NeurologyPage';
import OrthopedicsPage from './pages/OrthopedicsPage';
import PediatricsPage from './pages/PediatricsPage';
import OncologyPage from './pages/OncologyPage';
import ObstetricsGynecologyPage from './pages/ObstetricsGynecologyPage';
import PlasticSurgeryPage from './pages/PlasticSurgeryPage';
import ENTPage from './pages/ENTPage';
import OphthalmologyPage from './pages/OphthalmologyPage';
import DermatologyPage from './pages/DermatologyPage';
import GastroenterologyPage from './pages/GastroenterologyPage';
import HealthNutritionPage from './pages/HealthNutritionPage';
import NephrologyPage from './pages/NephrologyPage';
import EmergencyPage from './pages/EmergencyPage';
import DoctorProfile from './pages/DoctorProfile';
import DepartmentsPage from './pages/DepartmentsPage';
import CTScanPage from './pages/CTScanPage';
import EndoscopyPage from './pages/EndoscopyPage';
import DialysisPage from './pages/DialysisPage';
import LaboratoryPage from './pages/LaboratoryPage';
import BronchoscopyPage from './pages/BronchoscopyPage';
import ColonoscopyPage from './pages/ColonoscopyPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeDepartment, setActiveDepartment] = useState('cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Handle URL changes and browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path === '/' && hash.startsWith('#department-')) {
        const dept = hash.replace('#department-', '');
        setActiveDepartment(dept);
        setCurrentPage('home');
      } else if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/doctors') {
        setCurrentPage('doctors');
      } else if (path === '/cardiology') {
        setCurrentPage('cardiology');
      } else if (path === '/neurology') {
        setCurrentPage('neurology');
      } else if (path === '/orthopedics') {
        setCurrentPage('orthopedics');
      } else if (path === '/pediatrics') {
        setCurrentPage('pediatrics');
      } else if (path === '/oncology') {
        setCurrentPage('oncology');
      } else if (path === '/obstetrics-gynecology') {
        setCurrentPage('obstetrics-gynecology');
      } else if (path === '/plastic-surgery') {
        setCurrentPage('plastic-surgery');
      } else if (path === '/ent') {
        setCurrentPage('ent');
      } else if (path === '/ophthalmology') {
        setCurrentPage('ophthalmology');
      } else if (path === '/dermatology') {
        setCurrentPage('dermatology');
      } else if (path === '/gastroenterology') {
        setCurrentPage('gastroenterology');
      } else if (path === '/health-nutrition') {
        setCurrentPage('health-nutrition');
      } else if (path === '/nephrology') {
        setCurrentPage('nephrology');
      } else if (path === '/emergency') {
        setCurrentPage('emergency');
      } else if (path === '/departments') {
        setCurrentPage('departments');
      } else if (path === '/services/ct-scan') {
        setCurrentPage('ct-scan');
      } else if (path === '/services/endoscopy') {
        setCurrentPage('endoscopy');
      } else if (path === '/services/dialysis') {
        setCurrentPage('dialysis');
      } else if (path === '/services/laboratory') {
        setCurrentPage('laboratory');
      } else if (path === '/services/bronchoscopy') {
        setCurrentPage('bronchoscopy');
      } else if (path === '/services/colonoscopy') {
        setCurrentPage('colonoscopy');
      } else if (path === '/thank-you') {
        setCurrentPage('thank-you');
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial state based on current URL
    handlePopState();

    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handlePageNavigation = (page: string) => {
    setCurrentPage(page);
    
    // Update URL without page reload
    if (page === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${page}`);
    }
  };

  const handleDepartmentChange = (departmentId: string) => {
    setActiveDepartment(departmentId);
    
    // Update URL with department hash
    window.history.pushState({}, '', `/#department-${departmentId}`);
  };
  const handleDoctorClick = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    setCurrentPage('doctor-profile');
    window.history.pushState({}, '', `/doctor/${doctorId}`);
  };

  const handleBackFromDoctorProfile = () => {
    setSelectedDoctorId(null);
    setCurrentPage('doctors');
    window.history.pushState({}, '', '/doctors');
  };

  const handleServiceNavigation = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage(serviceId);
    window.history.pushState({}, '', `/services/${serviceId}`);
  };

  const renderPage = () => {
    if (currentPage === 'about') {
      return <AboutPage />;
    }
    
    if (currentPage === 'contact') {
      return <ContactPage />;
    }
    
    if (currentPage === 'doctors') {
      return <DoctorsPage onDoctorClick={handleDoctorClick} />;
    }
    
    if (currentPage === 'departments') {
      return <DepartmentsPage onNavigate={handlePageNavigation} />;
    }
    
    if (currentPage === 'cardiology') {
      return <CardiologyPage />;
    }

    if (currentPage === 'neurology') {
      return <NeurologyPage />;
    }

    if (currentPage === 'orthopedics') {
      return <OrthopedicsPage />;
    }

    if (currentPage === 'pediatrics') {
      return <PediatricsPage />;
    }

    if (currentPage === 'oncology') {
      return <OncologyPage />;
    }

    if (currentPage === 'obstetrics-gynecology') {
      return <ObstetricsGynecologyPage />;
    }

    if (currentPage === 'plastic-surgery') {
      return <PlasticSurgeryPage />;
    }

    if (currentPage === 'ent') {
      return <ENTPage />;
    }

    if (currentPage === 'ophthalmology') {
      return <OphthalmologyPage />;
    }

    if (currentPage === 'dermatology') {
      return <DermatologyPage />;
    }

    if (currentPage === 'gastroenterology') {
      return <GastroenterologyPage />;
    }

    if (currentPage === 'health-nutrition') {
      return <HealthNutritionPage />;
    }

    if (currentPage === 'nephrology') {
      return <NephrologyPage />;
    }

    if (currentPage === 'emergency') {
      return <EmergencyPage />;
    }

    if (currentPage === 'ct-scan') {
      return <CTScanPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'endoscopy') {
      return <EndoscopyPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'dialysis') {
      return <DialysisPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'laboratory') {
      return <LaboratoryPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'bronchoscopy') {
      return <BronchoscopyPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'colonoscopy') {
      return <ColonoscopyPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'thank-you') {
      return <ThankYouPage onNavigate={handlePageNavigation} />;
    }

    if (currentPage === 'doctor-profile' && selectedDoctorId) {
      return (
        <DoctorProfile 
          doctorId={selectedDoctorId} 
          onBack={handleBackFromDoctorProfile}
        />
      );
    }
    
    // Default to home page
    return (
      <HomePage 
        onDoctorClick={handleDoctorClick}
        onNavigate={handlePageNavigation}
        onServiceNavigate={handleServiceNavigation}
        activeDepartment={activeDepartment}
        onDepartmentChange={handleDepartmentChange}
      />
    );
  };

  // Department and service pages that use DepartmentLayout (with Header + Footer)
  const departmentAndServicePages = ['cardiology', 'neurology', 'orthopedics', 'pediatrics', 'oncology', 'obstetrics-gynecology', 'plastic-surgery', 'ent', 'ophthalmology', 'dermatology', 'gastroenterology', 'health-nutrition', 'nephrology', 'emergency', 'departments', 'ct-scan', 'endoscopy', 'dialysis', 'laboratory', 'bronchoscopy', 'colonoscopy'];

  // Special pages with no layout at all
  const pagesWithNoLayout = ['doctor-profile', 'thank-you'];

  // Check which layout to use
  if (departmentAndServicePages.includes(currentPage)) {
    return (
      <DepartmentLayout
        currentPage={currentPage}
        setCurrentPage={handlePageNavigation}
      >
        {renderPage()}
      </DepartmentLayout>
    );
  }

  if (pagesWithNoLayout.includes(currentPage)) {
    return renderPage();
  }

  // Default pages use MainLayout
  return (
    <MainLayout
      currentPage={currentPage}
      setCurrentPage={handlePageNavigation}
    >
      {renderPage()}
    </MainLayout>
  );
}

export default App;