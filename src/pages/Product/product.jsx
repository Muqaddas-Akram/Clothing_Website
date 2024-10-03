import React, { useState } from "react";
import Slider from "react-slider";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const [showAll, setShowAll] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [values, setValues] = useState([120, 130]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  const categories = [
    "Dresses",
    "Tops",
    "Lingerie & Lounge Wear",
    "Blouse",
    "Vintage",
    "Jumpsuits",
    "    Skirts",
    " Outerwear",
    " Swimwear",
  ];
  const brands = [
    "Victoria’s Secret",
    "Dior",
    "Gucci",
    "Fendi",
    "Prada",
    "Versace",
    "Dolce & Gabbana",
    "Zara",
    "Chanel",
    "3.1 Phillip Lim",
    "7 For All Mankind",
    "A.P.C.",
    "Acne Studios",
    "Akris",
    "Alexander McQueen",
    "Alice + Olivia",
    "AllSaints",
    "American Eagle Outfitters",
    "Anine Bing",
    "Ann Taylor",
    "Anthropologie",
    "Asos",
    "Athleta",
    "Balenciaga",
    "Bally",
    "Banana Republic",
    "Barbour",
    "Ba&sh",
    "BCBGMAXAZRIA",
    "Bedstu",
    "Belstaff",
    "Bella Dahl",
    "Billabong",
    "BOSS",
    "Boss Hugo Boss",
    "Brooks Brothers",
    "Brunello Cucinelli",
    "Burberry",
    "Carven",
    "Céline",
    "Chloé",
    "Christian Dior",
    "Club Monaco",
    "Coach",
    "Comme des Garçons",
    "Converse",
    "Cos",
    "Current/Elliott",
    "Diane von Furstenberg",
    "Diesel",
    "Dries Van Noten",
    "Eileen Fisher",
    "Elie Tahari",
    "Equipment",
    "Guess",
    "H&M",
    "Hackett London",
    "Helmut Lang",
    "Hugo Boss",
    "IRO",
    "Isabel Marant",
    "J.Crew",
    "Jacquemus",
    "James Perse",
    "J Brand",
    "Kit and Ace",
    "L.K. Bennett",
    "Lacoste",
    "Lanvin",
    "Levi’s",
    "Lululemon",
    "Mackage",
    "Madewell",
    "Maison Kitsuné",
    "Maison Margiela",
    "Mango",
    "Marc Jacobs",
    "Michael Kors",
    "Miu Miu",
    "Missoni",
    "Moncler",
    "Moschino",
    "Mountain Hardwear",
    "Mulberry",
    "Natori",
    "Nanushka",
    "Native Youth",
    "Nautica",
    "Neiman Marcus",
    "Nike",
    "Off-White",
    "Oiselle",
    "Opening Ceremony",
    "Paul Smith",
    "Proenza Schouler",
    "Rag & Bone",
    "Ralph Lauren",
    "Rebecca Minkoff",
    "Reformation",
    "Rick Owens",
    "Roberto Cavalli",
    "Saint Laurent",
    "Saks Fifth Avenue",
    "Sandro",
    "Scotch & Soda",
    "See by Chloe",
    "Self-Portrait",
    "Sergio Rossi",
    "St. John",
    "Stella McCartney",
    "Stone Island",
    "Sundry",
    "Superdry",
    "Tibi",
    "Theory",
    "Thrasher",
    "Tory Burch",
    "True Religion",
    "Ulla Johnson",
    "Uniqlo",
    "Urban Outfitters",
    "Valentino",
    "Van Cleef & Arpels",
    "Vans",
    "Vera Wang",
    "Vince",
    "Vivienne Westwood",
    "Wrangler",
    "Y-3",
    "Yigal Azrouël",
    "Yohji Yamamoto",
    "Zadig & Voltaire",
    "ZARA",
    "Abercrombie & Fitch",
    "Acne",
    "Allsaints",
    "Athleta",
    "Balenciaga",
    "Bally",
    "Barbara Bui",
    "Billabong",
    "Blank NYC",
    "BOSS",
    "Brixton",
    "Brooks Brothers",
    "C by Chloe",
    "Canada Goose",
    "Carhartt",
    "Charles Tyrwhitt",
    "Chloé",
    "Coach",
    "Converse",
    "COS",
    "Current/Elliott",
    "Diesel",
    "Dorothy Perkins",
    "Eileen Fisher",
    "Elie Tahari",
    "Equipment",
    "Etro",
    "Everlane",
    "Faithfull the Brand",
    "Frame",
    "Free People",
    "Ganni",
    "GANT",
    "Gap",
    "Giorgio Armani",
    "Givenchy",
    "Golden Goose",
    "Gucci",
    "Guess",
    "H&M",
    "Hackett",
    "Helmut Lang",
    "Hugo Boss",
    "IRO",
    "Isabel Marant",
    "J.Crew",
    "Jacquemus",
    "James Perse",
    "J Brand",
    "Jockey",
    "John Hardy",
    "Joseph",
    "Kate Spade",
    "Khaite",
    "Kit and Ace",
    "L.K. Bennett",
    "Lacoste",
    "Lanvin",
    "Levi’s",
    "Lululemon",
    "Mackage",
    "Madewell",
    "Maison Kitsuné",
    "Maison Margiela",
    "Mango",
    "Mulberry",
    "Natori",
    "Nanushka",
    "Native Youth",
    "Nautica",
    "Neiman Marcus",
    "Nike",
    "Off-White",
    "Oiselle",
    "Opening Ceremony",
    "Paul Smith",
    "Prada",
    "Proenza Schouler",
    "Rag & Bone",
    "Ralph Lauren",
    "Rebecca Minkoff",
    "Reformation",
    "Rick Owens",
    "Roberto Cavalli",
    "Saint Laurent",
    "Saks Fifth Avenue",
    "Sundry",
    "Superdry",
    "Tibi",
    "Theory",
    "Thrasher",
    "Tory Burch",
    "True Religion",
    "Ulla Johnson",
    "Uniqlo",
    "Urban Outfitters",
    "Valentino",
    "Van Cleef & Arpels",
    "Vans",
    "Vera Wang",
    "Versace",
    "Victoria’s Secret",
    "Vince",
    "Vivienne Westwood",
    "Wrangler",
    "Y-3",
    "Yigal Azrouël",
    "Yohji Yamamoto",
    "Zadig & Voltaire",
  ];

  const sizes = ["Medium", "Large", "Plus Size", "Sexy Plus Size"];
  const products = [
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: true,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: false,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: false,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: false,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: true,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: false,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: false,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: true,
    },
    {
      image: "src/assets/images/IMG-20240723-WA0029.jpg",
      title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$120.23",
      oldprice: "$120.23",
      orders: "22 Orders",
      newArrival: false,
    },
  ];

  const displayedBrands = showAll ? brands : brands.slice(0, 8);
  const displayedCategories = showMoreCategories
    ? categories
    : categories.slice(0, 5);
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <>
    <div className="bg-[#6f6a42] text-white mx-10 flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-24 xl:px-48">
  <div className="w-full max-w-screen-lg py-8">
    <div className="flex flex-col items-start">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Ladies Top</h2>
      <p className="text-xs sm:text-sm text-white">
        Slash Sales begins in August. Get up to 80% Discount on all products <a href="#" className="underline">Read More</a>
      </p>
    </div>
  </div>
