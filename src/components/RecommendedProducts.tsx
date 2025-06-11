import { Star, Package, Heart, Eye, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Беспроводные наушники Apple AirPods Pro',
    originalPrice: '¥1,999',
    price: '₽15,900',
    rating: 4.8,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop',
    tag: 'Хит продаж',
    discount: '-20%',
    category: 'Электроника'
  },
  {
    id: 2,
    title: 'Смартфон Xiaomi Redmi Note 13 Pro',
    originalPrice: '¥1,299',
    price: '₽18,500',
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    tag: 'Новинка',
    discount: '-15%',
    category: 'Электроника'
  },
  {
    id: 3,
    title: 'Мужские кроссовки Nike Air Max',
    originalPrice: '¥899',
    price: '₽8,900',
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    tag: 'Скидка -30%',
    discount: '-30%',
    category: 'Одежда'
  },
  {
    id: 4,
    title: 'Умные часы Apple Watch Series 9',
    originalPrice: '¥2,799',
    price: '₽28,900',
    rating: 4.9,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
    tag: 'Топ недели',
    discount: '-10%',
    category: 'Электроника'
  },
  {
    id: 5,
    title: 'Wireless Gaming Mouse RGB подсветка',
    originalPrice: '¥299',
    price: '₽2,890',
    rating: 4.5,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    tag: 'Геймерам',
    discount: '-25%',
    category: 'Электроника'
  },
  {
    id: 6,
    title: 'Женская куртка зимняя пуховик',
    originalPrice: '¥599',
    price: '₽5,900',
    rating: 4.4,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    tag: 'Зимняя коллекция',
    discount: '-40%',
    category: 'Одежда'
  },
  {
    id: 7,
    title: 'Механическая клавиатура RGB',
    originalPrice: '¥799',
    price: '₽7,900',
    rating: 4.8,
    reviews: 1123,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    tag: 'Для работы',
    discount: '-20%',
    category: 'Электроника'
  },
  {
    id: 8,
    title: 'Портативная Bluetooth колонка',
    originalPrice: '¥399',
    price: '₽3,900',
    rating: 4.6,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    tag: 'Музыка везде',
    discount: '-35%',
    category: 'Электроника'
  },
  {
    id: 9,
    title: 'Рюкзак для ноутбука водонепроницаемый',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.3,
    reviews: 334,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    tag: 'Стильно',
    discount: '-50%',
    category: 'Аксессуары'
  },
  {
    id: 10,
    title: 'LED лампа настольная с USB',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.5,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tag: 'Освещение',
    discount: '-30%',
    category: 'Дом и сад'
  },
  {
    id: 11,
    title: 'Умная лампочка Wi-Fi RGB',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.7,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Умный дом',
    discount: '-45%',
    category: 'Электроника'
  },
  {
    id: 12,
    title: 'Чехол для iPhone защитный',
    originalPrice: '¥59',
    price: '₽590',
    rating: 4.2,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&h=400&fit=crop',
    tag: 'Защита',
    discount: '-20%',
    category: 'Аксессуары'
  }
];

const RecommendedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewedProducts, setViewedProducts] = useState<number[]>([]);

  const toggleFavorite = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const markAsViewed = (productId: number) => {
    if (!viewedProducts.includes(productId)) {
      setViewedProducts(prev => [...prev, productId]);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Логика добавления в корзину
  };

  return (
    <section className="py-20 bg-gradient-to-br from-chigo-light via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-chigo-gray mb-6 bg-gradient-to-r from-chigo-red to-purple-600 bg-clip-text text-transparent">
            🔥 Горячие предложения
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Тысячи проверенных товаров с молниеносной доставкой прямо из Китая. 
            Гарантия качества и лучшие цены!
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              ✅ Бесплатная доставка от ₽2,000
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🚚 Доставка 7-14 дней
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              🔒 Гарантия возврата
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => markAsViewed(product.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-gradient-to-r from-chigo-red to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {product.tag}
                  </span>
                  {product.discount && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.discount}
                    </span>
                  )}
                </div>
                
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button 
                    onClick={(e) => toggleFavorite(product.id, e)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      favorites.includes(product.id) 
                        ? 'bg-red-500 text-white shadow-lg' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <div className="bg-white/80 text-gray-600 p-2 rounded-full">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-chigo-gray mb-3 line-clamp-2 leading-tight text-lg group-hover:text-chigo-red transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm font-medium text-gray-700 ml-2">{product.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({product.reviews.toLocaleString()})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-chigo-red">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Экономия</div>
                    <div className="text-sm font-bold text-green-600">
                      ₽{Math.floor(Math.random() * 5000 + 1000).toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-chigo-red to-pink-500 hover:from-chigo-red hover:to-red-600 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="px-4 border-2 border-chigo-red text-chigo-red hover:bg-chigo-red hover:text-white rounded-xl transition-all duration-300"
                  >
                    <Package className="h-4 w-4" />
                  </Button>
                </div>
                
                {viewedProducts.includes(product.id) && (
                  <div className="mt-3 text-xs text-blue-600 font-medium">
                    👁️ Вы смотрели этот товар
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/search">
            <Button 
              variant="outline" 
              className="border-2 border-chigo-red text-chigo-red hover:bg-chigo-red hover:text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Показать ещё больше товаров →
            </Button>
          </Link>
          <p className="text-gray-500 mt-4">Более 10 миллионов товаров ждут вас!</p>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
