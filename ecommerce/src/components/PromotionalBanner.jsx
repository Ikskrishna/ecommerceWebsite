import React from "react";
import { hover, motion, scale } from "framer-motion";

const promotions = [
  {
    title: "🎉 Festival Sale",
    subtitle: "Flat 50% Off on all products!",
    color: "bg-pink-500",
  },
  {
    title: "💸 Use Code: SAVE20",
    subtitle: "Get 20% extra off with this coupon.",
    color: "bg-indigo-500",
  },
  {
    title: "⏰ Limited Time Offer",
    subtitle: "Offer ends in 2 hours!",
    color: "bg-yellow-400 text-black",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 5, ease: "easeOut" },
  },
};

const PromotionalBanner = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-12 px-4"
      
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {promotions.map((promo, index) => (
        <motion.div
          key={index}
           whileHover={{ scale: 1.05 }}
          variants={itemVariants}
          className={`backdrop-blur-md rounded-lg p-6 text-white mb-6   shadow-md ${promo.color}`}
        >
          <h2 className="text-2xl font-bold">{promo.title}</h2>
          <p className="mt-2 text-lg">{promo.subtitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PromotionalBanner;
