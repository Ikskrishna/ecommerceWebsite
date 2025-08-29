import React from 'react'
import { motion } from "framer-motion";

const Badges = () => {
    return (
  <motion.div    initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
               style={{ margin: "100px 0", textAlign: "center" }} className="grid grid-cols-2 sm:grid-cols-2 md:flex md:justify-center md:items-center gap-6 md:gap-1 p-6 md:p-10">
  {[1, 2, 3, 4].map((num) => (
    <motion.div
      whileHover={{scale:1.05}}
      key={num}
      className="w-[30vw]  h-[40vw] md:w-[25vh] md:h-[30vh] flex justify-center items-center mx-auto"
    >
      <img
        src={`./badges/b${num}.png`}
        alt={`Badge ${num}`}
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
  ))}
</motion.div>


  )
}

export default Badges
