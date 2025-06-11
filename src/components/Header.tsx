
import { Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-chigo-red to-chigo-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-chigo-gray">ChiGo</span>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-chigo-gray hover:text-chigo-red transition-colors">
              Главная
            </Link>
            <Link to="/category/electronics" className="text-chigo-gray hover:text-chigo-red transition-colors">
              Электроника
            </Link>
            <Link to="/category/clothing" className="text-chigo-gray hover:text-chigo-red transition-colors">
              Одежда
            </Link>
            <Link to="/category/home" className="text-chigo-gray hover:text-chigo-red transition-colors">
              Дом и сад
            </Link>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-chigo-blue focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search icon - Visible on mobile */}
            <button className="lg:hidden p-2 text-chigo-gray hover:text-chigo-red transition-colors">
              <Search className="h-6 w-6" />
            </button>

            {/* Cart */}
            <CartDrawer />

            {/* User */}
            <button className="p-2 text-chigo-gray hover:text-chigo-red transition-colors">
              <User className="h-6 w-6" />
            </button>

            {/* Mobile menu */}
            <button className="md:hidden p-2 text-chigo-gray hover:text-chigo-red transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
