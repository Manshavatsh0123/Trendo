import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usecart } from "../context/CardContext"

const DeliveryPage = () => {
const { cartItem } = usecart()
  const navigate = useNavigate()

  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    payment: "cod", 
  })

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  
  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.address &&
    formData.payment

  const handleOrder = () => {
    if (!isFormValid) return
    
    navigate("/order-success") 
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 mb-10 px-5">
      <h1 className="text-2xl font-bold text-[#714329] mb-6">Checkout</h1>

      
      <div className="bg-[#f9f5f3] p-5 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        {cartItem.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-3">
            <p>{item.title} (x1)</p>
            <p className="font-semibold text-[#714329]">${item.price}</p>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span className="text-[#714329]">$123</span>
        </div>
      </div>

      
      <div className="bg-white p-5 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          ></textarea>
        </form>
      </div>

      
      <div className="bg-white p-5 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={formData.payment === "cod"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={formData.payment === "card"}
              onChange={handleChange}
            />
            Credit / Debit Card
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={formData.payment === "upi"}
              onChange={handleChange}
            />
            UPI / Wallets
          </label>
        </div>
      </div>

      
      <div className="flex justify-end">
        <button
          onClick={handleOrder}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-lg shadow transition ${
            isFormValid
              ? "bg-[#714329] text-white hover:bg-[#5a3423]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default DeliveryPage
