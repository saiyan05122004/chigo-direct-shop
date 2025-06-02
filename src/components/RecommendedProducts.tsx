
import { Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    title: 'Беспроводные наушники Apple AirPods Pro',
    originalPrice: '¥1,999',
    price: '₽15,900',
    rating: 4.8,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop',
    tag: 'Хит продаж'
  },
  {
    id: 2,
    title: 'Смартфон Xiaomi Redmi Note 13 Pro',
    originalPrice: '¥1,299',
    price: '₽18,500',
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
    tag: 'Новинка'
  },
  {
    id: 3,
    title: 'Мужские кроссовки Nike Air Max',
    originalPrice: '¥899',
    price: '₽8,900',
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    tag: 'Скидка -30%'
  },
  {
    id: 4,
    title: 'Умные часы Apple Watch Series 9',
    originalPrice: '¥2,799',
    price: '₽28,900',
    rating: 4.9,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop',
    tag: 'Топ недели'
  }
];

const RecommendedProducts = () => {
  return (
    <section className="py-16 bg-chigo-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-chigo-gray mb-4">Рекомендуемые товары</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Лучшие предложения недели с проверенными отзывами и быстрой доставкой
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-chigo-red text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.tag}
                </span>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-chigo-gray mb-2 line-clamp-2 leading-tight">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-chigo-red">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-chigo-red hover:bg-red-600 text-white">
                  <Package className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-chigo-red text-chigo-red hover:bg-chigo-red hover:text-white">
            Показать больше товаров
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
