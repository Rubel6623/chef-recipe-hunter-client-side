import React, { useState, useEffect } from "react";
import "./Home.css";
import ChefsCard from "../ChefsCard/ChefsCard";
import { FaArrowRight, FaUtensils, FaTruck, FaUsers, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
  // Hero section carousel data
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Discover Culinary Excellence",
      subtitle: "Experience authentic recipes from world-renowned chefs. Our platform connects you with the best culinary experts to bring unforgettable dining experiences to your home."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Master Chef Creations",
      subtitle: "Explore signature dishes from our talented chefs. Carefully crafted recipes with premium ingredients that will delight your taste buds."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Elevate Your Dining Experience",
      subtitle: "From traditional favorites to innovative cuisine, learn directly from professional chefs and take your culinary skills to the next level."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section With Carousel */}
      <div className="relative h-[90vh]">
        {/* Carousel container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ 
                backgroundImage: `url("${slide.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
              
              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white animate__animated animate__fadeInUp">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-amber-400">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="btn btn-primary px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg">
                        Find Your Chef
                      </button>
                      <button className="btn btn-outline btn-secondary px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg">
                        View Recipes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute inset-y-0 left-0 right-0 z-20 flex justify-between items-center px-4 sm:px-10">
          <button 
            onClick={prevSlide}
            className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all focus:outline-none"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all focus:outline-none"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-amber-500" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-16 bg-amber-50">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-amber-600">Our Premium Services</h2>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Service Card 1 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-5 sm:p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTruck className="text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-amber-800">Home Delivery</h3>
                <p className="text-gray-600 mb-4">Enjoy the fastest delivery service within the city area with our dedicated team.</p>
                <p className="text-amber-500 font-medium">100+ Delivery Experts</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-5 sm:p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-amber-800">Experienced Chefs</h3>
                <p className="text-gray-600 mb-4">Our highly skilled chefs bring years of culinary excellence to every dish they prepare.</p>
                <p className="text-amber-500 font-medium">50+ Award-Winning Chefs</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-5 sm:p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUtensils className="text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-amber-800">Delicious Menu</h3>
                <p className="text-gray-600 mb-4">Explore a vast array of delicious dishes from various cuisines around the world.</p>
                <p className="text-amber-500 font-medium">150+ Signature Dishes</p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-5 sm:p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-amber-800">Restaurant Booking</h3>
                <p className="text-gray-600 mb-4">Reserve your spot at our partner restaurants for special occasions and events.</p>
                <p className="text-amber-500 font-medium">10+ Premium Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chefs Section with Background Pattern */}
      <div className="py-12 sm:py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")',
          backgroundSize: 'auto',
        }}></div>
        <div className="relative z-10">
          <ChefsCard></ChefsCard>
        </div>
      </div>
      
      {/* Testimonials section */}
      <div className="py-12 bg-amber-50">
        <h3 className="text-center text-3xl sm:text-4xl font-bold text-amber-600 mb-10">What Our Customers Say</h3>

        <div className="carousel mx-auto max-w-6xl px-4">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="card flex flex-col lg:flex-row shadow-xl bg-white overflow-hidden">
              <figure className="lg:w-1/2 h-64 sm:h-72 lg:h-auto">
                <img 
                  src="https://culinasydney.com.au/wp-content/uploads/2020/02/18-12_mensenumfrage.jpg" 
                  alt="Customer" 
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body lg:w-1/2 flex flex-col justify-center p-6 sm:p-8">
                <div className="mb-4">
                  <div className="flex text-amber-400 text-xl mb-2">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <h2 className="card-title text-xl sm:text-2xl text-amber-700">Adam Smith</h2>
                <p className="text-gray-600 italic">"We visited this place for breakfast and dinner. The food was tasty and definitely worth the price. Good quantity served per portion. Service was also excellent!"</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 sm:left-5 right-2 sm:right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700 btn-sm sm:btn-md">❮</a> 
                <a href="#slide2" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700 btn-sm sm:btn-md">❯</a>
              </div>
            </div>
          </div> 

          <div id="slide2" className="carousel-item relative w-full">
            <div className="card flex flex-col lg:flex-row shadow-xl bg-white overflow-hidden">
              <figure className="lg:w-1/2 h-64 sm:h-72 lg:h-auto">
                <img 
                  src="https://restaurantengine.com/wp-content/uploads/2013/04/Restaurant-Customer-Loyalty.jpg" 
                  alt="Customer" 
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body lg:w-1/2 flex flex-col justify-center p-6 sm:p-8">
                <div className="mb-4">
                  <div className="flex text-amber-400 text-xl mb-2">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <h2 className="card-title text-xl sm:text-2xl text-amber-700">John Dev</h2>
                <p className="text-gray-600 italic">"The chef prepared an amazing dinner for our anniversary. The flavors were complex and the presentation was beautiful. Will definitely book again!"</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 sm:left-5 right-2 sm:right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700 btn-sm sm:btn-md">❮</a> 
                <a href="#slide3" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700 btn-sm sm:btn-md">❯</a>
              </div>
            </div>
          </div> 

          <div id="slide3" className="carousel-item relative w-full">
            <div className="card flex flex-col lg:flex-row shadow-xl bg-white overflow-hidden">
              <figure className="lg:w-1/2 h-64 sm:h-72 lg:h-auto">
                <img 
                  src="https://www.ocean-glassware.com/wp-content/uploads/2020/03/How-to-properly-handle-the-customers-complaint1.jpg" 
                  alt="Customer" 
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body lg:w-1/2 flex flex-col justify-center p-6 sm:p-8">
                <div className="mb-4">
                  <div className="flex text-amber-400 text-xl mb-2">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <h2 className="card-title text-xl sm:text-2xl text-amber-700">Jennifer</h2>
                <p className="text-gray-600 italic">"The home delivery service was prompt and the food arrived hot. The chef's special menu was outstanding, especially the desserts!"</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 sm:left-5 right-2 sm:right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700 btn-sm sm:btn-md">❮</a> 
                <a href="#slide1" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700 btn-sm sm:btn-md">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-12 sm:py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Subscribe to Our Newsletter</h2>
          <p className="mb-6 sm:mb-8 max-w-2xl mx-auto">Stay updated with the latest recipes, chef profiles, and exclusive cooking tips delivered directly to your inbox.</p>
          
          <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input input-bordered w-full text-gray-800" 
            />
            <button className="btn bg-amber-900 hover:bg-amber-800 border-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
