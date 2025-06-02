
import { Search, Package, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Ищешь',
    description: 'Найди товар в нашем каталоге или вставь ссылку с китайского сайта',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Package,
    title: 'Заказываешь',
    description: 'Мы оформим заказ у поставщика и проследим за качеством',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Star,
    title: 'Получаешь',
    description: 'Доставим товар в любую точку России за 7-14 дней',
    color: 'bg-purple-50 text-purple-600'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-chigo-gray mb-4">Как это работает</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Простой процесс заказа в три шага. Никаких сложностей — только результат.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-chigo-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-chigo-red to-transparent transform -translate-x-8"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-chigo-gray mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-chigo-light rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-chigo-red mb-1">7-14 дней</div>
              <div className="text-sm text-gray-600">Среднее время доставки</div>
            </div>
            <div className="w-px h-12 bg-gray-300 mx-8"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chigo-red mb-1">98%</div>
              <div className="text-sm text-gray-600">Успешных доставок</div>
            </div>
            <div className="w-px h-12 bg-gray-300 mx-8"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chigo-red mb-1">24/7</div>
              <div className="text-sm text-gray-600">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
