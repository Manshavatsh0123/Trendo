import React from 'react'
import banner from '../assets/Banner.jpeg'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
    const navigate = useNavigate()
    return (
        <div className="md:py-24">
            <div
                className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]'
                style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
            >

                <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 md:rounded-2xl flex items-center justify-center'>
                    <div className='text-center px-4'>

                        <h1 className="text-lg md:text-2xl lg:text-3xl font-extrabold mb-4 text-[#FFF8F0] leading-snug text-center">
                            Stylish <span className="text-[#FFD4A3]">Clothes</span>, Modern <span className="text-[#FFD4A3]">Furniture</span>,
                            Latest <span className="text-[#FFD4A3]">Electronics</span> & Trendy <span className="text-[#FFD4A3]">Shoes</span>
                        </h1>


                        <p className="text-white text-opacity-90 text-center text-sm md:text-base lg:text-lg mb-6 max-w-3xl mx-auto">
                            Explore our wide range of products with <span className="font-semibold text-[#B08463]"> unbeatable prices </span>
                            and <span className="font-semibold text-[#B08463]"> free shipping </span> on all orders.
                            Upgrade your lifestyle with <span className="font-semibold text-[#B08463]"> fashionable apparel </span>,
                            <span className="font-semibold text-[#D0B9A7]"> stylish furniture </span>, and <span className="font-semibold text-[#B08463]"> smart gadgets </span>!
                        </p>


                        <button
                            className="px-6 py-3 md:px-8 md:py-4 bg-[#714329] text-white rounded-full text-sm md:text-base font-semibold border border-[#714329] shadow-md hover:bg-white hover:text-[#714329] hover:border-[#D0B9A7]/50 transition-all transform"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MidBanner