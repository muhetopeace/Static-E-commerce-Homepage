import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="bg-blue-200 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyStore</h1>
      <p className="text-xl mb-4">Discover amazing products at great prices!</p>
      <Link to="/products">
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;