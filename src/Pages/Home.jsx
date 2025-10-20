import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

function Home() {
  const featuredProducts = [
    { image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Pink Headphones', price: 29.99, stock: 10 }, // Pink headphones
    { image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Pastel Smart Watch', price: 49.99, stock: 3 }, // Pastel-colored smartwatch
    { image: 'https://images.pexels.com/photos/157675/pexels-photo-157675.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Cozy T-Shirt', price: 19.99, stock: 0 }, // Soft t-shirt
    { image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Light Blue Jeans', price: 39.99, stock: 8 }, // Light blue jeans
    { image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Retro Sunglasses', price: 59.99, stock: 2 }, // Retro sunglasses
    { image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Cute Tote Bag', price: 69.99, stock: 15 }, // Cute tote bag
    { image: 'https://images.pexels.com/photos/373874/pexels-photo-373874.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Colorful Speaker', price: 79.99, stock: 4 }, // Colorful Bluetooth speaker
    { image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Trendy Fitness Tracker', price: 89.99, stock: 7 }, // Fitness tracker
  ];

  return (
    <div className="pt-16 bg-gray-50">
      <HeroSection />
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold font-sans text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;