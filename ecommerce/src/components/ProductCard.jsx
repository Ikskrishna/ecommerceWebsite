import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const ProductCard = () => {
  
  const [products,setProducts] = useState([]);        // UseState Hook

  useEffect(() => {                                   // useEffect Hook
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching products:', err));
  }, []);
 if(!products) return <div className='text-center py-20'>Loading</div>


  return (
    <>
      <div className='w-full flex py-10'>
          <div className='grid grid-cols-1 gap-8 mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            {/* Product Card  */}
            {products.map((product)=>(
              <Link key={product.id} to={`/product/${product.id}`}>
              <motion.div 
              whileHover={{scale:1.05}}
              className=' w-[40vh] flex flex-col gap-2 h-[60vh] rounded-md bg-white shadow-xl'>
              {/* Image */}
                <div className='w-full h-[35vh] rounded-md  '>
                  <img
                  className="object-contain h-full w-full "
                  src={product.thumbnail}
                  alt={product.title}
                />
                </div>
              {/* Text */}
              {/* <div className='px-3 h-[4vh] '><h1 className='text-xl text-gray-600'>Rs. {product.price}</h1></div> */}
              <div className='px-3 h-[11vh]  overflow-hidden break-words '><h1 className=''>{product.title} </h1></div>
              <div className='px-3 py-1 h-[7vh] flex justify-center'>
                <button className=' w-full rounded-sm text-white bg-black text-md hover:scale-105 transition'>ViewDetails</button>
              </div>
          </motion.div></Link>
            ))}
            
          </div>
      </div>
    </>
  )
}

export default ProductCard
