import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Left Side - Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src= {Logo} // replace with your logo path
            alt="MovieHit Logo"
            className="w-10 h-10 rounded-full border-2 border-red-500 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl font-bold tracking-wide text-white group-hover:text-red-400 transition-colors duration-300">
            Movie<span className="text-red-500">Hit</span>
          </span>
        </Link>

        {/* Right Side - Nav Links */}
        <div className="flex items-center space-x-8 pr-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/fav"
            className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-300"
          >
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
