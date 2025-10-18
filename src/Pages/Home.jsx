import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

function Home() {
  const featuredProducts = [
    { image: 'https://via.placeholder.com/300?text=Product1', name: 'Product 1', price: 29.99, stock: 10 },
    { image: 'https://via.placeholder.com/300?text=Product2', name: 'Product 2', price: 49.99, stock: 3 },
    { image: 'https://via.placeholder.com/300?text=Product3', name: 'Product 3', price: 19.99, stock: 0 },
    { image: 'https://via.placeholder.com/300?text=Product4', name: 'Product 4', price: 39.99, stock: 8 },
    { image: 'https://via.placeholder.com/300?text=Product5', name: 'Product 5', price: 59.99, stock: 2 },
    { image: 'https://via.placeholder.com/300?text=Product6', name: 'Product 6', price: 69.99, stock: 15 },
    { image: 'https://via.placeholder.com/300?text=Product7', name: 'Product 7', price: 79.99, stock: 4 },
    { image: 'https://via.placeholder.com/300?text=Product8', name: 'Product 8', price: 89.99, stock: 7 },
  ];

  return (
    <div className="pt-16">
      <HeroSection />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;