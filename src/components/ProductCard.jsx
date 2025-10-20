function ProductCard({ image, name, price, stock }) {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    alert(`Added ${name} to cart!`);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {stock < 5 && (
          <span className="absolute top-2 right-2 bg-pink-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Low Stock: {stock}
          </span>
        )}
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-3" />
        <h3 className="text-lg font-semibold font-sans text-gray-800">{name}</h3>
        <p className="text-gray-600 font-medium">${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={`w-full mt-3 px-4 py-2 rounded-md text-white font-sans ${
            stock === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-400 hover:bg-blue-600 transition-colors'
          }`}
          disabled={stock === 0}
        >
          {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </>
  );
}

export default ProductCard;