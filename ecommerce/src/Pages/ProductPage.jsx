import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from "../components/CartContext"
import BackButton from "../components/BackButton"

const ProductPage = () => {

  const {addToCart} =useCart();
  const {removeCart} =useCart()
  const [product,setProduct]=useState([]);
  const [added,setAdded]=useState(false)
   
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`) 
        .then(res=> res.json())
        .then(data=> setProduct(data))
    },[id])

    const handleRemove =()=>{
      removeCart(product)
    }

    const handleAdd = ()=>{
      addToCart(product);
      setAdded(true)
    }

    if(!product) return <div className='text-center py-20'>Loading</div>

  return (
    <>
       <div className="max-w-6xl px-2 mx-auto py-10">
        <BackButton />

      <div className="grid md:grid-cols-2 gap-10 p-20">
        <div className=''>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full bg-orange-200 rounded-lg shadow-md object-contain h-60 hover:scale-105 transition"
          />
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-800 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className='text-yellow-600 text-md'>⭐ {product.rating} Ratings</p>
          </div>     

          <button onClick={handleAdd} disabled={added} className="w-full text-xl text-white py-3 px-6 rounded bg-black text-md hover:scale-105 transition">
          {added ? 'Added' : 'Add To Cart'}
          </button>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage
