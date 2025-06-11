
import { Package, Smartphone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { icon: Smartphone, name: 'Электроника', count: '2.5M+', color: 'bg-blue-50 text-blue-600', slug: 'electronics' },
  { icon: Package, name: 'Одежда', count: '1.8M+', color: 'bg-purple-50 text-purple-600', slug: 'clothing' },
  { icon: Star, name: 'Автотовары', count: '920K+', color: 'bg-green-50 text-green-600', slug: 'auto' },
  { icon: Smartphone, name: 'Дом и сад', count: '1.2M+', color: 'bg-orange-50 text-orange-600', slug: 'home' },
  { icon: Package, name: 'Красота', count: '890K+', color: 'bg-pink-50 text-pink-600', slug: 'beauty' },
  { icon: Star, name: 'Спорт', count: '650K+', color: 'bg-indigo-50 text-indigo-600', slug: 'sport' },
  { icon: Smartphone, name: 'Игрушки', count: '1.1M+', color: 'bg-yellow-50 text-yellow-600', slug: 'toys' },
  { icon: Package, name: 'Инструменты', count: '480K+', color: 'bg-red-50 text-red-600', slug: 'tools' },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-chigo-gray mb-4">Популярные категории</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Миллионы товаров в различных категориях с доставкой напрямую из Китая
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.name}
              to={`/category/${category.slug}`}
              className="group cursor-pointer p-6 rounded-xl border border-gray-100 hover:border-chigo-red hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-chigo-gray mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} товаров</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
