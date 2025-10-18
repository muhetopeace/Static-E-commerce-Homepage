function ProductCard({ image, name, price, stock }) {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    alert(`Added ${name} to cart!`);
  };

  return (
    <>
      <div className="bg-white p-4 rounded shadow-md relative">
        {stock < 5 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Low Stock: {stock}
          </span>
        )}
        <img src={image} alt={name} className="w-full h-48 object-cover mb-2" />
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">${price}</p>
        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 mt-2 rounded text-white ${
            stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
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