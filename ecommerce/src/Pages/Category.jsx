import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom';


// Main functional component
const Category = () => {
  
  const { categoryName } = useParams();  // ← Get furniture / beauty / groceries

  // 📦 State variables
  const [products, setProducts] = useState([]); // Filtered product list (displayed on UI)
  const [allProduct, setAllProduct] = useState([]); // All products fetched from API (original backup)
  const [selectCategory, setSelectCategory] = useState("all"); // Currently selected category
  const [bgColor, setBgColor] = useState('bg-[#B76E79]'); // Dynamic background color based on category
  const [userInput, setUserInput] = useState(''); // Search input from user
  const [loading, setLoading] = useState(true); // Loading state while fetching data

  // 🎨 Category-specific background colors
  const categoryColorMap = {
    all: 'bg-[#B76E79]',
    beauty: 'bg-pink-200',
    fragrances: 'bg-purple-200',
    furniture: 'bg-yellow-100',
    groceries: 'bg-green-100',
  };

  // 📡 useEffect: Runs once when component loads to fetch data from API
 useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      setAllProduct(data.products);

      if (categoryName && categoryName !== 'all') {
        const filtered = data.products.filter(p => p.category === categoryName);
        setProducts(filtered);
        setSelectCategory(categoryName);
        setBgColor(categoryColorMap[categoryName] || 'bg-white');
      } else {
        setProducts(data.products);
        setSelectCategory('all');
        setBgColor(categoryColorMap['all']);
      }

      setLoading(false);
    });
}, [categoryName]);

  // 🧠 Category button click handler
  const handleCategory = (category) => {
    setSelectCategory(category);                        // Update selected category
    setBgColor(categoryColorMap[category] || 'bg-white'); // Change background

    if (category === "all") {
      setProducts(allProduct); // Show all products if "All" is selected
    } else {
      const filtered = allProduct.filter(p => p.category === category); // Filter based on category
      setProducts(filtered);
    }
  };

  // 🔍 Filter products based on search input (on title)
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(userInput.toLowerCase())
  );

  // ⏳ Loading UI
  if (loading) return <div className='text-center py-20'>Loading...</div>;

  // 📦 Final JSX UI return


  return (
    <div className={`w-full ${bgColor} flex flex-col  px-4 md:px-40 lg:px-40 `}>
      {/* 🔎 Search + ⏬ Category Dropdown */}
      <BackButton  />
      <div className="p-3 flex flex-col md:flex-row gap-4 justify-between items-center">

        {/* 🔍 Search Input */}
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Set user input on every keystroke
          placeholder="Search products..."
          className="px-4 py-2 w-full md:w-1/2 rounded border border-gray-300 shadow-sm"
        />

        {/* ⏬ Category Dropdown Menu */}
        <details className="relative group md:w-auto">
          <summary className="cursor-pointer select-none list-none font-semibold text-lg md:text-xl bg-gray-100 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition">
            Category
          </summary>

          {/* 📁 Category Buttons List */}
          <ul className="absolute left-0 mt-2 w-52 max-h-64 overflow-y-auto shadow-lg rounded-md border border-gray-200 z-50
                        flex flex-col gap-2 p-3
                        md:static md:w-auto md:flex-row md:gap-3 md:p-0 md:border-0 md:shadow-none">
            {/* 🌀 Loop through each category and create a button */}
            {["all", "beauty", "fragrances", "furniture", "groceries"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className="w-full md:w-auto text-left md:text-center rounded-md bg-zinc-600 hover:bg-zinc-500 text-white px-3 py-2 transition"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </ul>
        </details>
      </div>

      {/* 🖼 Product Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto  max-w-screen-xl mt-6">

        {/* 📄 If filtered products exist, map and display them */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="transform hover:scale-105 transition duration-300">
              <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full">
                
                {/* 🖼 Image */}
                <div className="h-42 md:h-56 w-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                  
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-contain h-full w-full"
                    loading="lazy"
                  />
                </div>

                {/* 💵 Price */}
                <div className="px-4">
                  <h2 className="text-lg font-semibold text-gray-700">${product.price}</h2>
                </div>

                {/* 📌 Title */}
                <div className="px-4 h-8 overflow-hidden">
                  <h3 className="text-md font-medium text-gray-800 break-words">{product.title}</h3>
                </div>

                {/* ⭐ Rating */}
                <div className="px-4 h-10 overflow-hidden">
                  <h3 className="font-medium text-sm text-yellow-500 break-words">⭐{product.rating}</h3>
                </div>

                {/* 🔘 Button */}
                <div className="px-4 pb-4">
                  <button className="w-full bg-black text-white py-2 rounded hover:brightness-110 transition">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          // ❌ No matching products found
          <div className=" text-center text-gray-700 text-lg">No products found</div>
        )}
      </div>
    </div>
  );
};

export default Category;
