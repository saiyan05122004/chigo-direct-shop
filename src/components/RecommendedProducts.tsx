import { Star, Package, Heart, Eye, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  // Электроника
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
    id: 13,
    title: 'Планшет Samsung Galaxy Tab A8',
    originalPrice: '¥1,599',
    price: '₽16,900',
    rating: 4.4,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    tag: 'Популярно',
    discount: '-18%',
    category: 'Электроника'
  },
  {
    id: 14,
    title: 'Веб-камера HD 1080p',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.3,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop',
    tag: 'Работа',
    discount: '-30%',
    category: 'Электроника'
  },
  {
    id: 15,
    title: 'Powerbank 20000mAh быстрая зарядка',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.6,
    reviews: 889,
    image: 'https://images.unsplash.com/photo-1609592062458-bb018a102d6d?w=400&h=400&fit=crop',
    tag: 'Must have',
    discount: '-40%',
    category: 'Электроника'
  },
  
  // Одежда
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
    id: 16,
    title: 'Мужская футболка хлопок базовая',
    originalPrice: '¥89',
    price: '₽890',
    rating: 4.2,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    tag: 'Базовый гардероб',
    discount: '-25%',
    category: 'Одежда'
  },
  {
    id: 17,
    title: 'Женские джинсы скинни высокая посадка',
    originalPrice: '¥299',
    price: '₽2,990',
    rating: 4.5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    tag: 'Тренд',
    discount: '-35%',
    category: 'Одежда'
  },
  {
    id: 18,
    title: 'Мужской свитер шерстяной вязаный',
    originalPrice: '¥399',
    price: '₽3,990',
    rating: 4.6,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    tag: 'Тепло',
    discount: '-28%',
    category: 'Одежда'
  },
  {
    id: 19,
    title: 'Женское платье летнее легкое',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.3,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
    tag: 'Лето',
    discount: '-45%',
    category: 'Одежда'
  },
  {
    id: 20,
    title: 'Мужские шорты спортивные',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.4,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
    tag: 'Спорт',
    discount: '-32%',
    category: 'Одежда'
  },
  {
    id: 21,
    title: 'Женская блузка офисная белая',
    originalPrice: '¥179',
    price: '₽1,790',
    rating: 4.1,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    tag: 'Офис',
    discount: '-22%',
    category: 'Одежда'
  },

  // Дом и сад
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
    id: 22,
    title: 'Набор кухонных ножей из стали',
    originalPrice: '¥299',
    price: '₽2,990',
    rating: 4.7,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop',
    tag: 'Кухня',
    discount: '-38%',
    category: 'Дом и сад'
  },
  {
    id: 23,
    title: 'Постельное белье сатин двуспальное',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.4,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop',
    tag: 'Комфорт',
    discount: '-42%',
    category: 'Дом и сад'
  },
  {
    id: 24,
    title: 'Ковер пушистый для гостиной',
    originalPrice: '¥399',
    price: '₽3,990',
    rating: 4.3,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
    tag: 'Уют',
    discount: '-35%',
    category: 'Дом и сад'
  },
  {
    id: 25,
    title: 'Увлажнитель воздуха ультразвуковой',
    originalPrice: '¥249',
    price: '₽2,490',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Здоровье',
    discount: '-28%',
    category: 'Дом и сад'
  },
  {
    id: 26,
    title: 'Набор полотенец махровых 6 шт',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.2,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tag: 'Качество',
    discount: '-40%',
    category: 'Дом и сад'
  },

  // Аксессуары
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
  },
  {
    id: 27,
    title: 'Кошелек мужской кожаный',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
    tag: 'Классика',
    discount: '-33%',
    category: 'Аксессуары'
  },
  {
    id: 28,
    title: 'Солнцезащитные очки унисекс',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.4,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    tag: 'Стиль',
    discount: '-27%',
    category: 'Аксессуары'
  },
  {
    id: 29,
    title: 'Женская сумка через плечо',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.3,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
    tag: 'Модно',
    discount: '-35%',
    category: 'Аксессуары'
  },
  {
    id: 30,
    title: 'Часы наручные спортивные',
    originalPrice: '¥299',
    price: '₽2,990',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    tag: 'Спорт',
    discount: '-25%',
    category: 'Аксессуары'
  },

  // Красота и здоровье
  {
    id: 31,
    title: 'Набор кистей для макияжа 12 шт',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.5,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    tag: 'Красота',
    discount: '-45%',
    category: 'Красота'
  },
  {
    id: 32,
    title: 'Крем для лица увлажняющий',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.4,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    tag: 'Уход',
    discount: '-38%',
    category: 'Красота'
  },
  {
    id: 33,
    title: 'Электрическая зубная щетка',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.7,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop',
    tag: 'Здоровье',
    discount: '-42%',
    category: 'Красота'
  },
  {
    id: 34,
    title: 'Маска для лица тканевая 10 шт',
    originalPrice: '¥79',
    price: '₽790',
    rating: 4.3,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    tag: 'Spa дома',
    discount: '-48%',
    category: 'Красота'
  },

  // Спорт и туризм
  {
    id: 35,
    title: 'Йога коврик противоскользящий',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    tag: 'Фитнес',
    discount: '-35%',
    category: 'Спорт'
  },
  {
    id: 36,
    title: 'Гантели разборные 20 кг',
    originalPrice: '¥399',
    price: '₽3,990',
    rating: 4.5,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    tag: 'Сила',
    discount: '-28%',
    category: 'Спорт'
  },
  {
    id: 37,
    title: 'Велосипедный шлем защитный',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.4,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Безопасность',
    discount: '-32%',
    category: 'Спорт'
  },
  {
    id: 38,
    title: 'Термос спортивный 1 литр',
    originalPrice: '¥79',
    price: '₽790',
    rating: 4.3,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop',
    tag: 'Активность',
    discount: '-40%',
    category: 'Спорт'
  },

  // Автотовары
  {
    id: 39,
    title: 'Автомобильное зарядное устройство USB',
    originalPrice: '¥49',
    price: '₽490',
    rating: 4.5,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'В дорогу',
    discount: '-38%',
    category: 'Автотовары'
  },
  {
    id: 40,
    title: 'Коврики автомобильные резиновые',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.4,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
    tag: 'Чистота',
    discount: '-35%',
    category: 'Автотовары'
  },
  {
    id: 41,
    title: 'Держатель для телефона в авто',
    originalPrice: '¥59',
    price: '₽590',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Удобство',
    discount: '-42%',
    category: 'Автотовары'
  },

  // Игрушки
  {
    id: 42,
    title: 'Конструктор LEGO совместимый 500 деталей',
    originalPrice: '¥199',
    price: '₽1,990',
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Развитие',
    discount: '-28%',
    category: 'Игрушки'
  },
  {
    id: 43,
    title: 'Радиоуправляемая машинка',
    originalPrice: '¥149',
    price: '₽1,490',
    rating: 4.5,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Веселье',
    discount: '-33%',
    category: 'Игрушки'
  },
  {
    id: 44,
    title: 'Мягкая игрушка медведь 50 см',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.8,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Милота',
    discount: '-45%',
    category: 'Игрушки'
  },

  // Инструменты
  {
    id: 45,
    title: 'Набор отверток 24 предмета',
    originalPrice: '¥79',
    price: '₽790',
    rating: 4.4,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Мастеру',
    discount: '-38%',
    category: 'Инструменты'
  },
  {
    id: 46,
    title: 'Дрель аккумуляторная 18V',
    originalPrice: '¥299',
    price: '₽2,990',
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Мощность',
    discount: '-25%',
    category: 'Инструменты'
  },
  {
    id: 47,
    title: 'Измерительная рулетка 5 метров',
    originalPrice: '¥39',
    price: '₽390',
    rating: 4.3,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Точность',
    discount: '-43%',
    category: 'Инструменты'
  },
  {
    id: 48,
    title: 'Ящик для инструментов пластиковый',
    originalPrice: '¥99',
    price: '₽990',
    rating: 4.2,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    tag: 'Порядок',
    discount: '-35%',
    category: 'Инструменты'
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
            🔥 Огромный выбор товаров
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Более 48 товаров в различных категориях с молниеносной доставкой прямо из Китая. 
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

</initial_code>
