import {Link} from "react-router-dom"
import { motion } from "framer-motion";

const CategoryHome = () => {

  return (
      <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 drop-shadow-md text-center mb-6">
  Category
</h2>

    <div className=' p-2 flex bg-orange-200 shadow-md flex-col gap-2 py-10 px-[15vw]'>
      <div>
      </div>
      <div className=' gap-14 grid grid-cols-1  mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3' >

        <Link to={`/category/beauty`}>
        <motion.div whileHover={{scale:1.05}}><img  loading="lazy" src='./src/assets/Category/cospic.jpg' className=' shadow-xl rounded-md  w-80 h-64'/></motion.div></Link>

        <Link to={`/category/furniture`}>
        <motion.div whileHover={{scale:1.05}}><img  loading="lazy" src='./src/assets/Category/furniture.png' className=' shadow-xl rounded-md w-80 h-64'/></motion.div></Link>

        <Link to={`/category/groceries`}>
        <motion.div whileHover={{scale:1.05}}><img  loading="lazy" src='./src/assets/Category/foods.jpg' className=' shadow-xl rounded-md w-80 h-64'/></motion.div></Link>

      </div>
    </div>
  </>
  )
}

export default CategoryHome
