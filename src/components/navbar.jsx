import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-700 text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold font-sans">MyStore</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-200 transition-colors">Products</Link></li>
          <li><Link to="/about" className="hover:text-blue-200 transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;