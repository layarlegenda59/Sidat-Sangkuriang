import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface SEOHeadProps {
  title?: string;
  description?: string;
  page?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, page = 'home' }) => {
  const { language } = useLanguage();

  const defaultTitles = {
    id: {
      home: 'Sidat Sangkuriang - Inovasi Budidaya Sidat Modern Indonesia',
      about: 'Tentang Kami - Sidat Sangkuriang',
      farming: 'Sistem Budidaya Modern - Sidat Sangkuriang',
      training: 'Pelatihan Online Budidaya Sidat - Sidat Sangkuriang',
      products: 'Produk Sidat Premium - Sidat Sangkuriang',
      education: 'Pusat Edukasi Budidaya Sidat - Sidat Sangkuriang',
      contact: 'Hubungi Kami - Sidat Sangkuriang',
      checkout: 'Checkout - Sidat Sangkuriang'
    },
    en: {
      home: 'Sidat Sangkuriang - Modern Eel Farming Innovation Indonesia',
      about: 'About Us - Sidat Sangkuriang',
      farming: 'Modern Farming System - Sidat Sangkuriang',
      training: 'Online Eel Farming Training - Sidat Sangkuriang',
      products: 'Premium Eel Products - Sidat Sangkuriang',
      education: 'Eel Farming Education Center - Sidat Sangkuriang',
      contact: 'Contact Us - Sidat Sangkuriang',
      checkout: 'Checkout - Sidat Sangkuriang'
    }
  };

  const defaultDescriptions = {
    id: {
      home: 'Pelopor budidaya sidat modern di Indonesia. Sistem budidaya canggih, pelatihan ahli, dan produk sidat premium berkualitas ekspor. Bergabunglah dengan revolusi akuakultur berkelanjutan.',
      about: 'Pelajari sejarah dan visi Sidat Sangkuriang dalam mengembangkan budidaya sidat modern berkelanjutan di Indonesia dengan teknologi terdepan.',
      farming: 'Sistem budidaya sidat modern dengan teknologi IoT, kontrol otomatis, dan monitoring 24/7. Tingkatkan produktivitas hingga 3x lipat.',
      training: 'Program pelatihan online budidaya sidat terlengkap dengan sertifikat resmi. Belajar dari ahli berpengalaman 20+ tahun.',
      products: 'Produk sidat segar dan olahan premium berkualitas ekspor. Tersedia unagi, kabayaki, sidat asap dengan standar internasional.',
      education: 'Pusat pembelajaran budidaya sidat dengan artikel, video tutorial, dan panduan praktis dari para ahli industri.',
      contact: 'Hubungi tim ahli Sidat Sangkuriang untuk konsultasi budidaya sidat, pelatihan, dan informasi produk. Layanan terpercaya 24/7.',
      checkout: 'Checkout aman untuk pembelian produk sidat dan pendaftaran pelatihan. Pembayaran mudah dengan berbagai metode.'
    },
    en: {
      home: 'Pioneer of modern eel farming in Indonesia. Advanced farming systems, expert training, and premium export-quality eel products. Join the sustainable aquaculture revolution.',
      about: 'Learn about Sidat Sangkuriang\'s history and vision in developing sustainable modern eel farming in Indonesia with cutting-edge technology.',
      farming: 'Modern eel farming system with IoT technology, automatic control, and 24/7 monitoring. Increase productivity up to 3x.',
      training: 'Most comprehensive online eel farming training program with official certification. Learn from experts with 20+ years experience.',
      products: 'Premium fresh and processed eel products with export quality. Available unagi, kabayaki, smoked eel with international standards.',
      education: 'Eel farming learning center with articles, video tutorials, and practical guides from industry experts.',
      contact: 'Contact Sidat Sangkuriang expert team for eel farming consultation, training, and product information. Trusted 24/7 service.',
      checkout: 'Secure checkout for eel product purchases and training registration. Easy payment with various methods.'
    }
  };

  const pageTitle = title || defaultTitles[language][page as keyof typeof defaultTitles['id']];
  const pageDescription = description || defaultDescriptions[language][page as keyof typeof defaultDescriptions['id']];

  React.useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', pageDescription);

    // Update language
    document.documentElement.lang = language;

  }, [pageTitle, pageDescription, language]);

  return null;
};

export default SEOHead;