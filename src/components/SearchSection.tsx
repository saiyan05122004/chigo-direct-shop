
import { Search, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="bg-gradient-to-br from-white to-chigo-light py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-chigo-gray mb-4">
          Заказывайте из Китая <span className="text-chigo-red">легко</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Найдите любой товар или вставьте ссылку с китайского сайта. Мы поможем оформить заказ и доставить его в Россию.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск товаров или вставьте ссылку с Taobao, 1688, AliExpress..." 
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button type="submit" className="bg-chigo-red hover:bg-red-600 h-12 px-8 text-lg">
              <Search className="h-5 w-5 mr-2" />
              Найти
            </Button>
          </form>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-500">Популярные поисковые запросы:</span>
            {['iPhone', 'Кроссовки', 'Электроника', 'Одежда', 'Товары для дома'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => handleTagClick(tag)}
                className="bg-white hover:bg-chigo-light px-3 py-1 rounded-full text-sm text-chigo-gray border transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
