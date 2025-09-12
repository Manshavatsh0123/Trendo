import React from "react";

const Pagination = ({ currentPage, pageHandler, dynamicPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) pageHandler(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < dynamicPage) pageHandler(currentPage + 1);
  };

  return (
    <div className="mt-10 flex items-center justify-center space-x-2">
      
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#714329] text-white hover:bg-[#5a3423]"
        }`}
      >
        Prev
      </button>

     
      {Array.from({ length: dynamicPage }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => pageHandler(num)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentPage === num
              ? "bg-[#714329] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-[#e5d3c4]"
          }`}
        >
          {num}
        </button>
      ))}

      
      <button
        onClick={handleNext}
        disabled={currentPage === dynamicPage}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          currentPage === dynamicPage
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-[#714329] text-white hover:bg-[#5a3423]"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
