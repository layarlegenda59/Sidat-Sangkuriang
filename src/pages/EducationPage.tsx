import React from 'react';
import { BookOpen, Play, FileText, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const EducationPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: { 
        id: 'Panduan Lengkap Memulai Budidaya Sidat untuk Pemula', 
        en: 'Complete Guide to Starting Eel Farming for Beginners' 
      },
      excerpt: { 
        id: 'Pelajari langkah-langkah dasar untuk memulai usaha budidaya sidat yang menguntungkan', 
        en: 'Learn the basic steps to start a profitable eel farming business' 
      },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/learning-programming-language%20(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2xlYXJuaW5nLXByb2dyYW1taW5nLWxhbmd1YWdlICgxKS5qcGciLCJpYXQiOjE3NTQzNTg4MzgsImV4cCI6MTc4NTg5NDgzOH0.zhv0RQZaOQYj2v6u27ikuaTe1V8bcbeGsZdAVlwJ5R8',
      readTime: '8 min',
      category: 'Panduan'
    },
    {
      id: 2,
      title: { 
        id: 'Teknologi IoT dalam Budidaya Sidat Modern', 
        en: 'IoT Technology in Modern Eel Farming' 
      },
      excerpt: { 
        id: 'Bagaimana teknologi Internet of Things meningkatkan efisiensi dan produktivitas budidaya', 
        en: 'How Internet of Things technology improves farming efficiency and productivity' 
      },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/FARM_AquaMaof_Fish_Farming_1-1yHigh.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL0ZBUk1fQXF1YU1hb2ZfRmlzaF9GYXJtaW5nXzEtMXlIaWdoLmpwZyIsImlhdCI6MTc1NDM1ODk4MywiZXhwIjoxNzg1ODk0OTgzfQ.zrFYUoFcKvoD1lwr798BLdbudsdtVHq7FG_lv5yXm1Y',
      readTime: '6 min',
      category: 'Teknologi'
    },
    {
      id: 3,
      title: { 
        id: 'Nutrisi dan Pakan Optimal untuk Pertumbuhan Sidat', 
        en: 'Optimal Nutrition and Feed for Eel Growth' 
      },
      excerpt: { 
        id: 'Formula pakan terbaik dan jadwal pemberian yang tepat untuk mengoptimalkan pertumbuhan', 
        en: 'Best feed formula and proper feeding schedule to optimize growth' 
      },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/ikan-sidat-foodtribute.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2lrYW4tc2lkYXQtZm9vZHRyaWJ1dGUuanBnIiwiaWF0IjoxNzU0MzU5Mjc2LCJleHAiOjE3ODU4OTUyNzZ9.79zPXq31h34O29wUM714aX2k27jsYX-R_pnYaYQyNxQ',
      readTime: '5 min',
      category: 'Nutrisi'
    }
  ];

  const videos = [
    {
      id: 1,
      title: { 
        id: 'Setup Kolam Budidaya Sidat Modern', 
        en: 'Modern Eel Farming Pond Setup' 
      },
      duration: '15:30',
      thumbnail: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/FARM_AquaMaof_Fish_Farming_1-1yHigh.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL0ZBUk1fQXF1YU1hb2ZfRmlzaF9GYXJtaW5nXzEtMXlIaWdoLmpwZyIsImlhdCI6MTc1NDM1ODk4MywiZXhwIjoxNzg1ODk0OTgzfQ.zrFYUoFcKvoD1lwr798BLdbudsdtVHq7FG_lv5yXm1Y'
    },
    {
      id: 2,
      title: { 
        id: 'Teknik Pemberian Pakan yang Efektif', 
        en: 'Effective Feeding Techniques' 
      },
      duration: '12:45',
      thumbnail: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/ikan-sidat-foodtribute.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2lrYW4tc2lkYXQtZm9vZHRyaWJ1dGUuanBnIiwiaWF0IjoxNzU0MzU5Mjc2LCJleHAiOjE3ODU4OTUyNzZ9.79zPXq31h34O29wUM714aX2k27jsYX-R_pnYaYQyNxQ'
    },
    {
      id: 3,
      title: { 
        id: 'Monitoring Kualitas Air Harian', 
        en: 'Daily Water Quality Monitoring' 
      },
      duration: '10:20',
      thumbnail: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/indoor.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2luZG9vci5qcGciLCJpYXQiOjE3NTQzNjcxMTUsImV4cCI6MTc4NTkwMzExNX0.EOojG9pCal3VxPXLvF9nczEMtqlvwPB3c4p34SAe0JQ'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            {t('education.badge')}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">{t('education.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto">{t('education.subtitle')}</p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/full-shot-arab-people-spending-t.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2Z1bGwtc2hvdC1hcmFiLXBlb3BsZS1zcGVuZGluZy10LmpwZyIsImlhdCI6MTc1NDM1ODY1MCwiZXhwIjoxNzg1ODk0NjUwfQ.LbvgLoW8nmX43Zyn1ek4TRKY7qFCZOXH8qQimv5PVUc"
                alt="Featured Article"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Featured Article
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
                {language === 'id' 
                  ? 'Revolusi Budidaya Sidat: Dari Tradisional ke Digital'
                  : 'Eel Farming Revolution: From Traditional to Digital'
                }
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === 'id'
                  ? 'Discover how digital transformation is changing the landscape of eel farming in Indonesia, making it more efficient, sustainable, and profitable than ever before.'
                  : 'Temukan bagaimana transformasi digital mengubah lanskap budidaya sidat di Indonesia, membuatnya lebih efisien, berkelanjutan, dan menguntungkan dari sebelumnya.'
                }
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-base transition-all duration-300 hover:scale-105 inline-flex items-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 mr-2" />
                {t('education.featured.readArticle')}
              </button>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('education.articles.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                    {article.title[language]}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-base text-gray-600 mb-4">
                    {article.excerpt[language]}
                  </p>
                  
                  <button className="text-blue-700 hover:text-blue-800 font-semibold transition-colors inline-flex items-center">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 mr-2" />
                    {t('education.articles.readMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('education.videos.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title[language]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 text-emerald-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                    {video.title[language]}
                  </h3>
                  <button className="text-blue-700 hover:text-blue-800 font-semibold transition-colors">
                    {t('education.videos.watch')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            {t('education.certification.title')}
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {t('education.certification.description')}
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            {t('education.certification.start')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;