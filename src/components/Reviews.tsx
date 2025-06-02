
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    city: 'Москва',
    rating: 5,
    text: 'Заказывала iPhone через ChiGo. Всё пришло быстро и в отличном состоянии. Цена была на 15% ниже, чем в российских магазинах!',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    verified: true
  },
  {
    id: 2,
    name: 'Дмитрий Козлов',
    city: 'Санкт-Петербург',
    rating: 5,
    text: 'Отличный сервис! Помогли найти редкие запчасти для автомобиля. Менеджер всё объяснил и проследил доставку.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    verified: true
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    city: 'Новосибирск',
    rating: 4,
    text: 'Заказывала косметику и одежду. Качество отличное, цены приятные. Единственное — доставка заняла 2 недели, но это нормально для Китая.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    verified: true
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-chigo-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-chigo-gray mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Более 50,000 довольных покупателей уже оценили качество нашего сервиса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-chigo-gray">{review.name}</h4>
                    {review.verified && (
                      <span className="ml-2 bg-chigo-green text-white text-xs px-2 py-0.5 rounded-full">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-chigo-red mb-2">50,000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chigo-red mb-2">4.8/5</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chigo-red mb-2">200,000+</div>
              <div className="text-gray-600">Успешных заказов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chigo-red mb-2">98%</div>
              <div className="text-gray-600">Повторных покупок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
