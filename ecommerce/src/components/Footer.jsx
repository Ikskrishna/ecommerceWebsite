import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer className="bg-zinc-900 text-gray-300 py-8 ">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-xl font-bold mb-2">IKS</h3>
            <p>Your favorite place to shop online.</p>
          </div>
          <div className="flex space-x-6">
            <Link to={'/about'}><h1 className='hover:gray-300 text-white'>About</h1></Link> 
            <Link to={'/contact'}><h1 className='hover:gray-300 text-white'>Contact</h1></Link>
            <Link to={'/privacypolicy'}><h1 className='hover:gray-300 text-white'>PrivacyPolicy</h1></Link> 
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
