import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f5f3] px-5">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-[#714329] mb-4">
          🎉 Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with us. Your order is confirmed and will be
          delivered soon.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="block bg-[#714329] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5a3423] transition"
          >
            Continue Shopping
          </Link>
          <Link
            className="block border border-[#714329] text-[#714329] px-6 py-3 rounded-lg hover:bg-[#f1e7e2] transition"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
