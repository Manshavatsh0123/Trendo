import React from 'react'
import { usecart } from '../context/CardContext'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const { cartItem, removeFromCart, increaseQty, decreaseQty } = usecart();
  const navigate = useNavigate();

  return (
    <div className="mt-24 mb-10 px-5">
      {cartItem.length > 0 ? (
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold text-2xl text-[#714329]">
            My Cart ({cartItem.length})
          </h1>

          <div className="mt-10 space-y-4">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="bg-[#f9f5f3] p-5 rounded-xl shadow-md flex items-center justify-between"
              >
                
                <div className="flex items-center gap-4">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover shadow"
                  />
                  <div>
                    <h1 className="w-[300px] line-clamp-2 font-semibold text-gray-800">
                      {item.title}
                    </h1>
                    <p className="text-lg font-bold text-[#714329]">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>

                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      className="px-3 py-1 bg-[#e6d7d1] text-[#714329] rounded-lg hover:bg-[#d9c3ba] transition"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-[#e6d7d1] text-[#714329] rounded-lg hover:bg-[#d9c3ba] transition"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex justify-end mt-8">
            <button
              className="bg-[#714329] text-white px-8 py-3 rounded-lg shadow hover:bg-[#5a3423] transition"
              onClick={() => navigate("/delivery")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-20">
          Your Cart is Empty 🛒
        </div>
      )}
    </div>
  );
};


export default Card