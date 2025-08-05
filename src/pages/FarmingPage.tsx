import React from 'react';
import { Droplets, Thermometer, Zap, BarChart3, Settings, Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from '../hooks/useTranslation';

const FarmingPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();



  const specifications = [
    { 
      label: { id: 'Kapasitas Kolam', en: 'Pond Capacity' }, 
      value: '10-50 m³' 
    },
    { 
      label: { id: 'Kepadatan Optimal', en: 'Optimal Density' }, 
      value: '2-3 kg/m³' 
    },
    { 
      label: { id: 'Waktu Panen', en: 'Harvest Time' }, 
      value: '8-12 bulan' 
    },
    { 
      label: { id: 'Survival Rate', en: 'Survival Rate' }, 
      value: '85-95%' 
    },
    { 
      label: { id: 'FCR (Feed Conversion)', en: 'FCR (Feed Conversion)' }, 
      value: '1.2-1.5' 
    },
    { 
      label: { id: 'ROI Proyeksi', en: 'Projected ROI' }, 
      value: '40-60%' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            {t('farming.badge')}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">{t('farming.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto">{t('farming.subtitle')}</p>
        </div>

        {/* System Overview */}
        <div className="mb-16">
          <img
            src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/photo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL3Bob3RvLmpwZyIsImlhdCI6MTc1NDMxMzA5OSwiZXhwIjoxNzg1ODQ5MDk5fQ.yQF20bVWGW_fOx0rmRwtrTOX1V5Gc7AxZv6g3fQk6AU"
            alt="Modern Eel Farming System"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl mb-8"
          />
        </div>

        {/* System Features */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('farming.features.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6 text-blue-700">
                <Droplets className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('farming.features.water.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('farming.features.water.desc')}
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6 text-blue-700">
                <Thermometer className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('farming.features.temperature.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('farming.features.temperature.desc')}
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6 text-blue-700">
                <Zap className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('farming.features.aeration.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('farming.features.aeration.desc')}
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6 text-blue-700">
                <BarChart3 className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('farming.features.monitoring.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('farming.features.monitoring.desc')}
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6 text-blue-700">
                <Settings className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('farming.features.feeding.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('farming.features.feeding.desc')}
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6 text-blue-700">
                <Shield className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('farming.features.biosecurity.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('farming.features.biosecurity.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-8">
              {language === 'id' ? 'Spesifikasi Teknis' : 'Technical Specifications'}
            </h3>
            
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">
                    {spec.label[language]}
                  </span>
                  <span className="font-bold text-emerald-600">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-6">
              {language === 'id' ? 'Keunggulan Sistem' : 'System Advantages'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  {language === 'id' 
                    ? 'Efisiensi air hingga 90% dengan sistem resirkulasi'
                    : '90% water efficiency with recirculation system'
                  }
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  {language === 'id' 
                    ? 'Produktivitas 3x lebih tinggi dari metode konvensional'
                    : '3x higher productivity than conventional methods'
                  }
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  {language === 'id' 
                    ? 'Ramah lingkungan dengan zero waste system'
                    : 'Environmentally friendly with zero waste system'
                  }
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  {language === 'id' 
                    ? 'Dapat dioperasikan di lahan terbatas'
                    : 'Can be operated on limited land'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'id' ? 'Alur Proses Budidaya' : 'Farming Process Flow'}
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, title: { id: 'Persiapan Kolam', en: 'Pond Preparation' } },
              { step: 2, title: { id: 'Tebar Benih', en: 'Seed Stocking' } },
              { step: 3, title: { id: 'Pemeliharaan', en: 'Maintenance' } },
              { step: 4, title: { id: 'Monitoring', en: 'Monitoring' } },
              { step: 5, title: { id: 'Panen', en: 'Harvest' } }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {process.step}
                </div>
                <h4 className="font-semibold text-gray-900">
                  {process.title[language]}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            {t('farming.cta.title')}
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {t('farming.cta.subtitle')}
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            {t('farming.cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmingPage;