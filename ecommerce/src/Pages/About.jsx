import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom';

const teams =[{id:1,name:"krishna",role:"CEO"},
              {id:2,name:"Arjun",role:"Marketing"},
              {id:3,name:"Dhruve",role:"Accountant"}
            ];
          
const About = () => {
  return (
    <div className="bg-orange-100  p-5 text-gray-800">
      <BackButton />
      {/* Hero Section */}
      <section className="bg-orange-200 py-16 px-6 shadow-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to [Your Brand Name] – your go-to destination for quality, style, and unbeatable value.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl overflow-hidden mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* <img 
            src="https://source.unsplash.com/600x400/?shopping,ecommerce"
            alt="Our Story"
            className="rounded-lg shadow-md"
          /> */}
          <motion.div    initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
               style={{ margin: "100px 0", textAlign: "center" }}
               className=''>

          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2021, [Your Brand Name] was born from a passion for exceptional products and top-tier service. What started as a small idea has grown into a full-fledged online store with thousands of happy customers around the globe.
          </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-orange-200 shadow-xl py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl text-zinc-500 font-semibold mb-4">Our Mission</h2>
          <p className="text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make online shopping seamless, sustainable, and satisfying. Whether you're browsing for fashion, electronics, or home goods, our goal is to offer only the best — and always with a smile.
          </p>
        </div>
      </section>

      
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
           
            {teams.map((team) => (
              <div key={team.id} className="bg-orange-200 p-4 rounded shadow">
                {/* <img 
                  src={""}
                 
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                /> */}
                <h3 className="text-lg font-medium">{team.name}</h3>
                <p className="text-sm text-gray-500">{team.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-orange-200 shadow-xl  py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6 text-gray-800">
          Stay connected with us for the latest updates, offers, and products.
        </p>
        <Link to={'/category'}>
        <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
          Shop Now
        </button> </Link>
      </section>
    </div>
  );
};

export default About;
