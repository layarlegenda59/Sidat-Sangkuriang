import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import SEOHead from './components/SEOHead';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import FarmingPage from './views/FarmingPage';
import TrainingPage from './views/TrainingPage';
import ProductsPage from './views/ProductsPage';
import EducationPage from './views/EducationPage';
import ContactPage from './views/ContactPage';
import CheckoutPage from './views/CheckoutPage';

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