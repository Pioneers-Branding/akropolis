import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmergencyBar from '../components/EmergencyBar';

interface DepartmentLayoutProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  children: React.ReactNode;
}

const DepartmentLayout: React.FC<DepartmentLayoutProps> = ({ currentPage, setCurrentPage, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBar />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DepartmentLayout;
