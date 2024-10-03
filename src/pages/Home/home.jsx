import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const categories = ['SALE', 'HOT', 'NEW ARRIVAL', 'ACCESSORIES'];
    const product = [
      { name: 'Summer Wind T-shirt', price: 31.99, rating: 4.2, image: 'src/assets/images/image 1.png' },
      { name: 'Tailored Jacket', price: 38.99, rating: 4.5, image: 'src/assets/images/image 2.png' },
      { name: 'Formal Classic suit', price: 50.00, rating: 4.0, image: 'src/assets/images/image 3.png' },
      { name: 'White Solid Formal T-shirt', price: 42.09, rating: 5.0, image: 'src/assets/images/image 4.png' },
      { name: 'Tailored Jacket', price: 41.03, rating: 5.0, image: 'src/assets/images/image 5.png' },
      { name: 'Solid White Summer T-shirt', price: 29.99, rating: 4.5, image: 'src/assets/images/image 6.png' },
      { name: 'Classic Top', price: 24.54, rating: 3.8, image: 'src/assets/images/image 7.png' },
      { name: 'Formal Jeans', price: 38.99, rating: 5.0, image: 'src/assets/images/image 8.png' },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
  
    const products = [
      {
        name: "Name of the product",
        price: 38.99,
        rate: 5,
        image: "src/assets/images/IMG-20240723-WA0029.jpg",
      },
      {
        name: "Name of the product",
        price: 38.99,
        rate: 5,
        image: "src/assets/images/IMG-20240723-WA0025.jpg",
      },
      {
        name: "Name of the product",
        price: 38.99,
        rate: 5,
        image: "src/assets/images/IMG-20240723-WA0027.jpg",
      },
      {
        name: "Name of the product",
        price: 56.59,
        rate: 5,
        image: "src/assets/images/IMG-20240723-WA0024.jpg",
      },
      {
        name: "Name of the product",
        price: 38.99,
        rate: 5,
        image: "src/assets/images/IMG-20240723-WA0029.jpg",
      },
    ];
  
    // Adjust itemsPerPage based on screen size
    useEffect(() => {
      const updateItemsPerPage = () => {
        if (window.innerWidth >= 1024) {
          setItemsPerPage(4);
        } else if (window.innerWidth >= 768) {
          setItemsPerPage(3);
        } else if (window.innerWidth >= 640) {
          setItemsPerPage(2);
        } else {
          setItemsPerPage(1);
        }
      };
  
      updateItemsPerPage();
      window.addEventListener('resize', updateItemsPerPage);
  
      return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= products.length - itemsPerPage + 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? products.length - itemsPerPage : prevIndex - 1
      );
    };
  
    // Auto-slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }, [itemsPerPage]); // Run only on itemsPerPage change
  
    
  return (
    <>
    {/*  Navbar */}
    <div className="bg-[#efe8c2] min-h-screen flex flex-col">
      <div className="bg-transparent p-6">
      <header className="flex justify-between items-center h-20">
      <Link to="/" ><div className="text-[#2c5545] text-2xl font-bold ml-4 md:ml-40">LOGO</div></Link> 
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-[#2c5545] font-semibold hover:underline">HOME</a>
        <a href="/product" className="text-[#2c5545] font-semibold hover:underline">SHOP</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">FEATURES</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">CONTACT</a>
        </nav>

        {/* Icons and Login Button */}
        <div className="flex items-center space-x-4 md:space-x-20 mr-4 md:mr-40">
        <Link to="/productdetail"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2c5545]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg></Link>   
         <Link to="/login"><button className="bg-transparent text-[#2c5545] px-4 py-2 rounded border border-[#2c5545]">
            LOGIN
          </button></Link>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[#2c5545]">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col space-y-4 mt-4 md:hidden">
          <a href="/" className="text-[#2c5545] font-semibold hover:underline">HOME</a>
          <a href="/product" className="text-[#2c5545] font-semibold hover:underline">SHOP</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">FEATURES</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">CONTACT</a>
        </nav>
      )}
    </div>

    {/* Hero */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 md:px-40">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold italic text-[#6f6a42] mb-10 mt-10 md:mt-0">
            Uncover And<br />
            Cultivate Your<br />
            Distinctive Style
          </h1>
          <p className="text-[#6f6a42] mb-10">
            Lorem Ipsum Dolor Sit Amet Consectetur.<br />
            Faucibus Odio Gravida Amet Tellus<br />
            Adipiscing Donec Adipiscing Dignissim.
          </p>
          <button className="bg-[#6f6a42] text-white px-6 py-3 rounded">
            EXPLORE NOW
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src="src/assets/images/Hero.png" 
            alt="Stylish person in Boston jacket" 
            className="rounded-2xl w-full"
          />
        </div>
      </main>
    </div>
    {/* Best Selling */}
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#6F6A42] mb-8 text-center">
          Best Selling
        </h2>
        <p className="text-lg md:text-xl text-[#272727] mb-8 md:mb-10 text-center">
          Get in on the trend with our curated selection of best-selling style
        </p>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2`}
              >
                <div className="bg-gray-100 overflow-hidden shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-base text-gray-700 font-bold">
                        ${product.price.toFixed(2)}
                      </p>
                      <span className="mx-2 border-l border-gray-400 h-5"></span>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-2 text-sm md:text-base text-gray-700">
                          {product.rate.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#6F6A42] bg-[#EFE8C2] rounded-full hover:text-[#272727] focus:outline-none"
          >
            <AiOutlineArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#6F6A42] bg-[#EFE8C2] rounded-full hover:text-[#272727] focus:outline-none"
          >
            <AiOutlineArrowRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex items-center font-semibold gap-3 hover:bg-[#224F34] border-2 border-[#224F34] text-[#6F6A42] hover:text-white py-2 px-4 duration-300">
            See more
            <AiOutlineArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

   {/* Best Selling2 */}
<div className="container mx-auto  px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold text-center text-[#6F6A42]  my-8">Best Selling</h1>

  <div className="flex justify-center space-x-4 mb-8 flex-wrap">
    {categories.map((category, index) => (
      <button
        key={index}
        className={`px-4 py-2 text-sm  hover:underline hover:text-[#2c5545]  sm:text-base`}
      >
        {category}
      </button>
    ))}
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {product.map((product, index) => (
      <div key={index} className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-56 h-64 object-cover mb-2"
        />
        <h3 className="font-semibold text-center text-sm sm:text-base">{product.name}</h3>
        <div className="flex flex-col items-center mt-1 text-sm sm:text-base">
          <span className="font-bold">
            ${product.price.toFixed(2)}
            <span className="mx-2">|</span>
            {product.rating} ⭐
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* ExclusiveOffer */}
<div className="flex flex-col md:flex-row items-center justify-center mt-20 bg-[#efe8c2] px-4 md:px-8 lg:px-16 py-10">
  <div className="md:w-1/2 w-full mb-8 md:mb-0">
    <img
      src="src/assets/images/image 9.png"
      alt="Exclusive Offer"
      className="w-full h-auto"
    />
  </div>
  <div className="md:w-1/2 w-full max-w-md mx-auto p-4">
    <div className="mt-6 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-10 font-bold text-[#6F6A42]">
        Exclusive Offer
      </h1>
      <p className="text-[#6F6A42] mb-6 md:mb-10">
        Unlock the unlimited style upgrade with our exclusive offer. Enjoy savings of up to 40% off on your latest New Arrivals.
      </p>
      <div className="flex justify-center md:justify-start space-x-6 md:space-x-10 mt-4 mb-8 md:mb-10">
        <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
          <span className="text-2xl font-bold text-[#224F34]">05</span>
          <br />
          <span className="text-sm text-[#224F34]">Days</span>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
          <span className="text-2xl font-bold text-[#224F34]">17</span>
          <br />
          <span className="text-sm text-[#224F34]">Hours</span>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
          <span className="text-2xl font-bold text-[#224F34]">20</span>
          <br />
          <span className="text-sm text-[#224F34]">Min</span>
        </div>
      </div>
      <button className="bg-[#6F6A42] text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-800">
        SHOP NOW
      </button>
    </div>
  </div>
</div>

      {/* Items */}
<div className="container mx-auto px-4">
  <h1 className="text-3xl font-bold text-center text-[#6F6A42] mb-8 mt-16">
    Cool & Trendy Clothes For You
  </h1>
  <p className="text-center text-black mb-16">
    Lorem ipsum dolor sit amet consectetur.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-8">
      <img
        src="src/assets/images/IMG-20240723-WA0028.jpg"
        alt="Accessories"
        className="w-full mb-4"
      />
      <h2 className="text-xl font-bold mt-5 text-black text-center mb-2">
        Accessories
      </h2>
      <p className="text-black font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.
      </p>
    </div>
    <div className="bg-white p-8">
      <img
        src="src/assets/images/IMG-20240723-WA0027.jpg"
        alt="Accessories"
        className="w-full mb-4"
      />
      <h2 className="text-xl font-bold mt-5 text-black text-center mb-2">
        Accessories
      </h2>
      <p className="text-black font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur. Nisl elit potenti diam quis condimentum sed purus suspendisse.
      </p>
    </div>
    <div className="bg-white p-8">
      <img
        src="src/assets/images/IMG-20240723-WA0024.jpg"
        alt="Accessories"
        className="w-full mb-4"
      />
      <h2 className="text-xl font-bold mt-5 text-black text-center mb-2">
        Accessories
      </h2>
      <p className="text-black font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur. Fermentum dolor id cras in eu tempor euismod ac.
      </p>
    </div>
  </div>
</div>

     {/* Testimonials */}
<div className="relative px-4 md:px-12 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6F6A42] mb-10 md:mb-20 mt-10 md:mt-20">
    Clients Feedback
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-6 md:p-8 rounded-lg hover:bg-[#efe8c2] shadow-md transition-colors duration-300">
      <p className="text-[#6F6A42] font-bold text-sm mb-2">"</p>
      <p className="text-[#6F6A42] font-bold mb-4">Maria Shabbir</p>
      <p className="text-black">
        The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I'm beyond satisfied!
      </p>
    </div>
    <div className="bg-white p-6 md:p-8 rounded-lg hover:bg-[#efe8c2] shadow-md transition-colors duration-300">
      <p className="text-[#6F6A42] font-bold text-sm mb-2">"</p>
      <p className="text-[#6F6A42] font-bold mb-4">Beenish Mumtaz</p>
      <p className="text-black">
        I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!
      </p>
    </div>
    <div className="bg-white p-6 md:p-8 rounded-lg hover:bg-[#efe8c2] shadow-md transition-colors duration-300">
      <p className="text-[#6F6A42] font-bold text-sm mb-2">"</p>
      <p className="text-[#6F6A42] font-bold mb-4">Ayra Khan</p>
      <p className="text-black">
        I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!
      </p>
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-center space-x-4 items-center mb-10 md:mb-20 mt-8 md:mt-8 px-4 md:px-8">
    <button
      onClick={prevSlide}
      className="text-[#6F6A42] bg-white hover:bg-[#EFE8C2] hover:text-[#272727] focus:outline-none p-2  transition-colors duration-300"
    >
      <AiOutlineArrowLeft className="w-6 h-6" />
    </button>
    <button
      onClick={nextSlide}
      className="text-[#6F6A42] bg-white hover:bg-[#EFE8C2] hover:text-[#272727] focus:outline-none p-2 transition-colors duration-300"
    >
      <AiOutlineArrowRight className="w-6 h-6" />
    </button>
  </div>
</div>

    </>
  );
};

export default Home;
