
import { Star, Package, Heart, Eye, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

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
            🔥 Огромный выбор товаров
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Более {products.length} товаров в различных категориях с молниеносной доставкой прямо из Китая. 
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
                  <span className="bg-gradient-to-r from-chigo-red to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {product.tag}
                  </span>
                  {product.discount && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.discount}
                    </span>
                  )}
                  {viewedProducts.includes(product.id) && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      Просмотрено
                    </span>
                  )}
                </div>
                
                <button 
                  onClick={(e) => toggleFavorite(product.id, e)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 shadow-lg"
                >
                  <Heart 
                    className={`h-5 w-5 transition-colors duration-300 ${
                      favorites.includes(product.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-400 hover:text-red-400'
                    }`} 
                  />
                </button>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-chigo-light text-chigo-blue px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-chigo-gray mb-3 line-clamp-2 text-lg leading-tight group-hover:text-chigo-red transition-colors duration-300">
                  {product.title}
                </h3>
                
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-chigo-red">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-chigo-red hover:bg-red-600 text-white text-sm py-2 h-auto transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="px-3 border-chigo-red text-chigo-red hover:bg-chigo-red hover:text-white transition-all duration-300"
                  >
                    <Package className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 text-lg">
            🎯 Нашли что искали? Или нужна помощь с выбором?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-chigo-blue hover:bg-blue-600 text-white px-8 py-3 text-lg">
              💬 Связаться с менеджером
            </Button>
            <Button variant="outline" className="border-2 border-chigo-red text-chigo-red hover:bg-chigo-red hover:text-white px-8 py-3 text-lg">
              📱 Скачать приложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
