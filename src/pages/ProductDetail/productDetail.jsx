import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const ProductsDetail = () => {
  const [selectedImage, setSelectedImage] = useState("src/assets/images/IMG-20240723-WA0025.jpg");
  const images = [
    "src/assets/images/IMG-20240723-WA0025.jpg",
    "src/assets/images/IMG-20240723-WA0025.jpg",
    "src/assets/images/IMG-20240723-WA0025.jpg",
    "src/assets/images/IMG-20240723-WA0025.jpg",
    "src/assets/images/IMG-20240723-WA0025.jpg",
  ];
  const products = [
    {
      image: 'src/assets/images/IMG-20240723-WA0023.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0023.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0023.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0023.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0023.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
  ];
  const product = [
    {
      image: 'src/assets/images/IMG-20240723-WA0027.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0029.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0024.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
    {
      image: 'src/assets/images/IMG-20240723-WA0025.jpg',
      title: 'Womens Denim Jacket',
      brand: 'Brand Name',
      rating: 4.4,
      price: 700,
      originalPrice: 1000,
      discount: 30,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      const offset = currentIndex * (sliderRef.current.clientWidth / 5);
      sliderRef.current.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);
  useEffect(() => {
    if (sliderRef2.current) {
      const offset = currentIndex * (sliderRef2.current.clientWidth / 5);
      sliderRef2.current.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <>
    <div className="flex flex-col lg:flex-row gap-8 p-6 items-stretch">
      {/* Left Side - Image Gallery */}
      <div className="flex flex-col items-center lg:items-start space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className={`w-48 h-36 object-cover rounded-md cursor-pointer ${
              selectedImage === image ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-grow mt-6 lg:mt-0">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Product Info */}
      <div className="flex flex-col space-y-4 flex-grow ">
        <h2 className="text-2xl font-bold text-[#272727]">Womens Denim Jacket (Blue)</h2>
        <div className="text-[#272727] text-sm">Brand Name</div>
        <div className="text-[#272727] text-sm">Sold By: Seller’s Name</div>

        {/* Rating Section */}
        <div className="flex items-center space-x-2">
          <div className="flex text-[#272727]">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStar className="text-gray-300" />
          </div>
          <div className="text-sm text-gray-700">4.4</div>
          <div className="text-sm text-gray-700">(36 Reviews)</div>
        </div>

        {/* Price Section */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-[#272727]">Rs. 700</div>
          <div className="text-sm text-gray-500 line-through">Rs. 1000</div>
          <div className="text-sm text-green-600 font-semibold">(30% off)</div>
        </div>

        {/* Size Selection */}
        <div>
          <span className="text-gray-800 font-semibold">Select Size</span>
          <div className="flex space-x-2 mt-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-full hover:bg-gray-200 transition"
              >
                {size}
              </button>
            ))}
          </div>
          <a href="#" className="text-[#00398F] text-sm mt-2 inline-block">
            Size Chart 
          </a>
        </div>

        {/* Color Selection */}
        <div>
  <span className="text-gray-800 font-semibold">Select Color</span>
  <div className="flex space-x-2 mt-2">
    {[
      { colorName: "Blue", className: "bg-blue-600" },
      { colorName: "Red", className: "bg-red-600" },
      { colorName: "Gray", className: "bg-gray-600" },
    ].map((color, index) => (
      <button
        key={index}
        className={`w-8 h-8 rounded-full ${color.className} border-2 border-gray-200 hover:border-black`}
        aria-label={color.colorName}
      ></button>
    ))}
  </div>
</div>

        {/* Best Offers Section */}
        <div className="border-t border-b py-4">
          <h3 className="text-lg font-semibold">Best Offers</h3>
          <ul className="space-y-2 mt-2 text-[#272727]">
            {[
              "Special offer get 25% off",
              "Bank offer get 30% off on Axis Bank Credit card",
              "Wallet offer get 40% cashback via Paytm wallet on first transaction",
              "Special offer get 25% off",
            ].map((offer, index) => (
              <li key={index}>
                {offer}{" "}
                <a href="#" className="text-[#00398F]">
                  T&C
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Cart Button */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-[#6F6A42] text-[#EFE8C2]  hover:bg-[#224F34] rounded transition">
            Add to cart
          </button>
          <button className="px-2 py-3 transition">
            <FiHeart className="inline-block" />
          </button>
        </div>
      </div>
    </div>

    {/* Product Details Section */}
    <div className="max-w-6xl mx-auto mt-20 p-4">
        <div className="flex flex-wrap border-b justify-center gap-8 md:gap-16 lg:gap-32">
          <button className="text-gray-500 pb-2 hover:text-[#00398F] hover:underline">
            Product Details
          </button>
          <button className="text-gray-500 pb-2 hover:text-[#00398F] hover:underline">
            Specification
          </button>
          <button className="text-gray-500 pb-2 hover:text-[#00398F] hover:underline">
            Ratings & Reviews
          </button>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-lg mb-2">Product Details</h2>
          <p className="text-sm text-gray-700">
            Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem
          </p>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-lg mb-2">Size & Fit</h2>
          <p className="text-sm text-gray-700">
            The model (height 5'8") is wearing a size S
          </p>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-lg mb-2">Material & Care</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            <li>100% cotton</li>
            <li>Machine Wash</li>
          </ul>
        </div>
      </div>
       {/* Similar Products */}
       <div className="relative max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef2}
          className="flex overflow-x-auto no-scrollbar"
        >
          {product.concat(product, product).map((product, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="text-xs text-gray-600">{product.brand}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium">{product.rating}</span>
                    <svg className="w-3 h-3 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm font-bold">Rs. {product.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">Rs. {product.originalPrice}</span>
                    <span className="text-xs text-green-600 ml-2">({product.discount}% off)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button onClick={prevSlide} >
        </button>
        <button onClick={nextSlide} >
        </button>
      </div>

    </div>

    {/* Customer Also like */}
        <div className="relative max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Customer Also Like</h2>
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto no-scrollbar"
        >
          {products.concat(products, products).map((product, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="text-xs text-gray-600">{product.brand}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium">{product.rating}</span>
                    <svg className="w-3 h-3 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm font-bold">Rs. {product.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">Rs. {product.originalPrice}</span>
                    <span className="text-xs text-green-600 ml-2">({product.discount}% off)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button onClick={prevSlide} >
        </button>
        <button onClick={nextSlide} >
        </button>
      </div>
    </div>
   
    </>
  );
};

export default ProductsDetail;
