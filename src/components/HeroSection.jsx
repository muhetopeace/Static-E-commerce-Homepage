import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-300 p-10 text-center">
      <h1 className="text-5xl font-bold font-sans text-gray-800 mb-4">Welcome to MyStore</h1>
      <p className="text-xl font-medium text-gray-700 mb-6">Discover amazing products at great prices!</p>
      <Link to="/products">
        <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-sans font-semibold hover:bg-blue-600 transition-colors">
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;