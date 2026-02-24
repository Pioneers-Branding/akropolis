import React from 'react';
import { CheckCircle, ArrowLeft, Phone, Home } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#328CCB] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <CheckCircle className="w-24 h-24 text-[#328CCB] relative" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your message has been successfully received. Our team will review your inquiry and get back to you within 24 hours.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-[#328CCB] text-white rounded-full flex-shrink-0 mr-3 text-sm font-semibold flex items-center justify-center mt-0.5">1</span>
                <span>We'll review your message and assign it to the appropriate specialist</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-[#328CCB] text-white rounded-full flex-shrink-0 mr-3 text-sm font-semibold flex items-center justify-center mt-0.5">2</span>
                <span>Our team will contact you via your preferred method of communication</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-[#328CCB] text-white rounded-full flex-shrink-0 mr-3 text-sm font-semibold flex items-center justify-center mt-0.5">3</span>
                <span>We'll work together to address your healthcare needs</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <p className="text-gray-600 mb-4">Need immediate assistance?</p>
            <a
              href="tel:9100009744"
              className="inline-flex items-center gap-2 text-[#328CCB] hover:text-[#2a7bb5] font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>9100009744</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#328CCB] text-white rounded-lg hover:bg-[#2a7bb5] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#328CCB] border-2 border-[#328CCB] rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Send Another Message</span>
            </button>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>A confirmation has been sent to your email address</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
