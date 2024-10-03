import React from "react";

function About() {
    const teamMembers = [
        {
          image: 'src/assets/images/IMG-20240723-WA0022.jpg',
      
        },
        {
          image: 'src/assets/images/IMG-20240723-WA0020.jpg',
       
        },
        {
          image: 'src/assets/images/IMG-20240723-WA0022.jpg',
     
        },
        {
          image: 'src/assets/images/IMG-20240723-WA0020.jpg',
        
        }
      ];
  return (
    <>
    <div className="bg-white">
      {/* About Us Section */}
      <section className="py-12 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 text-center mt-20 md:text-left md:pr-8">
        <h2 className="text-3xl font-bold text-[#6F6A42] ">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
          Welcome to Logo – your ultimate destination for cool and trendy fashion! At Logo, we are dedicated to providing the latest styles that resonate with the vibrant and dynamic spirit of today’s youth. Our collection is carefully curated to ensure that every piece embodies the cutting-edge trends and timeless coolness that define your unique style.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="src/assets/images/IMG-20240723-WA0024.jpg"
          alt="Fashion"
          className="mx-auto md:mx-0 rounded"
        />
      </div>
    </div>
  </div>
</section>


      {/* Our Mission Section */}
      <section className="bg-gray-100 mt-10 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="src/assets/images/IMG-20240723-WA0026.jpg"
          alt="Mission"
          className="mx-auto md:mx-0 rounded"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-20 md:pl-8">
        <h2 className="text-3xl font-bold text-[#6F6A42]">Our Mission</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
          Our mission is simple: to inspire and empower youngsters to express themselves through fashion. Whether you’re looking for the perfect outfit for a night out, a casual day at school, or anything in between, Logo has you covered. We believe in fashion as a form of self-expression, and our diverse range of clothing is designed to cater to every mood and moment.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
    {/* Our Team */}
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6F6A42] mt-10 b-8">
        Our Team
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

{/* Footer */}
<div className="max-w-4xl mx-auto px-4 py-12">
<h2 className="text-2xl font-bold text-black mb-4">Lorem Ipsum</h2>
  <p className="text-start text-black mb-8">
    Lorem ipsum is simply dummy text of the printing and typesetting industry.
  </p>

  <div className="bg-[#6F6A42] p-8 mb-20 rounded-md shadow-md">
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-3/5 mb-4  md:mb-0">
        <h2 className="text-2xl font-bold text-white mb-4">Stay in the loop</h2>
        <p className="text-white">
          Subscribe to receive the latest news and updates about TDA. We promise not to spam you!
        </p>
      </div>

      <div className="md:w-2/5 flex  justify-end">
  <div className="relative w-full">
    <input
      type="email"
      placeholder="Enter email address"
      className="w-full px-7 py-2 rounded-md focus:outline-none pr-20"
    />
    <button className="absolute right-1  top-1 bottom-1 bg-[#6F6A42]  text-white px-4  rounded-md hover:bg-[#5c5930] transition-colors">
      Continue
    </button>
  </div>
</div>

    </div>
  </div>
</div>

    </>
  );
}

export default About;