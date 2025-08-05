import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'id' 
      ? 'Pesan terkirim! Tim kami akan segera menghubungi Anda.' 
      : 'Message sent! Our team will contact you shortly.'
    );
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: { id: 'Alamat Kantor', en: 'Office Address' },
      content: { 
        id: 'Jalan Sangkuriang - Kabupaten Bandung Barat - Jawa Barat', 
        en: 'Jalan Sangkuriang - West Bandung Regency - West Java' 
      }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: { id: 'Telepon', en: 'Phone' },
      content: { id: '+62 22 5946 8888', en: '+62 22 5946 8888' }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: { id: 'Email', en: 'Email' },
      content: { id: 'info@sidatsangkuriang.com', en: 'info@sidatsangkuriang.com' }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: { id: 'Jam Operasional', en: 'Operating Hours' },
      content: { 
        id: 'Senin - Jumat: 08:00 - 17:00 WIB\nSabtu: 08:00 - 15:00 WIB', 
        en: 'Monday - Friday: 08:00 - 17:00 WIB\nSaturday: 08:00 - 15:00 WIB' 
      }
    }
  ];

  const quickActions = [
    {
      title: { id: 'WhatsApp Konsultasi', en: 'WhatsApp Consultation' },
      description: { id: 'Chat langsung dengan ahli kami', en: 'Chat directly with our experts' },
      action: { id: 'Chat Sekarang', en: 'Chat Now' },
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: { id: 'Kunjungan Lapangan', en: 'Field Visit' },
      description: { id: 'Jadwalkan kunjungan ke fasilitas kami', en: 'Schedule a visit to our facility' },
      action: { id: 'Jadwalkan', en: 'Schedule' },
      icon: <MapPin className="w-6 h-6" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
              {t('contact.form.title')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                
                <input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                
                <input
                  type="text"
                  placeholder={t('contact.form.subject')}
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <textarea
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={6}
                required
              />
              
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-base transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 mr-2" />
                {t('contact.form.send')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-6">
                {t('contact.office')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
                      {React.cloneElement(info.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        {info.title[language]}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line text-sm">
                        {info.content[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-6">
                {language === 'id' ? 'Aksi Cepat' : 'Quick Actions'}
              </h3>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full ${action.color} text-white p-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
                  >
                    <div className="flex items-center space-x-3">
                      {React.cloneElement(action.icon, { className: "w-5 h-5" })}
                      <div className="text-left">
                        <div className="font-semibold">{action.title[language]}</div>
                        <div className="text-sm opacity-90">{action.description[language]}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-6">
                {language === 'id' ? 'Lokasi Kami' : 'Our Location'}
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d107.5!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c2e8b0c4a1%3A0x1234567890abcdef!2sSangkuriang%2C%20Cimahi%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sidat Sangkuriang"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;