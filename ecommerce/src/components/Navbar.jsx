import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { IoIosCart } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const {cart}=useCart()

  const options = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="shadow-md p-3 flex px-20 bg-zinc-900 text-white justify-between items-center relative">
        {/* Logo */}
        <div>
         <Link to={'/'}><h1 className="font-semibold  mf-40 text-xl">Krishna</h1></Link> 
        </div>

        {/* Dropdown Menu */}
        <div 
        whileHover={{scale:1.05}}
        className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-md flex   font-semibold"
          >
            
            <h1>Menu</h1>
           <h1 className='border-none text-2xl'><IoMdArrowDropdown /></h1>
          </button>
          

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
              {options.map((option, index) => (
                <li key={index} className="border-b last:border-none">
                  <Link
                    to={option.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-100 text-gray-700"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart Link */}
        <motion.div 
        whileHover={{scale:1.05}}
        className=" flex gap-2 font-semibold">
          <Link to="/cart"><h1 className='text-2xl'><IoIosCart /></h1></Link>
          {cart.length > 0 && (
            <span className=''>{cart.length}</span>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