</div>

    <div className="container mx-auto py-8">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ml-3 mb-10 space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-80">
  <p className="text-sm sm:text-base">
    Showing 1 - 20{" "}
    <span className="text-gray-500">out of 2,356 Products</span>
  </p>
  <div className="flex items-center space-x-2 text-gray-500">
    <span className="text-sm sm:text-base">Sort by:</span>
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="font-semibold text-black flex items-center text-sm sm:text-base"
      >
        New Arrivals
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-black">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Best Sellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Price: Low to High
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Price: High to Low
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-1 bg-sky-50 shadow-md p-4 h-fit">
          {/* Price Column */}
          <h3 className="font-semibold text-lg mb-5">PRICES</h3>
          <div className="px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col sm:flex-row sm:justify-between mb-5">
    <p className="text-black font-semibold">Range</p>
    <p className="text-gray-500">
      ${values[0]} - ${values[1]}
    </p>
  </div>
  <div className="flex flex-col items-center sm:items-start mb-5">
    <Slider
      value={values}
      onChange={handleChange}
      min={110}
      max={140}
      className="w-full sm:w-64 mb-5"
      thumbClassName="bg-red-500 w-2 h-2 rounded-full"
      trackClassName="bg-gray-300 h-2"
      railClassName="bg-gray-200 h-2"
      ariaLabel={["Start range", "End range"]}
    />
  </div>
