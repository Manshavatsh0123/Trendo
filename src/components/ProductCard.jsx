import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div
      key={product._id || product.id}
      className="bg-white border border-[#eee] rounded-lg shadow-sm p-3 flex flex-col hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
    >

      {product.images?.[0] && (
        <img
        onClick={()=>navigate(`/products/${product.id}`)}
          src={product.images[0]}
          alt={product.title}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
      )}


      <h2 className="text-sm font-semibold text-[#714329] truncate">
        {product.title}
      </h2>


      {product.category?.name && (
        <p className="text-xs text-[#B08463] italic mb-1">
          {product.category.name}
        </p>
      )}


      <div className="mt-auto flex items-center justify-between">
        {product.price && (
          <p className="text-base font-bold text-[#714329]">₹{product.price}</p>
        )}
        <button className="p-2 bg-[#714329] text-white rounded-full shadow hover:bg-[#B08463] transition">
          <IoCartOutline className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
