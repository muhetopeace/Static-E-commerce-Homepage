import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

function Home() {
  const featuredProducts = [
    { image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Wireless Headphones', price: 29.99, stock: 10 }, // Headphones (electronics accessory)
    { image: 'https://images.pexels.com/photos/394372/pexels-photo-394372.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Smart Watch', price: 49.99, stock: 3 }, // Watch
    { image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Cotton T-Shirt', price: 19.99, stock: 0 }, // T-shirt
    { image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Designer Jeans', price: 39.99, stock: 8 }, // Jeans (close-up)
    { image: 'https://images.pexels.com/photos/909898/pexels-photo-909898.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Sunglasses', price: 59.99, stock: 2 }, // Sunglasses
    { image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Leather Bag', price: 69.99, stock: 15 }, // Fashion bag
    { image: 'https://images.pexels.com/photos/909958/pexels-photo-909958.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Bluetooth Speaker', price: 79.99, stock: 4 }, // Speaker
    { image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Fitness Tracker', price: 89.99, stock: 7 }, // Fitness gadget
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