import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from '../hooks/useTranslation';

// Komponen untuk animasi counting
const CountingNumber: React.FC<{ target: string; duration?: number }> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract number from target string (e.g., "10+" -> 10, "5000+" -> 5000, "98%" -> 98)
  const targetNumber = parseInt(target.replace(/[^0-9]/g, ''));
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = targetNumber / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, targetNumber, duration]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
      {count}{suffix}
    </div>
  );
};

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            {t('about.badge')}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">{t('about.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/indoor.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2luZG9vci5qcGciLCJpYXQiOjE3NTQzNTYwNzYsImV4cCI6MTc4NTg5MjA3Nn0.OFXOwgtcuNCfQhdrq0HfU90sFK2mVaBRCQzBs1P2DX0"
            alt="Sidat Sangkuriang Facility"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <CountingNumber target="10+" duration={2000} />
            <div className="text-gray-600 font-medium">
              {t('about.stats.experience')}
            </div>
          </div>
          
          <div className="text-center">
            <CountingNumber target="2000+" duration={2200} />
            <div className="text-gray-600 font-medium">
              {t('about.stats.farmers')}
            </div>
          </div>
          
          <div className="text-center">
            <CountingNumber target="50+" duration={2400} />
            <div className="text-gray-600 font-medium">
              {t('about.stats.cities')}
            </div>
          </div>
          
          <div className="text-center">
            <CountingNumber target="98%" duration={2600} />
            <div className="text-gray-600 font-medium">
              {t('about.stats.satisfaction')}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              {language === 'id' ? 'Cerita Kami' : 'Our Story'}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {language === 'id' 
                  ? 'Sidat Sangkuriang lahir dari visi untuk mengangkat potensi budidaya sidat Indonesia ke tingkat dunia. Dimulai pada tahun 2014 dengan kolam kecil di Jawa Barat, kami kini telah berkembang menjadi pusat pembelajaran dan distribusi sidat terbesar di Indonesia.'
                  : 'Sidat Sangkuriang was born from a vision to elevate Indonesia\'s eel farming potential to world standards. Starting in 2014 with a small pond in West Java, we have now grown into the largest eel learning and distribution center in Indonesia.'
                }
              </p>
              <p>
                {language === 'id'
                  ? 'Dengan tim ahli berpengalaman puluhan tahun, kami telah membantu ribuan petani mencapai kesuksesan melalui sistem budidaya modern, pelatihan berkualitas, dan produk sidat premium yang memenuhi standar internasional.'
                  : 'With a team of experts with decades of experience, we have helped thousands of farmers achieve success through modern farming systems, quality training, and premium eel products that meet international standards.'
                }
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/innovation_2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2lubm92YXRpb25fMi5qcGciLCJpYXQiOjE3NTQzMTI4ODgsImV4cCI6MTc4NTg0ODg4OH0.ymqwrpURbD7omr7gWGQpk7SrGbS2pHGPpAKCyfX2dM4"
              alt="Our Journey"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('about.values.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Target className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('about.values.innovation.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('about.values.innovation.desc')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('about.values.empowerment.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('about.values.empowerment.desc')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Heart className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('about.values.quality.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('about.values.quality.desc')}
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-6">
                <Zap className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-4">
                {t('about.values.technology.title')}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-600">
                {t('about.values.technology.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('about.team.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/muhammad-faiz-zulkeflee-BuxUWCobuGA-unsplash.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL211aGFtbWFkLWZhaXotenVsa2VmbGVlLUJ1eFVXQ29idUdBLXVuc3BsYXNoLnBuZyIsImlhdCI6MTc1NDM2ODk0OCwiZXhwIjoxNzg1OTA0OTQ4fQ.uha-m95G7kAr7oI88PhaHigWoH9dPwcXZVe6lw1PYM8"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('about.team.member1.name')}
              </h3>
              <p className="text-blue-600 font-medium mb-2 text-sm">
                {t('about.team.member1.role')}
              </p>
              <p className="text-gray-600 text-sm">
                {t('about.team.member1.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/xu-duo-qz_pDUfH55A-unsplash.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL3h1LWR1by1xel9wRFVmSDU1QS11bnNwbGFzaC5wbmciLCJpYXQiOjE3NTQzNjg4MTgsImV4cCI6MTc4NTkwNDgxOH0.oRwLnGjgvyrqsey99u-lh-2QcJLjg8ru8eO4hmW9LEY"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('about.team.member2.name')}
              </h3>
              <p className="text-blue-600 font-medium mb-2 text-sm">
                {t('about.team.member2.role')}
              </p>
              <p className="text-gray-600 text-sm">
                {t('about.team.member2.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/alvan-nee-DGFqyribqFo-unsplash.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2FsdmFuLW5lZS1ER0ZxeXJpYnFGby11bnNwbGFzaC5wbmciLCJpYXQiOjE3NTQzNjkwMjgsImV4cCI6MTc4NTkwNTAyOH0.nwVQksuGk67gpciq6zQ_JE34H1yyqjWnYyoMn7jyXEk"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('about.team.member3.name')}
              </h3>
              <p className="text-blue-600 font-medium mb-2 text-sm">
                {t('about.team.member3.role')}
              </p>
              <p className="text-gray-600 text-sm">
                {t('about.team.member3.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.mission.title')}
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            {t('about.mission.desc')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;