import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [error, setError] = useState(null);

  const getSingleProduct = async () => {
    if (!id || isNaN(Number(id))) {
      setError("Invalid product ID.");
      return;
    }

    try {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setSingleProduct(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Product not found or server error.");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="my-12 mt-25">
      {error ? (
        <p className="text-red-500 font-semibold text-center">{error}</p>
      ) : singleProduct ? (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-8">
          
          <div className="flex justify-center items-center">
            <img
              src={singleProduct.images?.[0]}
              alt={singleProduct.title}
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </div>

          
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {singleProduct.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {singleProduct.description}
            </p>
            <p className="text-3xl font-semibold text-[#714329]">
              ${singleProduct.price}
            </p>
            <p className="text-sm text-gray-500">
              Category:{" "}
              <span className="font-medium text-gray-700">
                {singleProduct.category?.name}
              </span>
            </p>

          
            <div className="flex gap-4 mt-6">
              <button className="bg-[#714329] text-white px-6 py-2 rounded-lg shadow hover:bg-[#5a3423] transition">
                Add to Cart
              </button>
              <button className="border border-[#714329] text-[#714329] px-6 py-2 rounded-lg hover:bg-[#f9f5f3] transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>

  );
};

export default SingleProduct;

