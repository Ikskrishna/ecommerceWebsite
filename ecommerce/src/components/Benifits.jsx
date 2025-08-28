import React from 'react'
import {motion} from 'framer-motion'

const Benifits = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
      style={{ margin: "100px 0", textAlign: "center" }}>


      <section className="max-w-6xl mx-auto px-4 py-16 bg-orange-300 shadow-xl mb-5 rounded-lg ">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <motion.div whileHover={{scale:1.10}}> 
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="font-semibold mb-1  ">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50.</p>
          </motion.div>
          <motion.div whileHover={{scale:1.10}}>
            <div className="text-4xl mb-2">💳</div>
            <h3 className="font-semibold mb-1 ">Secure Payments</h3>
            <p className="text-gray-600">100% protected payment gateway.</p>
          </motion.div>

          <motion.div whileHover={{scale:1.10}}>
            <div className="text-4xl mb-2">🔄</div>
            <h3 className="font-semibold mb-1 ">Easy Returns</h3>
            <p className="text-gray-600">30-day hassle-free returns.</p>
          </motion.div>
        </div>
      </section>
      
    </motion.div>
  )
}

export default Benifits
