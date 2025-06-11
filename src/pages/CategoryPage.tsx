
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Расширенные данные товаров по категориям
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
    },
    {
      id: 5,
      title: 'Wireless Gaming Mouse RGB подсветка',
      price: '₽2,890',
      rating: 4.5,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      category: 'Электроника'
    },
    {
      id: 7,
      title: 'Механическая клавиатура RGB',
      price: '₽7,900',
      rating: 4.8,
      reviews: 1123,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
      category: 'Электроника'
    },
    {
      id: 8,
      title: 'Портативная Bluetooth колонка',
      price: '₽3,900',
      rating: 4.6,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      category: 'Электроника'
    },
    {
      id: 11,
      title: 'Умная лампочка Wi-Fi RGB',
      price: '₽990',
      rating: 4.7,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Электроника'
    },
    {
      id: 13,
      title: 'Планшет Samsung Galaxy Tab A8',
      price: '₽16,900',
      rating: 4.4,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
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
    },
    {
      id: 16,
      title: 'Мужская футболка хлопок базовая',
      price: '₽890',
      rating: 4.2,
      reviews: 1456,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      category: 'Одежда'
    },
    {
      id: 17,
      title: 'Женские джинсы скинни высокая посадка',
      price: '₽2,990',
      rating: 4.5,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
      category: 'Одежда'
    },
    {
      id: 18,
      title: 'Мужской свитер шерстяной вязаный',
      price: '₽3,990',
      rating: 4.6,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
      category: 'Одежда'
    },
    {
      id: 19,
      title: 'Женское платье летнее легкое',
      price: '₽1,990',
      rating: 4.3,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
      category: 'Одежда'
    }
  ],
  'home': [
    {
      id: 10,
      title: 'LED лампа настольная с USB',
      price: '₽1,490',
      rating: 4.5,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      category: 'Дом и сад'
    },
    {
      id: 22,
      title: 'Набор кухонных ножей из стали',
      price: '₽2,990',
      rating: 4.7,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop',
      category: 'Дом и сад'
    },
    {
      id: 23,
      title: 'Постельное белье сатин двуспальное',
      price: '₽1,990',
      rating: 4.4,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop',
      category: 'Дом и сад'
    },
    {
      id: 24,
      title: 'Ковер пушистый для гостиной',
      price: '₽3,990',
      rating: 4.3,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
      category: 'Дом и сад'
    },
    {
      id: 25,
      title: 'Увлажнитель воздуха ультразвуковой',
      price: '₽2,490',
      rating: 4.6,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Дом и сад'
    }
  ],
  'beauty': [
    {
      id: 31,
      title: 'Набор кистей для макияжа 12 шт',
      price: '₽990',
      rating: 4.5,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      category: 'Красота'
    },
    {
      id: 32,
      title: 'Крем для лица увлажняющий',
      price: '₽1,490',
      rating: 4.4,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      category: 'Красота'
    },
    {
      id: 33,
      title: 'Электрическая зубная щетка',
      price: '₽1,990',
      rating: 4.7,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop',
      category: 'Красота'
    }
  ],
  'sport': [
    {
      id: 35,
      title: 'Йога коврик противоскользящий',
      price: '₽990',
      rating: 4.6,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      category: 'Спорт'
    },
    {
      id: 36,
      title: 'Гантели разборные 20 кг',
      price: '₽3,990',
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      category: 'Спорт'
    },
    {
      id: 37,
      title: 'Велосипедный шлем защитный',
      price: '₽1,490',
      rating: 4.4,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Спорт'
    }
  ],
  'auto': [
    {
      id: 39,
      title: 'Автомобильное зарядное устройство USB',
      price: '₽490',
      rating: 4.5,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Автотовары'
    },
    {
      id: 40,
      title: 'Коврики автомобильные резиновые',
      price: '₽990',
      rating: 4.4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      category: 'Автотовары'
    }
  ],
  'toys': [
    {
      id: 42,
      title: 'Конструктор LEGO совместимый 500 деталей',
      price: '₽1,990',
      rating: 4.7,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Игрушки'
    },
    {
      id: 43,
      title: 'Радиоуправляемая машинка',
      price: '₽1,490',
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Игрушки'
    }
  ],
  'tools': [
    {
      id: 45,
      title: 'Набор отверток 24 предмета',
      price: '₽790',
      rating: 4.4,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Инструменты'
    },
    {
      id: 46,
      title: 'Дрель аккумуляторная 18V',
      price: '₽2,990',
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      category: 'Инструменты'
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
