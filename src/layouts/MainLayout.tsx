import React from 'react';
import EmergencyBar from '../components/EmergencyBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCTAs from '../components/FloatingCTAs';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  showHeader?: boolean;
  showFooter?: boolean;
  showFloatingCTAs?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  currentPage, 
  setCurrentPage,
  showHeader = true,
  showFooter = true,
  showFloatingCTAs = true
}) => {
  return (
    <>
      <EmergencyBar />
      {showHeader && (
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <main>
        {children}
      </main>
      {showFooter && <Footer />}
      {showFloatingCTAs && <FloatingCTAs />}
    </>
  );
};

export default MainLayout;