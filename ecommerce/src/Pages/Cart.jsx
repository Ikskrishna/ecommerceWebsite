import { useCart } from '../components/CartContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cart, removeCart } = useCart();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  const handleBuy = () => {
    navigate('/checkout', { state: { cart, total } });
  };

  return (
    <div className='min-h-screen p-4'>
      <BackButton />

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">Your cart is empty 🛒</p>
      ) : (
        <div className='flex flex-col gap-4'>
          {/* Cart Items */}
         {cart.map((item, index) => (
  <div
    key={index}
    className='bg-orange-200 shadow-md rounded-md p-4 flex items-center justify-between flex-wrap gap-4'
  >
    {/* Left: Image + Details */}
    <div className='flex items-center gap-4 flex-1'>
      {/* Image */}
      <div className='w-20 h-20 flex-shrink-0'>
        <img
          src={item.thumbnail}
          alt={item.title}
          className='w-full h-full object-contain rounded'
        />
      </div>

      {/* Title + Rating */}
      <div className='flex flex-col text-sm sm:text-base text-gray-800'>
        <span className='font-semibold break-words'>{item.title}</span>
        <span className='text-yellow-700'>⭐ {item.rating}</span>
      </div>
    </div>

    {/* Price + Delete */}
    <div className='flex items-center gap-4'>
      <span className='text-green-700 font-semibold text-sm sm:text-base'>
        $ {item.price}
      </span>
      <button
        onClick={() => removeCart(item.id)}
        className="text-red-600 hover:text-red-800 text-xl"
      >
        <MdDeleteOutline />
      </button>
    </div>
  </div>
))}


          {/* Total & Buy Button */}
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-6'>
            <h1 className='bg-black text-white px-6 py-3 rounded text-lg'>
              Estimated Total: ${total.toFixed(2)}
            </h1>
            <button
              onClick={handleBuy}
              className='bg-black text-white text-lg hover:bg-zinc-800 px-6 py-2 rounded transition'
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
