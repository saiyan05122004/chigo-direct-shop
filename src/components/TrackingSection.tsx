
import { Package, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TrackingSection = () => {
  return (
    <section id="tracking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-chigo-gray mb-4">Отследить заказ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Введите номер для отслеживания и узнайте актуальный статус вашего заказа
            </p>
          </div>
          
          <div className="bg-chigo-light rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Введите трек-номер заказа (например: CG123456789CN)" 
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button className="bg-chigo-blue hover:bg-blue-600 h-12 px-8 text-lg">
                <Search className="h-5 w-5 mr-2" />
                Отследить
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-chigo-green text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="font-semibold text-chigo-gray mb-1">Заказ оформлен</h4>
                <p className="text-sm text-gray-500">Ваш заказ принят в обработку</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-chigo-green text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="font-semibold text-chigo-gray mb-1">Товар найден</h4>
                <p className="text-sm text-gray-500">Связались с поставщиком</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  ⏳
                </div>
                <h4 className="font-semibold text-chigo-gray mb-1">В пути</h4>
                <p className="text-sm text-gray-500">Товар отправлен в Россию</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  📦
                </div>
                <h4 className="font-semibold text-chigo-gray mb-1">Доставка</h4>
                <p className="text-sm text-gray-500">Скоро будет у вас</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
