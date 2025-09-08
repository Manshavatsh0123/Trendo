import React from 'react'
import { getData } from '../Context/DataContext';

const FilterSection = ({ search, setSearch, category, setCategory, price, setPrice ,handleCategorychange}) => {
  const { categories } = getData();

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 space-y-6 sticky top-24">
      <h3 className="text-lg font-bold text-[#714329] border-b pb-2">Filters</h3>

      
      <div>
        <h4 className="text-sm font-semibold text-[#B08463] mb-2">Search</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm pl-3 focus:ring-2 focus:ring-[#B08463] focus:outline-none"
          />
        </div>
      </div>

      
      <div>
        <h4 className="text-sm font-semibold text-[#B08463] mb-2">Category</h4>
        <div className="space-y-2 text-sm text-gray-700">
          {categories?.map((cat, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={handleCategorychange}
                className="accent-[#714329]"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      
      <div>
        <h4 className="text-sm font-semibold text-[#B08463] mb-2">Price</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-[#714329]"
        />
        <p className="text-xs text-gray-500 mt-1">Up to ₹{price}</p>
      </div>

      
      <div>
        <h4 className="text-sm font-semibold text-[#B08463] mb-2">Sort By</h4>
        <select
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-[#B08463] focus:outline-none"
        >
          <option>Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
