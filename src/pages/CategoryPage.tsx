
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Моковые данные товаров по категориям
const categoryProducts = {
  'electronics': [
    {
      id: 1,
      title: 'Беспроводные наушники Apple AirPods Pro',
      price: '₽15,900',
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop',
      category: 'Электроника'
    },
    {
      id: 2,
      title: 'Смартфон Xiaomi Redmi Note 13 Pro',
      price: '₽18,500',
      rating: 4.6,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      category: 'Электроника'
    },
    {
      id: 4,
      title: 'Умные часы Apple Watch Series 9',
      price: '₽28,900',
      rating: 4.9,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
      category: 'Электроника'
    }
  ],
  'clothing': [
    {
      id: 3,
      title: 'Мужские кроссовки Nike Air Max',
      price: '₽8,900',
      rating: 4.7,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      category: 'Одежда'
    },
    {
      id: 6,
      title: 'Женская куртка зимняя пуховик',
      price: '₽5,900',
      rating: 4.4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      category: 'Одежда'
    }
  ]
};

const categoryNames = {
  'electronics': 'Электроника',
  'clothing': 'Одежда',
  'auto': 'Автотовары',
  'home': 'Дом и сад',
  'beauty': 'Красота',
  'sport': 'Спорт',
  'toys': 'Игрушки',
  'tools': 'Инструменты'
};

const CategoryPage = () => {
  const { category } = useParams();
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];
  const categoryName = categoryNames[category as keyof typeof categoryNames] || 'Категория';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-chigo-blue hover:text-chigo-red mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад к главной
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-chigo-gray mb-4">{categoryName}</h1>
          <p className="text-gray-600">Найдено {products.length} товаров</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-chigo-gray mb-2 line-clamp-2">{product.title}</h3>
                  
                  <div className="flex items-center mb-3">
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
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-chigo-red">{product.price}</span>
                    <Button size="sm" className="bg-chigo-red hover:bg-red-600">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Товары в этой категории скоро появятся</h2>
            <p className="text-gray-500">Мы работаем над наполнением каталога</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
