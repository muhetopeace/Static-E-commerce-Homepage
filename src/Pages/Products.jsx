import ProductCard from '../components/ProductCard';

function Products() {
  const products = {
    Electronics: [
      { image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', name: 'Laptop', price: 999.99, stock: 5 }, // Laptop from Unsplash
      { image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Smartphone', price: 699.99, stock: 2 }, // Smartphone
    ],
    Fashion: [
      { image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'T-Shirt', price: 19.99, stock: 20 }, // T-shirt
      { image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', name: 'Jeans', price: 49.99, stock: 8 }, // Jeans from Unsplash
    ],
    Accessories: [
      { image: 'https://images.pexels.com/photos/380745/pexels-photo-380745.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Watch', price: 99.99, stock: 3 }, // Watch
      { image: 'https://images.pexels.com/photos/297919/pexels-photo-297919.jpeg?auto=compress&cs=tinysrgb&w=300', name: 'Sunglasses', price: 29.99, stock: 0 }, // Sunglasses
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