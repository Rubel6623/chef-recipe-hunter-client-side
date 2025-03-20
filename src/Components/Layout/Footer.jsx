import React from "react";
import { FaUtensils, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <div>
      <footer className="footer p-10 bg-amber-800 text-white">
        <div>
          <span className="footer-title text-xl text-amber-100">Chef Hut</span>
          <p className="w-80">Discover the finest culinary experiences with our expert chefs. We bring traditional and authentic cuisine to your table.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <span className="footer-title text-amber-100">Services</span>
          <a className="link link-hover flex items-center gap-2"><FaUtensils /> Catering</a>
          <a className="link link-hover">Special Events</a>
          <a className="link link-hover">Chef Booking</a>
          <a className="link link-hover">Food Delivery</a>
          <a className="link link-hover">Cooking Classes</a>
        </div>
        
        <div>
          <span className="footer-title text-amber-100">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
        
        <div>
          <span className="footer-title text-amber-100">Contact Us</span>
          <a className="link link-hover flex items-center gap-2"><FaMapMarkerAlt /> 123 Food Street, Cuisine City</a>
          <a className="link link-hover flex items-center gap-2"><FaPhone /> +880 1234-567890</a>
          <a className="link link-hover flex items-center gap-2"><FaEnvelope /> info@chefhut.com</a>
        </div>
      </footer>
      
      <div className="bg-amber-900 text-white text-center py-4">
        <p>© {year} Chef Hut. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
