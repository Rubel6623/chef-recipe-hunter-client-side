import React from "react";
import "./Home.css";
import ChefsCard from "../ChefsCard/ChefsCard";
import { FaArrowRight, FaUtensils, FaTruck, FaUsers, FaCalendarAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section With Gradient Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10"></div>
        <div className="hero min-h-[90vh] px-4" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="hero-content text-left text-white relative z-20 max-w-4xl">
            <div className="md:w-2/3">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-400">
                Discover Culinary Excellence
              </h1>
              <p className="text-xl mb-8">
                Experience authentic recipes from world-renowned chefs. Our platform connects you with the best culinary experts to bring unforgettable dining experiences to your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary px-8 py-3 text-lg">Find Your Chef</button>
                <button className="btn btn-outline btn-secondary px-8 py-3 text-lg">View Recipes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-amber-50">
        <h2 className="text-center text-4xl font-bold mb-10 text-amber-600">Our Premium Services</h2>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTruck className="text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-amber-800">Home Delivery</h3>
                <p className="text-gray-600 mb-4">Enjoy the fastest delivery service within the city area with our dedicated team.</p>
                <p className="text-amber-500 font-medium">100+ Delivery Experts</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-amber-800">Experienced Chefs</h3>
                <p className="text-gray-600 mb-4">Our highly skilled chefs bring years of culinary excellence to every dish they prepare.</p>
                <p className="text-amber-500 font-medium">50+ Award-Winning Chefs</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUtensils className="text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-amber-800">Delicious Menu</h3>
                <p className="text-gray-600 mb-4">Explore a vast array of delicious dishes from various cuisines around the world.</p>
                <p className="text-amber-500 font-medium">150+ Signature Dishes</p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-amber-800">Restaurant Booking</h3>
                <p className="text-gray-600 mb-4">Reserve your spot at our partner restaurants for special occasions and events.</p>
                <p className="text-amber-500 font-medium">10+ Premium Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chefs Section with Background Pattern */}
      <div className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/food.png")',
          backgroundSize: 'auto',
        }}></div>
        <div className="relative z-10">
          <ChefsCard></ChefsCard>
        </div>
      </div>
      
      {/* Testimonials section */}
      <div>
        <h3 className="text-center text-4xl font-bold text-amber-600 mt-16 mb-10">What Our Customers Say</h3>

        <div className="carousel mx-auto max-w-6xl px-4">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="card lg:card-side shadow-xl bg-white">
              <figure className="lg:w-1/2"><img src="https://culinasydney.com.au/wp-content/uploads/2020/02/18-12_mensenumfrage.jpg" alt="Customer" className="h-full w-full object-cover"/></figure>
              <div className="card-body lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex text-amber-400 text-xl mb-2">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <h2 className="card-title text-2xl text-amber-700">Adam Smith</h2>
                <p className="text-gray-600 italic">"We visited this place for breakfast and dinner. The food was tasty and definitely worth the price. Good quantity served per portion. Service was also excellent!"</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700">❮</a> 
                <a href="#slide2" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700">❯</a>
              </div>
            </div>
          </div> 

          <div id="slide2" className="carousel-item relative w-full">
            <div className="card lg:card-side shadow-xl bg-white">
              <figure className="lg:w-1/2"><img src="https://restaurantengine.com/wp-content/uploads/2013/04/Restaurant-Customer-Loyalty.jpg" alt="Customer" className="h-full w-full object-cover"/></figure>
              <div className="card-body lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex text-amber-400 text-xl mb-2">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <h2 className="card-title text-2xl text-amber-700">John Dev</h2>
                <p className="text-gray-600 italic">"The chef prepared an amazing dinner for our anniversary. The flavors were complex and the presentation was beautiful. Will definitely book again!"</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700">❮</a> 
                <a href="#slide3" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700">❯</a>
              </div>
            </div>
          </div> 

          <div id="slide3" className="carousel-item relative w-full">
            <div className="card lg:card-side shadow-xl bg-white">
              <figure className="lg:w-1/2"><img src="https://www.ocean-glassware.com/wp-content/uploads/2020/03/How-to-properly-handle-the-customers-complaint1.jpg" alt="Customer" className="h-full w-full object-cover"/></figure>
              <div className="card-body lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex text-amber-400 text-xl mb-2">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <h2 className="card-title text-2xl text-amber-700">Jennifer</h2>
                <p className="text-gray-600 italic">"The home delivery service was prompt and the food arrived hot. The chef's special menu was outstanding, especially the desserts!"</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700">❮</a> 
                <a href="#slide1" className="btn btn-circle bg-amber-600 border-amber-600 text-white hover:bg-amber-700">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-amber-700 text-white mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="mb-8 max-w-2xl mx-auto">Stay updated with the latest recipes, chef profiles, and exclusive cooking tips delivered directly to your inbox.</p>
          
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
