import React, { useState } from 'react';
import { Trash2, Plus, Minus, CreditCard, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface CheckoutPageProps {
  onPageChange: (page: string) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onPageChange }) => {
  const { t, language } = useLanguage();
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const currency = language === 'id' ? 'idr' : 'usd';
  const currencySymbol = currency === 'idr' ? 'Rp' : '$';
  const totalPrice = getTotalPrice(currency);

  const formatPrice = (price: { idr: number; usd: number }, quantity: number = 1) => {
    const amount = price[currency] * quantity;
    return `${currencySymbol} ${amount.toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with your payment gateway
    alert(t('checkout.purchaseSuccess'));
    
    clearCart();
    onPageChange('home');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-16 shadow-xl border border-gray-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t('common.cart')}
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              {t('checkout.emptyCart')}
            </p>
            <button
              onClick={() => onPageChange('products')}
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t('checkout.viewProducts')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-3">
            {t('checkout.badge')}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {t('checkout.title')}
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">{t('checkout.orderItems')}</h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name[language]}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-base">
                      {item.name[language]}
                    </h3>
                    <p className="text-teal-600 font-medium text-sm">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="flex justify-between items-center text-xl lg:text-2xl font-bold">
                <span>{t('common.total')}:</span>
                <span className="text-teal-600">
                  {currencySymbol} {totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">{t('checkout.paymentInfo')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">{t('checkout.customerData')}</h3>
                
                <input
                  type="text"
                  placeholder={t('checkout.fullName')}
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm"
                  required
                />
                
                <input
                  type="email"
                  placeholder={t('checkout.email')}
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm"
                  required
                />
                
                <input
                  type="tel"
                  placeholder={t('checkout.phone')}
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm"
                  required
                />
                
                <textarea
                  placeholder={t('checkout.address')}
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-sm"
                  rows={3}
                  required
                />
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">{t('checkout.paymentMethod')}</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-teal-300 transition-all">
                    <input
                      type="radio"
                      name="payment"
                      value="stripe"
                      checked={paymentMethod === 'stripe'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-teal-600 w-4 h-4"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-sm">{t('checkout.creditCard')}</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-teal-300 transition-all">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-teal-600 w-4 h-4"
                    />
                    <div className="w-5 h-5 bg-teal-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">B</span>
                    </div>
                    <span className="font-medium text-sm">{t('checkout.bankTransfer')}</span>
                  </label>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-teal-50 p-4 rounded-lg flex items-center space-x-3 border border-teal-100">
                <Lock className="w-5 h-5 text-teal-600" />
                <p className="text-gray-700 font-medium text-sm">
                  {t('checkout.securityNotice')}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('checkout.payNow')} - {currencySymbol} {totalPrice.toLocaleString()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;