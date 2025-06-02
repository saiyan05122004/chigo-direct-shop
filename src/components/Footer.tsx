
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-chigo-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-chigo-red mb-4">ChiGo</h3>
            <p className="text-gray-300 mb-4">
              Ваш надёжный помощник для заказов из Китая. Быстро, качественно, без переплат.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-chigo-red rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <span className="text-white font-bold">Т</span>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <span className="text-white font-bold">W</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Сервис</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-chigo-red transition-colors">Как заказать</a></li>
              <li><a href="#" className="hover:text-chigo-red transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-chigo-red transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-chigo-red transition-colors">Гарантии</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-chigo-red transition-colors">Электроника</a></li>
              <li><a href="#" className="hover:text-chigo-red transition-colors">Одежда и обувь</a></li>
              <li><a href="#" className="hover:text-chigo-red transition-colors">Автотовары</a></li>
              <li><a href="#" className="hover:text-chigo-red transition-colors">Дом и сад</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-chigo-red" />
                <span className="text-gray-300">+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-chigo-red" />
                <span className="text-gray-300">support@chigo.ru</span>
              </div>
              <div className="text-gray-300">
                <p>Telegram: @chigo_support</p>
                <p>WhatsApp: +7 (999) 123-45-67</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ChiGo. Все права защищены. Доставка товаров из Китая в Россию.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
