import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter logic: show products with rating >= 4.5
        const popular = data.products.filter((item) => item.rating >= 4.5);
        setProducts(popular);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
  <>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-orange-200 text-blue-600 hover:text-blue-800 transition duration-300 drop-shadow-md text-center mb-6">
  Popular Products
</h2>


 <div className=' flex justify-center'>

          <div className='grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
  {products.map((product) => (
    <Link key={product.id} to={`/product/${product.id}`}>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className='w-[20vh] sm:w-[20vh] md:w-[35vh]  flex flex-col bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300'
      >
        {/* Image */}
        <div className='aspect-[4/3] bg-green-200'>
          <img
            className="object-cover w-full h-full"
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
          />
        </div>

        {/* Title & Rating */}
        <div className='p-3 flex-grow'>
          <h1 className='text-base font-semibold truncate text-gray-800'>{product.title}</h1>
          <p className='text-sm text-gray-500'>⭐ {product.rating}</p>
        </div>

        {/* Button */}
        <div className='px-3 pb-3'>
          <button className='w-full bg-black text-white py-2 rounded hover:scale-105 transition'>
            View Details
          </button>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

      </div>
  </>
  );
};

export default PopularProducts;
