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


 <div className='w-full flex py-10'>

          <div className='grid grid-cols-2 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>

            {/* Product Card  */}
            {products.map((product)=>(
              <Link key={product.id} to={`/product/${product.id}`}>
              <motion.div 
              whileHover={{scale:1.05}}
              className=' w-[30vh] flex flex-col gap-2 h-[55vh] sm:h-[55vh] sm:w-[30vh] md:h-[60vh] md:w-[40vh] rounded-md bg-white shadow-xl'>
              {/* Image */}
                <div className='w-full h-[35vh] rounded-md bg-green-200 '>
                 
                  <img
                  className="object-contain h-full w-full "
                  src={product.thumbnail}
                  alt={product.title}
                   loading="lazy"
                />
                </div>
              {/* Text */}
              {/* <div className='px-3 h-[4vh] '><h1 className='text-xl text-gray-600'>Rs. {product.price}</h1></div> */}
              <div className='px-3 h-[11vh]   overflow-hidden break-words '>
                <h1 className=''>{product.title}<br/>⭐{product.rating} </h1>
                
                </div>
              <div className='px-3 py-1 h-[7vh] flex justify-center'>
                <button className=' w-full rounded-sm text-white bg-black text-md hover:scale-105 transition'>ViewDetails</button>
              </div>
          </motion.div></Link>
            ))}
            
          </div>
      </div>
  </>
  );
};

export default PopularProducts;
