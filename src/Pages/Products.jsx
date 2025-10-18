import ProductCard from '../components/ProductCard';

function Products() {
  const products = {
    Electronics: [
      { image: 'https://via.placeholder.com/300?text=Electronics1', name: 'Laptop', price: 999.99, stock: 5 },
      { image: 'https://via.placeholder.com/300?text=Electronics2', name: 'Smartphone', price: 699.99, stock: 2 },
    ],
    Fashion: [
      { image: 'https://via.placeholder.com/300?text=Fashion1', name: 'T-Shirt', price: 19.99, stock: 20 },
      { image: 'https://via.placeholder.com/300?text=Fashion2', name: 'Jeans', price: 49.99, stock: 8 },
    ],
    Accessories: [
      { image: 'https://via.placeholder.com/300?text=Accessories1', name: 'Watch', price: 99.99, stock: 3 },
      { image: 'https://via.placeholder.com/300?text=Accessories2', name: 'Sunglasses', price: 29.99, stock: 0 },
    ],
  };

  return (
    <div className="pt-16 container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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