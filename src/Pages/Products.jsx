import ProductCard from '../components/ProductCard';

function Products() {
  const products = {
    Electronics: [
      { image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Sleek Laptop', price: 999.99, stock: 5 }, // Modern laptop
      { image: 'https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Colorful Smartphone', price: 699.99, stock: 2 }, // Bright smartphone
    ],
    Fashion: [
      { image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Pastel T-Shirt', price: 19.99, stock: 20 }, // Pastel t-shirt
      { image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Ripped Jeans', price: 49.99, stock: 8 }, // Ripped jeans
    ],
    Accessories: [
      { image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Elegant Watch', price: 99.99, stock: 3 }, // Elegant watch
      { image: 'https://images.pexels.com/photos/1124456/pexels-photo-1124456.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Cute Sunglasses', price: 29.99, stock: 0 }, // Cute sunglasses
    ],
  };

  return (
    <div className="pt-16 container mx-auto py-10 bg-gray-50">
      <h1 className="text-4xl font-bold font-sans text-gray-800 mb-8">Our Products</h1>
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="text-2xl font-semibold font-sans text-gray-700 mb-5">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;