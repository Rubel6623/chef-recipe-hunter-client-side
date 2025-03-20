import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FaUtensils, FaUser, FaSignOutAlt, FaSignInAlt, FaShoppingBag, FaHome, FaUserPlus, FaBlog } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <FaUtensils className="text-amber-300 text-2xl mr-2" />
            <Link className="text-white font-bold text-xl lg:text-2xl" to="/">
              Chef Hut
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-amber-200 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors" 
              to="/"
            >
              <FaHome className="mr-1" /> Home
            </Link>

            <Link 
              className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors" 
              to="/orders"
            >
              <FaShoppingBag className="mr-1" /> Orders
            </Link>

            <Link 
              className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors" 
              to="/blog"
            >
              <FaBlog className="mr-1" /> Blogs
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <button 
                    className="flex items-center text-amber-100 hover:text-white"
                    title={user.displayName || "User Profile"}
                  >
                    {user.photoURL ? (
                      <img 
                        className="w-8 h-8 rounded-full border-2 border-amber-400" 
                        src={user.photoURL} 
                        alt={user.displayName}
                      />
                    ) : (
                      <FaUser className="w-6 h-6 rounded-full" />
                    )}
                  </button>
                </div>
                
                <button
                  onClick={handleLogOut}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                >
                  <FaSignOutAlt className="mr-1" /> Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors" 
                  to="/register"
                >
                  <FaUserPlus className="mr-1" /> Register
                </Link>
                
                <Link 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors" 
                  to="/login"
                >
                  <FaSignInAlt className="mr-1" /> Login
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-800">
              <Link 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium"
                to="/"
                onClick={toggleMenu}
              >
                <FaHome className="inline mr-2" /> Home
              </Link>

              <Link 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium"
                to="/orders"
                onClick={toggleMenu}
              >
                <FaShoppingBag className="inline mr-2" /> Orders
              </Link>

              <Link 
                className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium"
                to="/blog"
                onClick={toggleMenu}
              >
                <FaBlog className="inline mr-2" /> Blogs
              </Link>

              {user ? (
                <>
                  <div className="flex items-center px-3 py-2">
                    {user.photoURL ? (
                      <img 
                        className="w-8 h-8 rounded-full border-2 border-amber-400 mr-2" 
                        src={user.photoURL} 
                        alt={user.displayName}
                      />
                    ) : (
                      <FaUser className="w-6 h-6 rounded-full mr-2" />
                    )}
                    <span className="text-white text-sm truncate">
                      {user.displayName || "User"}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => {
                      handleLogOut();
                      toggleMenu();
                    }}
                    className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    <FaSignOutAlt className="inline mr-2" /> Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium"
                    to="/register"
                    onClick={toggleMenu}
                  >
                    <FaUserPlus className="inline mr-2" /> Register
                  </Link>
                  
                  <Link 
                    className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium"
                    to="/login"
                    onClick={toggleMenu}
                  >
                    <FaSignInAlt className="inline mr-2" /> Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
