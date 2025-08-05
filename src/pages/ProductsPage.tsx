import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { Product } from '../contexts/CartContext';
import { useTranslation } from '../hooks/useTranslation';

interface ProductsPageProps {
  onPageChange: (page: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onPageChange }) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fresh' | 'processed'>('all');

  const products: Product[] = [
    {
      id: '1',
      name: { id: 'Sidat Segar Grade A', en: 'Grade A Fresh Eel' },
      price: { idr: 150000, usd: 10 },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/Terkenal-di-Jepang-Ini-X-Manfaat-Ikan-Sidat-bagi-Kesehatan.jpg.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL1RlcmtlbmFsLWRpLUplcGFuZy1JbmktWC1NYW5mYWF0LUlrYW4tU2lkYXQtYmFnaS1LZXNlaGF0YW4uanBnLndlYnAiLCJpYXQiOjE3NTQzNTY3NDgsImV4cCI6MTc4NTg5Mjc0OH0.O4dyM4Z6DWUBEDHYtwhlNO60QYFSO7luOUERXLQRAOw',
      category: 'fresh',
      description: { 
        id: 'Sidat segar kualitas premium langsung dari kolam budidaya terbaik', 
        en: 'Premium fresh eel directly from the best farming ponds' 
      }
    },
    {
      id: '2',
      name: { id: 'Unagi Kabayaki Premium', en: 'Premium Unagi Kabayaki' },
      price: { idr: 285000, usd: 19 },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/eel-sushi-rice_5_50.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2VlbC1zdXNoaS1yaWNlXzVfNTAuanBnIiwiaWF0IjoxNzU0MzU4MTI4LCJleHAiOjE3ODU4OTQxMjh9.zGr-rXZZG-T7zIelVjzu1o21LUf54NXC9plqHXuzVcQ',
      category: 'processed',
      description: { 
        id: 'Unagi kabayaki siap saji dengan cita rasa otentik Jepang', 
        en: 'Ready-to-eat unagi kabayaki with authentic Japanese flavor' 
      }
    },
    {
      id: '3',
      name: { id: 'Sidat Asap Tradisional', en: 'Traditional Smoked Eel' },
      price: { idr: 225000, usd: 15 },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/eel-fish-sushi-roll%20(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2VlbC1maXNoLXN1c2hpLXJvbGwgKDEpLmpwZyIsImlhdCI6MTc1NDM1OTEyNywiZXhwIjoxNzg1ODk1MTI3fQ.yfdxNL0C2-Lwzn2QAV31YZxQc6ybMAUAHIjoc3dfml0',
      category: 'processed',
      description: { 
        id: 'Sidat asap dengan proses tradisional dan rempah nusantara', 
        en: 'Smoked eel with traditional process and Indonesian spices' 
      }
    },
    {
      id: '4',
      name: { id: 'Sidat Hidup Export Quality', en: 'Live Eel Export Quality' },
      price: { idr: 175000, usd: 12 },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/eel.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2VlbC5qcGciLCJpYXQiOjE3NTQzNTc5MDAsImV4cCI6MTc4NTg5MzkwMH0.YMVMk7MjnY4bpUZ8susTXSbM3Zxd-flvrAGgxIFfX-M',
      category: 'fresh',
      description: { 
        id: 'Sidat hidup standar ekspor dengan kualitas internasional', 
        en: 'Live eel with export standard and international quality' 
      }
    },
    {
      id: '5',
      name: { id: 'Grilled Saba Fish Sauce', en: 'Grilled Saba Fish Sauce' },
      price: { idr: 195000, usd: 13 },
      image: 'https://rkfkxhfvldavnirarytg.supabase.co/storage/v1/object/sign/sidatsangkuriang/grilled-saba-fish-sauce_50.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81ZDE5M2Q1NS1kYTM5LTQ3YzQtOTUzNC00YTNlNzczMGZhOGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRhdHNhbmdrdXJpYW5nL2dyaWxsZWQtc2FiYS1maXNoLXNhdWNlXzUwLmpwZyIsImlhdCI6MTc1NDM1ODI3MSwiZXhwIjoxNzg1ODk0MjcxfQ.bs3SaCtopKuoe1mx2aqCjSAMCAXTx5M4b0n4j4Y-O6k',
      category: 'processed',
      description: { 
        id: 'Ikan saba panggang dengan saus spesial yang lezat', 
        en: 'Grilled saba fish with special delicious sauce' 
      }
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: { idr: number; usd: number }) => {
    const currency = language === 'id' ? 'idr' : 'usd';
    const amount = price[currency];
    const currencySymbol = currency === 'idr' ? 'Rp' : '$';
    
    return `${currencySymbol} ${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
            🐟 Produk Premium
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            {t('products.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
              }`}
            >
              {t('products.all')}
            </button>
            <button
              onClick={() => setSelectedCategory('fresh')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'fresh'
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
              }`}
            >
              {t('products.fresh')}
            </button>
            <button
              onClick={() => setSelectedCategory('processed')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'processed'
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg'
                  : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
              }`}
            >
              {t('products.processed')}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name[language]}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">4.8</span>
                  </div>
                </div>

              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name[language]}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description[language]}
                </p>
                <div className="space-y-3">
                  <div className="text-xl font-bold text-teal-600">
                    {formatPrice(product.price)}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t('products.addToCart')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('products.consultation.title')}
            </h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('products.consultation.desc')}
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t('products.consultation.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;