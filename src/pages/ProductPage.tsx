
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Моковые данные товаров (в реальном приложении это было бы из API)
const products = [
  {
    id: 1,
    title: 'Беспроводные наушники Apple AirPods Pro',
    originalPrice: '¥1,999',
    price: '₽15,900',
    rating: 4.8,
    reviews: 1234,
    images: [
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop'
    ],
    description: 'Профессиональные беспроводные наушники с активным шумоподавлением. Высокое качество звука, удобная посадка, долгое время работы.',
    features: [
      'Активное шумоподавление',
      'Время работы до 30 часов',
      'Быстрая зарядка',
      'Влагозащита IPX4',
      'Пространственный звук'
    ],
    category: 'Электроника'
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) || products[0];

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
                  src={product.images[0]} 
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${product.title} ${index + 1}`}
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
                    Скидка 20%
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-chigo-gray mb-3">Особенности:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-chigo-green rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
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
