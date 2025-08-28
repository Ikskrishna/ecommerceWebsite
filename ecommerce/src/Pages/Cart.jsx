import { useCart } from '../components/CartContext'
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton'
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {

  const {cart,removeCart}=useCart()
  const [total , setTotal]=useState(0)
  const Navigate = useNavigate();

  
  useEffect(()=>{
    const totalPrice =cart.reduce((acc,item)=> acc + item.price,0);
    setTotal(totalPrice)
  },[cart]);

  const handleBuy = ()=>{
    Navigate('/checkout',{state:{cart,total}});
  }

  return (
    <>
      <div className=' min-h-screen p-10'>
        <BackButton />
        <div className=' p-5'>
        {cart.length === 0?
        (
          <p>cart is empty</p>
        ):(
          <div className='flex  flex-col gap-2'>
            {cart.map((item,index)=>(
              <div className=' bg-orange-200  w-full shadow-2xl  rounded-md  py-2' key={index}>
                  <div className='justify-between  px-1 flex items-center'>
                  <div className='h-20 w-20'><img src={item.thumbnail} /></div>
                  <div className='h-10 w-[40vw]'>{item.title}</div>
                  <div className='h-10 w-20 '>$ {item.price}</div>
                  <div className='h-10 w-20 text-yellow-800 '>⭐ {item.rating}</div>
                  <button
        onClick={() => removeCart(item.id)}
        className="text-red-600  hover:text-red-800 mb-3 text-xl ml-4"
      >
       <MdDeleteOutline />
      </button>
              </div>
              </div>
            ))}
          </div>
          
        )}
       <div className='p-5 mt-5 rounded-md text-white flex item-center gap-1'>
         {cart.length === 0 ? "": <h1 className='bg-black rounded-md p-4'>Estimated Total: ${total}</h1>}
         {cart.length === 0 ? "":<button onClick={handleBuy} className='bg-black text-xl hover:bg-zinc-800 px-7 py-1 rounded-md'>Buy</button>}
       </div>

       </div>
      </div>
    </>
  )
}

export default Cart
