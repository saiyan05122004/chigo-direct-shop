
import { useSearchParams } from 'react-router-dom';
import { Star, ShoppingCart, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Расширенные данные для поиска
const allProducts = [
  {
    id: 1,
    title: 'Беспроводные наушники Apple AirPods Pro',
    price: '₽15,900',
    rating: 4.8,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop',
    keywords: ['наушники', 'apple', 'airpods', 'беспроводные', 'электроника', 'музыка']
  },
  {
    id: 2,
    title: 'Смартфон Xiaomi Redmi Note 13 Pro',
    price: '₽18,500',
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    keywords: ['смартфон', 'xiaomi', 'redmi', 'телефон', 'электроника', 'мобильный']
  },
  {
    id: 3,
    title: 'Мужские кроссовки Nike Air Max',
    price: '₽8,900',
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    keywords: ['кроссовки', 'nike', 'обувь', 'спорт', 'мужские', 'бег']
  },
  {
    id: 4,
    title: 'Умные часы Apple Watch Series 9',
    price: '₽28,900',
    rating: 4.9,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
    keywords: ['часы', 'apple', 'watch', 'умные', 'фитнес', 'здоровье']
  },
  {
    id: 5,
    title: 'Wireless Gaming Mouse RGB подсветка',
    price: '₽2,890',
    rating: 4.5,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    keywords: ['мышь', 'gaming', 'игровая', 'rgb', 'компьютер', 'беспроводная']
  },
  {
    id: 6,
    title: 'Женская куртка зимняя пуховик',
    price: '₽5,900',
    rating: 4.4,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    keywords: ['куртка', 'пуховик', 'зимняя', 'женская', 'одежда', 'теплая']
  },
  {
    id: 7,
    title: 'Механическая клавиатура RGB',
    price: '₽7,900',
    rating: 4.8,
    reviews: 1123,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    keywords: ['клавиатура', 'механическая', 'rgb', 'игровая', 'компьютер']
  },
  {
    id: 8,
    title: 'Портативная Bluetooth колонка',
    price: '₽3,900',
    rating: 4.6,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    keywords: ['колонка', 'bluetooth', 'портативная', 'музыка', 'беспроводная']
  },
  {
    id: 16,
    title: 'Мужская футболка хлопок базовая',
    price: '₽890',
    rating: 4.2,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    keywords: ['футболка', 'мужская', 'хлопок', 'базовая', 'одежда', 'повседневная']
  },
  {
    id: 17,
    title: 'Женские джинсы скинни высокая посадка',
    price: '₽2,990',
    rating: 4.5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    keywords: ['джинсы', 'женские', 'скинни', 'высокая посадка', 'одежда']
  },
  {
    id: 22,
    title: 'Набор кухонных ножей из стали',
    price: '₽2,990',
    rating: 4.7,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop',
    keywords: ['ножи', 'кухонные', 'сталь', 'набор', 'дом', 'кухня']
  },
  {
    id: 31,
    title: 'Набор кистей для макияжа 12 шт',
    price: '₽990',
    rating: 4.5,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    keywords: ['кисти', 'макияж', 'красота', 'набор', 'косметика']
  },
  {
    id: 35,
    title: 'Йога коврик противоскользящий',
    price: '₽990',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    keywords: ['йога', 'коврик', 'фитнес', 'спорт', 'противоскользящий']
  },
  {
    id: 39,
    title: 'Автомобильное зарядное устройство USB',
    price: '₽490',
    rating: 4.5,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    keywords: ['зарядное', 'автомобильное', 'usb', 'авто', 'зарядка']
  },
  {
    id: 42,
    title: 'Конструктор LEGO совместимый 500 деталей',
    price: '₽1,990',
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    keywords: ['конструктор', 'lego', 'игрушка', 'детский', 'развивающий']
  },
  {
    id: 45,
    title: 'Набор отверток 24 предмета',
    price: '₽790',
    rating: 4.4,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    keywords: ['отвертки', 'инструменты', 'набор', 'ремонт', 'мастер']
  }
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  const filteredProducts = query 
    ? allProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.trim())}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-chigo-blue hover:text-chigo-red mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад к главной
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-chigo-gray mb-6">Поиск товаров</h1>
          
          <form onSubmit={handleSearch} className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Поиск товаров..." 
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button type="submit" className="bg-chigo-red hover:bg-red-600 h-12 px-8">
              Найти
            </Button>
          </form>

          {query && (
            <p className="text-gray-600">
              Результаты поиска по запросу "<span className="font-semibold">{query}</span>": найдено {filteredProducts.length} товаров
            </p>
          )}
        </div>

        {query ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">Ничего не найдено</h2>
              <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Введите поисковый запрос</h2>
            <p className="text-gray-500">Найдите любой товар из нашего каталога</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
