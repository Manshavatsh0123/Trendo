import React, { useEffect } from 'react';
import { getData } from '../Context/DataContext';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Category';
import { useNavigate } from 'react-router-dom';
import { usecart } from '../Context/CardContext';

const Carusol = () => {

    const { data, fetchAllProducts } = getData();

    const navigate = useNavigate();

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const SamplePrevArrow = ({ className, style, onClick }) => {
        return (
            <div
                onClick={onClick}
                style={{
                    ...style,
                    position: "absolute",
                    left: -55,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 20,
                    width: 40,
                    height: 40,
                }}
                className="flex items-center justify-center bg-[#714329] text-white rounded-full shadow-lg hover:bg-[#B08463] cursor-pointer"
            >
                <AiOutlineArrowLeft className="w-full h-full flex items-center justify-center" size={22} />
            </div>
        );
    };

    const SampleNextArrow = ({ className, style, onClick }) => {
        return (
            <div
                onClick={onClick}
                style={{
                    ...style,
                    position: "absolute",
                    right: -55,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 20,
                    width: 40,
                    height: 40,
                }}
                className="flex items-center justify-center bg-[#714329] text-white rounded-full shadow-lg hover:bg-[#B08463] cursor-pointer"
            >
                <AiOutlineArrowRight className="w-full h-full flex items-center justify-center" size={22} />
            </div>
        );
    };

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };


    return (
        <div className="px-4 md:px-8 lg:px-[8%] py-6">
            <Slider {...settings}>
                {data?.slice(0, 7)?.map((item, index) => (
                    <div key={index} className="px-2 md:px-3">
                        <div className="relative bg-white border border-[#D0B9A7]/60 rounded-2xl shadow-lg transition-all p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-12 ">

                            <div className="relative flex-shrink-0 w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                                <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#D0B9A7]/30" />
                                {item.images?.[0] && (
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-md"
                                    />
                                )}
                            </div>

                            <div className="flex flex-col text-left flex-grow max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#714329] mb-2">
                                    {item.title}
                                </h3>

                                {item.category?.name && (
                                    <p className="text-sm md:text-base text-[#B5A192] italic mb-3">
                                        {item.category.name}
                                    </p>
                                )}

                                {item.price && (
                                    <p className="text-[#B08463] font-bold text-2xl md:text-3xl mb-4">
                                        ₹{item.price}
                                    </p>
                                )}

                                {item.description && (
                                    <p className="text-base md:text-lg text-[#374151] leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                )}

                                <div className="flex items-center gap-4">
                                    <button
                                        className="px-6 py-3 md:px-8 md:py-4 bg-[#714329] text-white rounded-full text-sm md:text-base font-semibold border border-[#714329] shadow-md hover:bg-white hover:text-[#714329] hover:border-[#D0B9A7]/50 transition-all transform"
                                        onClick={() => {
                                            navigate('/products');
                                        }}
                                    >
                                        Shop Now
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
            <Category />
        </div>
    )
}

export default Carusol