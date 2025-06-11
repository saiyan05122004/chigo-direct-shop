
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Импортируем данные товаров из отдельного файла
import { products } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  // Если товар не найден, показываем сообщение об ошибке
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Товар не найден</h1>
          <Link to="/" className="text-chigo-blue hover:text-chigo-red">
            Вернуться к каталогу
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-chigo-blue hover:text-chigo-red mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад к товарам
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Изображения товара */}
            <div>
              <div className="mb-4">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {/* Показываем одно и то же изображение в разных ракурсах (можно добавить разные изображения) */}
                {[1, 2, 3].map((index) => (
                  <img 
                    key={index}
                    src={product.image} 
                    alt={`${product.title} ${index}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Информация о товаре */}
            <div>
              <h1 className="text-3xl font-bold text-chigo-gray mb-4">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-lg font-medium text-gray-700 ml-2">{product.rating}</span>
                  <span className="text-gray-500 ml-1">({product.reviews.toLocaleString()} отзывов)</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-chigo-red">{product.price}</span>
                  <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.discount}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Высококачественный товар из категории "{product.category}". 
                Прямая поставка из Китая с гарантией качества и быстрой доставкой.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-chigo-gray mb-3">Особенности:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-chigo-green rounded-full mr-3"></span>
                    Высокое качество материалов
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-chigo-green rounded-full mr-3"></span>
                    Быстрая доставка 7-14 дней
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-chigo-green rounded-full mr-3"></span>
                    Гарантия возврата средств
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-chigo-green rounded-full mr-3"></span>
                    Поддержка 24/7
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 mb-6">
                <Button className="flex-1 bg-chigo-red hover:bg-red-600 text-white py-3 text-lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" className="px-6 border-2 border-chigo-red text-chigo-red hover:bg-chigo-red hover:text-white">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Truck className="h-4 w-4 mr-2 text-chigo-blue" />
                  Доставка 7-14 дней
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="h-4 w-4 mr-2 text-chigo-green" />
                  Гарантия качества
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
