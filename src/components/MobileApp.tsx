
import { Smartphone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileApp = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-chigo-red to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Скачайте приложение ChiGo
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Заказывайте из Китая ещё проще с нашим мобильным приложением. 
              Уведомления о статусе заказа, быстрый поиск и персональные рекомендации.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-white text-chigo-red hover:bg-gray-100 h-12 px-6">
                <Smartphone className="h-5 w-5 mr-2" />
                App Store
              </Button>
              <Button className="bg-white text-chigo-red hover:bg-gray-100 h-12 px-6">
                <Smartphone className="h-5 w-5 mr-2" />
                Google Play
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-300 fill-current mr-1" />
                <span className="font-semibold">4.8</span>
                <span className="text-red-100 ml-1">рейтинг в App Store</span>
              </div>
              <div className="text-red-100">100K+ скачиваний</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
              <p className="text-red-100 mb-4">Отсканируйте QR-код для скачивания</p>
              <div className="w-24 h-24 bg-white rounded-lg mx-auto flex items-center justify-center">
                <div className="text-2xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
