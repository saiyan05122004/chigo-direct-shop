
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import Categories from '@/components/Categories';
import RecommendedProducts from '@/components/RecommendedProducts';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SearchSection />
      <Categories />
      <RecommendedProducts />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