</div>
            
          {/* Filters Column */}
          <h3 className="font-semibold text-lg mb-5">FILTERS</h3>
          <div className="space-y-3 mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="filter"
                value="Women"
                checked={selectedFilter === "Women"}
                onChange={handleFilterChange}
                className="mr-2"
              />
              Women
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="filter"
                value="Men"
                checked={selectedFilter === "Men"}
                onChange={handleFilterChange}
                className="mr-2"
              />
              Men
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="filter"
                value="Girls"
                checked={selectedFilter === "Girls"}
                onChange={handleFilterChange}
                className="mr-2"
              />
              Girls
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="filter"
                value="Babies"
                checked={selectedFilter === "Babies"}
                onChange={handleFilterChange}
                className="mr-2"
              />
              Babies
            </label>
          </div>
          {/* Brands Column */}
          <h3 className="font-semibold text-lg mb-5">BRANDS</h3>
          <ul className="space-y-3">
            {displayedBrands.map((brand, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" id={`brand-${index}`} className="mr-2" />
                <label htmlFor={`brand-${index}`} className="text-gray-800">
                  {brand}
                </label>
              </li>
            ))}
          </ul>
          {brands.length > 8 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-red-600 mt-2 text-sm  mb-5"
            >
              {showAll ? "- Show less" : `+ ${brands.length - 8} more`}
            </button>
          )}
          {/* Categories Section */}
          <h3 className="font-semibold text-lg mb-5">CATEGORIES</h3>
          <ul className="space-y-3">
            {displayedCategories.map((category, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  className="mr-2"
                />
                <label htmlFor={`category-${index}`} className="text-gray-800">
                  {category}
                </label>
              </li>
            ))}
          </ul>
          {categories.length > 5 && (
            <button
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="text-red-600 mt-2 mb-5 text-sm"
            >
              {showMoreCategories
                ? "- Show less"
                : `+ ${categories.length - 5} more`}
            </button>
          )}
          {/* Sizes Column */}
          <h3 className="font-semibold text-lg mb-5">SIZES</h3>
          <ul className="space-y-3 mb-7">
            {sizes.map((size, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" id={`size-${index}`} className="mr-2" />
                <label htmlFor={`size-${index}`} className="text-gray-800">
                  {size}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column */}
        <div className="col-span-1 mb-20 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-md  overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-2 right-2 bg-gray-500 p-2 focus:outline-none">
                  <svg
                    className="w-6 h-6 text-white hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.title}
                </h3>
                <p className="flex justify-between text-gray-700 font-medium">
                  <span>{product.price}</span>
                  <span>{product.orders}</span>
                </p>
                <p className="flex items-center text-gray-400 font-normal">
                  <span className="line-through mr-2">{product.oldprice}</span>
                  {product.newArrival && (
                    <span className="ml-2 bg-black text-white text-xs font-semibold px-2 py-1">
                      New Arrival
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="container flex justify-end mb-40">
  <nav className="isolate inline-flex space-x-2 rounded-md shadow-sm" aria-label="Pagination">
    {/* Previous Page Button */}
    <a href="#" className="relative inline-flex items-center bg-gray-400 px-2 py-2 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
      <span className="sr-only bg-slate-500">Previous</span>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
      </svg>
    </a>

    {/* Page Numbers */}
    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">1</a>
    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
    <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">13</a>

    {/* Next Page Button */}
    <a href="#" className="relative inline-flex items-center px-2 py-2 bg-slate-800 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
      <span className="sr-only">Next</span>
      <svg className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      </svg>
    </a>
  </nav>
</div>

    </>
  );
};

export default Product;
