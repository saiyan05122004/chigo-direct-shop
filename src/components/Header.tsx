
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-chigo-red">ChiGo</h1>
            <span className="text-sm text-chigo-gray hidden sm:block">Прямые поставки из Китая</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#categories" className="text-chigo-gray hover:text-chigo-red transition-colors">Категории</a>
            <a href="#how-it-works" className="text-chigo-gray hover:text-chigo-red transition-colors">Как это работает</a>
            <a href="#tracking" className="text-chigo-gray hover:text-chigo-red transition-colors">Отследить заказ</a>
            <a href="#contact" className="text-chigo-gray hover:text-chigo-red transition-colors">Поддержка</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">Войти</Button>
            <Button className="bg-chigo-red hover:bg-red-600">Регистрация</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
