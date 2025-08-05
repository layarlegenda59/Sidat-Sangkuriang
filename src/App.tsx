import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import SEOHead from './components/SEOHead';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FarmingPage from './pages/FarmingPage';
import TrainingPage from './pages/TrainingPage';
import ProductsPage from './pages/ProductsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'farming':
        return <FarmingPage />;
      case 'training':
        return <TrainingPage onPageChange={setCurrentPage} />;
      case 'products':
        return <ProductsPage onPageChange={setCurrentPage} />;
      case 'education':
        return <EducationPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <SEOHead page={currentPage} />
          <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
          <main>{renderPage()}</main>
          <ChatAssistant />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;