import React from 'react';
import { ArrowRight, Users, Award, Leaf } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-blue-600/5"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-bl from-teal-100/30 to-transparent rounded-full -translate-y-24 sm:-translate-y-36 lg:-translate-y-48 translate-x-24 sm:translate-x-36 lg:translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full translate-y-24 sm:translate-y-36 lg:translate-y-48 -translate-x-24 sm:-translate-x-36 lg:-translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              🌊 Inovasi Budidaya Berkelanjutan
            </div>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight max-width-constrained">
              {t('hero.tagline')}
            </h1>
            <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 mb-12 sm:mb-16">
              <button
                onClick={() => onPageChange('products')}
                className="cta-button bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('hero.cta1')}
              </button>
              <button
                onClick={() => onPageChange('training')}
                className="cta-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('hero.cta2')}
              </button>
              <button
                onClick={() => onPageChange('farming')}
                className="cta-button bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-teal-300 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-base transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                {t('hero.cta3')}
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-5xl mx-auto">
              <img
                src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/photo4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL3Bob3RvNC5qcGciLCJpYXQiOjE3NTQzMDczODcsImV4cCI6MTc4NTg0MzM4N30.B077U2W663Gv-MlWdRUONM5MQhWTz01boutoJVJHIGI"
                alt="Modern Eel Farming"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-6 lg:right-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 flex items-center justify-center">
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-white text-center">🏆 Teknologi Terdepan dalam Budidaya Sidat Modern</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-constrained max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-18">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              {t('features.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('features.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="card-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Leaf className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">{t('features.item1.title')}</h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('features.item1.desc')}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">{t('features.item2.title')}</h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('features.item2.desc')}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">{t('features.item3.title')}</h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('features.item3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-blue-700/90"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full -translate-y-24 sm:-translate-y-36 lg:-translate-y-48 translate-x-24 sm:translate-x-36 lg:translate-x-48"></div>
        
        <div className="container-constrained max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 lg:mb-6 relative z-10">
            {t('hero.cta.final')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg text-teal-100 mb-8 sm:mb-12 lg:mb-10 max-w-4xl mx-auto leading-relaxed relative z-10 px-4">
            {t('hero.cta.subtitle')}
          </p>
          <button
            onClick={() => onPageChange('training')}
            className="cta-button-lg bg-white text-teal-700 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg lg:text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center relative z-10"
          >
            {t('hero.cta.start')}
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;