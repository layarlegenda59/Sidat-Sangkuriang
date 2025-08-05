import React from 'react';
import { Clock, Users, Award, Play } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { Product } from '../contexts/CartContext';

interface TrainingPageProps {
  onPageChange: (page: string) => void;
}

const TrainingPage: React.FC<TrainingPageProps> = ({ onPageChange }) => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();

  const trainingPrograms = [
    {
      id: 'basic-training',
      name: { 
        id: 'Pelatihan Dasar Budidaya Sidat', 
        en: 'Basic Eel Farming Training' 
      },
      price: { idr: 750000, usd: 50 },
      duration: { id: '6 Minggu', en: '6 Weeks' },
      students: 1250,
      description: {
        id: 'Program pelatihan komprehensif untuk pemula yang ingin memulai budidaya sidat dari nol.',
        en: 'Comprehensive training program for beginners who want to start eel farming from scratch.'
      },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-brainstorming-meeting-ideas-mobile-application-software-design-project-modern-office.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL211bHRpcmFjaWFsLWdyb3VwLXlvdW5nLWNyZWF0aXZlLXBlb3BsZS1zbWFydC1jYXN1YWwtd2Vhci1kaXNjdXNzaW5nLWJ1c2luZXNzLWJyYWluc3Rvcm1pbmctbWVldGluZy1pZGVhcy1tb2JpbGUtYXBwbGljYXRpb24tc29mdHdhcmUtZGVzaWduLXByb2plY3QtbW9kZXJuLW9mZmljZS5qcGciLCJpYXQiOjE3NTQzNTU0NDAsImV4cCI6MTc4NTg5MTQ0MH0.-_-cl016YQGM84AEG2NNQzrWJLopw8xUrvozN-p03rA',
      category: 'training' as const
    },
    {
      id: 'advanced-training',
      name: { 
        id: 'Pelatihan Lanjutan & Sistem Modern', 
        en: 'Advanced Training & Modern Systems' 
      },
      price: { idr: 1500000, usd: 100 },
      duration: { id: '8 Minggu', en: '8 Weeks' },
      students: 850,
      description: {
        id: 'Program lanjutan untuk optimasi produksi dan penerapan teknologi terkini dalam budidaya sidat.',
        en: 'Advanced program for production optimization and application of latest technology in eel farming.'
      },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/asian-businessmen-businesswomen-meeting-brainstorming-ideas_1_50.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2FzaWFuLWJ1c2luZXNzbWVuLWJ1c2luZXNzd29tZW4tbWVldGluZy1icmFpbnN0b3JtaW5nLWlkZWFzXzFfNTAuanBnIiwiaWF0IjoxNzU0MzU2NjE4LCJleHAiOjE3ODU4OTI2MTh9.7JRAA5ED5aCk1pdUXGJ5JG0SNUiXt6aXNsv1WTKPxdo',
      category: 'training' as const
    }
  ];

  const curriculum = [
    { id: 'theory', title: { id: 'Teori Dasar Budidaya', en: 'Basic Farming Theory' } },
    { id: 'system', title: { id: 'Sistem Kolam & Instalasi', en: 'Pond System & Installation' } },
    { id: 'nutrition', title: { id: 'Nutrisi & Pakan', en: 'Nutrition & Feed' } },
    { id: 'health', title: { id: 'Kesehatan & Penyakit', en: 'Health & Disease Management' } },
    { id: 'harvest', title: { id: 'Panen & Pasca Panen', en: 'Harvest & Post-Harvest' } },
    { id: 'marketing', title: { id: 'Pemasaran & Bisnis', en: 'Marketing & Business' } }
  ];



  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
            {t('training.badge')}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            {t('training.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('training.subtitle')}
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <img
                src={program.image}
                alt={program.name[language]}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {program.duration[language]}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">{program.students} siswa</span>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {program.name[language]}
                </h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {program.description[language]}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                  <div className="bg-green-100 border-2 border-green-300 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-center w-full sm:w-auto">
                    <a 
                      href="https://wa.me/6281234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 font-semibold text-sm sm:text-base hover:text-green-800 transition-colors"
                    >
                      Hubungi via Whatsapp
                    </a>
                  </div>
                  <button
                    onClick={() => addToCart(program as Product)}
                    className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                  >
                    {t('training.enroll')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Overview - Infographic Style */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl mb-20 border border-gray-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full"></div>
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full text-sm font-semibold mb-6 shadow-lg">
              {t('training.curriculum')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('training.curriculum.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('training.curriculum.subtitle')}
            </p>
          </div>
          
          {/* Timeline Infographic */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 via-blue-500 to-purple-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-16">
              {curriculum.map((item, index) => {
                const isEven = index % 2 === 0;
                const colors = [
                  { bg: 'from-teal-500 to-teal-600', icon: 'bg-teal-100 text-teal-700', accent: 'border-teal-300' },
                  { bg: 'from-blue-500 to-blue-600', icon: 'bg-blue-100 text-blue-700', accent: 'border-blue-300' },
                  { bg: 'from-purple-500 to-purple-600', icon: 'bg-purple-100 text-purple-700', accent: 'border-purple-300' },
                  { bg: 'from-green-500 to-green-600', icon: 'bg-green-100 text-green-700', accent: 'border-green-300' },
                  { bg: 'from-orange-500 to-orange-600', icon: 'bg-orange-100 text-orange-700', accent: 'border-orange-300' },
                  { bg: 'from-pink-500 to-pink-600', icon: 'bg-pink-100 text-pink-700', accent: 'border-pink-300' }
                ];
                const color = colors[index % colors.length];
                
                return (
                  <div key={item.id} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} mb-6 lg:mb-0`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${color.accent}">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color.icon} mb-6 shadow-lg`}>
                          <span className="text-2xl font-bold">{index + 1}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-2xl mb-4">
                          {item.title[language]}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {index === 0 && t('training.curriculum.desc1')}
                          {index === 1 && t('training.curriculum.desc2')}
                          {index === 2 && t('training.curriculum.desc3')}
                          {index === 3 && t('training.curriculum.desc4')}
                          {index === 4 && t('training.curriculum.desc5')}
                          {index === 5 && t('training.curriculum.desc6')}
                        </p>
                        <div className="mt-6">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${color.icon}`}>
                            {t('training.curriculum.module')} {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 hidden lg:block">
                      <div className={`w-20 h-20 bg-gradient-to-br ${color.bg} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      {/* Connecting Lines */}
                      {index < curriculum.length - 1 && (
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-current to-transparent opacity-30"></div>
                      )}
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="w-full lg:w-5/12 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10">
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">6</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium leading-tight break-words">{t('training.curriculum.stats.modules')}</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">48</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium leading-tight break-words">{t('training.curriculum.stats.hours')}</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium leading-tight break-words">{t('training.curriculum.stats.practice')}</div>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium leading-tight break-words">{t('training.curriculum.stats.access')}</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            {t('training.features.badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">{t('training.features.title')}</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-600 max-w-3xl mx-auto">
            {t('training.features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-20">
          <div className="group bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
            <Clock className="w-12 lg:w-16 h-12 lg:h-16 text-teal-600 mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-gray-900 mb-2 lg:mb-3 text-base lg:text-lg break-words">{t('training.features.flexible.title')}</h3>
            <p className="text-sm lg:text-base text-gray-600 break-words leading-relaxed">{t('training.features.flexible.desc')}</p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
            <Play className="w-12 lg:w-16 h-12 lg:h-16 text-green-600 mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-gray-900 mb-2 lg:mb-3 text-base lg:text-lg break-words">{t('training.features.video.title')}</h3>
            <p className="text-sm lg:text-base text-gray-600 break-words leading-relaxed">{t('training.features.video.desc')}</p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
            <Award className="w-12 lg:w-16 h-12 lg:h-16 text-blue-600 mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-gray-900 mb-2 lg:mb-3 text-base lg:text-lg break-words">{t('training.features.certificate.title')}</h3>
            <p className="text-sm lg:text-base text-gray-600 break-words leading-relaxed">{t('training.features.certificate.desc')}</p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
            <Users className="w-12 lg:w-16 h-12 lg:h-16 text-purple-600 mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-gray-900 mb-2 lg:mb-3 text-base lg:text-lg break-words">{t('training.features.mentoring.title')}</h3>
            <p className="text-sm lg:text-base text-gray-600 break-words leading-relaxed">{t('training.features.mentoring.desc')}</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-blue-700/90"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">
              {t('training.cta.title')}
            </h3>
            <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('training.cta.subtitle')}
            </p>
            <button
              onClick={() => onPageChange('checkout')}
              className="bg-white text-teal-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              {t('training.cta.register')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;