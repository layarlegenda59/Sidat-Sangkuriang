import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { t, language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    id: {
      greeting: 'Halo! Saya Robot Pintar Sidat Sangkuriang. Siap membantu pertanyaan tentang budidaya sidat, pelatihan, produk, atau informasi lainnya. Silakan tanya!',
      
      // Tentang Perusahaan
      about: 'Sidat Sangkuriang adalah perusahaan budidaya sidat terdepan dengan pengalaman 10+ tahun, telah melatih 2000+ petani, dan memiliki tingkat keberhasilan 98%. Kami berlokasi di Jalan Sangkuriang, Kabupaten Bandung Barat, Jawa Barat.',
      
      // Sistem Budidaya
      farming: 'Sistem budidaya kami menggunakan teknologi IoT modern dengan: 1) Kontrol kualitas air otomatis, 2) Sistem aerasi canggih, 3) Monitoring suhu 24/7, 4) Biosecurity ketat, 5) Efisiensi air 90%, 6) Kapasitas kolam 10-50 m³, 7) Kepadatan optimal 2-3 kg/m³, 8) Waktu panen 8-12 bulan, 9) Survival rate 85-95%, 10) FCR 1.2-1.5, 11) ROI proyeksi 40-60%.',
      
      // Pelatihan
      training: 'Kami menawarkan 2 program pelatihan: 1) Pelatihan Dasar (6 minggu, Rp 750.000) untuk pemula, 2) Pelatihan Lanjutan (8 minggu, Rp 1.500.000) untuk sistem modern. Kurikulum meliputi: teori dasar, sistem kolam, nutrisi & pakan, kesehatan ikan, panen & pasca panen, pemasaran & bisnis. Sudah 1250+ siswa mengikuti pelatihan dasar dan 850+ siswa pelatihan lanjutan.',
      
      // Produk
      products: 'Produk kami: 1) Sidat Segar Grade A (Rp 150.000/kg), 2) Unagi Kabayaki Premium (Rp 285.000), 3) Sidat Asap Tradisional (Rp 225.000), 4) Sidat Hidup Export Quality (Rp 175.000), 5) Grilled Saba Fish Sauce (Rp 195.000). Semua produk tersertifikat halal.',
      
      // Edukasi
      education: 'Pusat edukasi kami menyediakan artikel dan video pembelajaran: 1) Panduan lengkap budidaya sidat untuk pemula, 2) Teknologi IoT dalam budidaya modern, 3) Nutrisi dan pakan optimal, 4) Video setup kolam modern, 5) Teknik pemberian pakan efektif, 6) Monitoring kualitas air harian.',
      
      // Kontak
      contact: 'Hubungi kami di: Alamat: Jalan Sangkuriang, Kabupaten Bandung Barat, Jawa Barat. Telepon: +62 22 5946 8888. Email: info@sidatsangkuriang.com. Jam operasional: Senin-Jumat 08:00-17:00 WIB, Sabtu 08:00-15:00 WIB. Tersedia konsultasi WhatsApp dan kunjungan lapangan.',
      
      // Harga & Investasi
      pricing: 'Investasi pelatihan: Dasar Rp 750.000 (6 minggu), Lanjutan Rp 1.500.000 (8 minggu). Harga produk: Sidat segar Rp 150.000-175.000/kg, Olahan Rp 195.000-285.000. ROI budidaya proyeksi 40-60% dengan waktu panen 8-12 bulan.',
      
      // Teknologi
      technology: 'Teknologi kami meliputi: Sistem IoT untuk monitoring otomatis, kontrol kualitas air real-time, aerasi canggih, sistem resirkulasi dengan efisiensi 90%, monitoring suhu 24/7, dan biosecurity ketat untuk mencegah penyakit.',
      
      default: 'Terima kasih atas pertanyaannya! Saya memiliki informasi lengkap tentang Sidat Sangkuriang. Silakan tanya tentang budidaya, pelatihan, produk, teknologi, harga, atau kontak kami. Untuk konsultasi mendalam, hubungi WhatsApp +62 22 5946 8888.'
    },
    en: {
      greeting: 'Hello! I\'m the Sidat Sangkuriang Smart Robot. I\'m ready to help you with questions about eel farming, training, products, or any information about our company. Feel free to ask anything!',
      
      // About Company
      about: 'Sidat Sangkuriang is a leading eel farming company with 10+ years experience, trained 2000+ farmers, and achieved 98% success rate. We are located at Jalan Sangkuriang, West Bandung Regency, West Java.',
      
      // Farming System
      farming: 'Our farming system uses modern IoT technology with: 1) Automatic water quality control, 2) Advanced aeration systems, 3) 24/7 temperature monitoring, 4) Strict biosecurity, 5) 90% water efficiency, 6) Pond capacity 10-50 m³, 7) Optimal density 2-3 kg/m³, 8) Harvest time 8-12 months, 9) Survival rate 85-95%, 10) FCR 1.2-1.5, 11) Projected ROI 40-60%.',
      
      // Training
      training: 'We offer 2 training programs: 1) Basic Training (6 weeks, $50) for beginners, 2) Advanced Training (8 weeks, $100) for modern systems. Curriculum includes: basic theory, pond systems, nutrition & feed, fish health, harvest & post-harvest, marketing & business. 1250+ students completed basic training and 850+ advanced training.',
      
      // Products
      products: 'Our products: 1) Grade A Fresh Eel ($10/kg), 2) Premium Unagi Kabayaki ($19), 3) Traditional Smoked Eel ($15), 4) Live Eel Export Quality ($12), 5) Grilled Saba Fish Sauce ($13). All products are halal certified.',
      
      // Education
      education: 'Our education center provides articles and learning videos: 1) Complete guide to eel farming for beginners, 2) IoT technology in modern farming, 3) Optimal nutrition and feed, 4) Modern pond setup videos, 5) Effective feeding techniques, 6) Daily water quality monitoring.',
      
      // Contact
      contact: 'Contact us at: Address: Jalan Sangkuriang, West Bandung Regency, West Java. Phone: +62 22 5946 8888. Email: info@sidatsangkuriang.com. Operating hours: Monday-Friday 08:00-17:00 WIB, Saturday 08:00-15:00 WIB. WhatsApp consultation and field visits available.',
      
      // Pricing & Investment
      pricing: 'Training investment: Basic $50 (6 weeks), Advanced $100 (8 weeks). Product prices: Fresh eel $10-12/kg, Processed $13-19. Farming ROI projection 40-60% with harvest time 8-12 months.',
      
      // Technology
      technology: 'Our technology includes: IoT systems for automatic monitoring, real-time water quality control, advanced aeration, recirculation system with 90% efficiency, 24/7 temperature monitoring, and strict biosecurity to prevent diseases.',
      
      default: 'Thank you for your question! I have comprehensive information about Sidat Sangkuriang. Please ask about farming, training, products, technology, pricing, or contact us. For in-depth consultation, contact WhatsApp +62 22 5946 8888.'
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const responses = botResponses[language];
    
    // Tentang perusahaan
    if (message.includes('tentang') || message.includes('about') || message.includes('perusahaan') || message.includes('company') || message.includes('sidat sangkuriang') || message.includes('sejarah') || message.includes('history')) {
      return responses.about;
    }
    // Sistem budidaya
    else if (message.includes('budidaya') || message.includes('farming') || message.includes('sistem') || message.includes('kolam') || message.includes('pond') || message.includes('iot') || message.includes('teknologi') || message.includes('technology')) {
      return responses.farming;
    }
    // Pelatihan
    else if (message.includes('pelatihan') || message.includes('training') || message.includes('kursus') || message.includes('course') || message.includes('belajar') || message.includes('learn') || message.includes('sertifikat') || message.includes('certificate')) {
      return responses.training;
    }
    // Produk
    else if (message.includes('produk') || message.includes('product') || message.includes('sidat') || message.includes('eel') || message.includes('unagi') || message.includes('kabayaki') || message.includes('segar') || message.includes('fresh') || message.includes('asap') || message.includes('smoked')) {
      return responses.products;
    }
    // Edukasi
    else if (message.includes('edukasi') || message.includes('education') || message.includes('artikel') || message.includes('article') || message.includes('video') || message.includes('panduan') || message.includes('guide') || message.includes('belajar') || message.includes('learning')) {
      return responses.education;
    }
    // Kontak
    else if (message.includes('kontak') || message.includes('contact') || message.includes('alamat') || message.includes('address') || message.includes('telepon') || message.includes('phone') || message.includes('email') || message.includes('whatsapp') || message.includes('lokasi') || message.includes('location')) {
      return responses.contact;
    }
    // Harga & Investasi
    else if (message.includes('harga') || message.includes('price') || message.includes('biaya') || message.includes('cost') || message.includes('investasi') || message.includes('investment') || message.includes('roi') || message.includes('untung') || message.includes('profit') || message.includes('modal') || message.includes('capital')) {
      return responses.pricing;
    }
    // Teknologi khusus
    else if (message.includes('teknologi') || message.includes('technology') || message.includes('iot') || message.includes('monitoring') || message.includes('otomatis') || message.includes('automatic') || message.includes('sensor') || message.includes('digital')) {
      return responses.technology;
    }
    // Default response
    else {
      return responses.default;
    }
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const greeting: Message = {
        id: '0',
        text: botResponses[language].greeting,
        isBot: true,
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <img 
           src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/chat%20bot%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2NoYXQgYm90IDIucG5nIiwiaWF0IjoxNzU0MzU0ODY0LCJleHAiOjE3ODU4OTA4NjR9.xWNiJzEnOEQWxcsArOrRkCuuahRK4fK5ttacDRgmCDs"
           alt="Chat Assistant" 
           onClick={openChat}
           className="fixed bottom-6 right-6 w-20 h-20 cursor-pointer transition-all duration-300 hover:scale-110 z-50"
         />
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg mb-0">{t('chat.title')}</h3>
              <p className="text-red-100 text-xs mt-0">Online • Siap membantu</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-200 p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-4 rounded-2xl shadow-sm ${
                    message.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-gradient-to-r from-red-400 to-red-500 text-white'
                  }`}
                >
                  <p className={`text-sm ${message.isBot ? 'text-gray-800' : 'text-white'}`}>{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-5 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t('chat.placeholder')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
              />
              <img
                src="https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/bot%20saja.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2JvdCBzYWphLnBuZyIsImlhdCI6MTc1NDM1NTEzNCwiZXhwIjoxNzg1ODkxMTM0fQ._CFqvglUYkceFwSLTCubbF10Hn_bUSPrgl5yMMP1318"
                alt="Send"
                onClick={sendMessage}
                className="w-10 h-10 object-contain object-center cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;