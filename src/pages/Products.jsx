import React, { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const Products = () => {
  const { data, fetchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 100]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllProducts().finally(() => setLoading(false));
  }, []);

  const handleCategorychange = (e) => {
    const value = e.target.value;
    setCategory(value);
    console.log(value);
  };

  const filteredData = data?.filter((item) => {
    const itemCategory =
      typeof item.category === "string"
        ? item.category
        : item.category?.name || "";

    const matchSearch = search
      ? item.title?.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchCategory = category
      ? itemCategory.toLowerCase() === category.toLowerCase()
      : true;

    const matchPrice =
      item.price >= price[0] && item.price <= price[1];

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <>
      <SignedIn>
        <div className="mt-24 mb-10 px-5">
          <div className="max-w-7xl mx-auto flex gap-8">
            <aside className="hidden md:block w-64">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                price={price}
                setPrice={setPrice}
                handleCategorychange={handleCategorychange}
              />
            </aside>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 flex-1">
              {loading ? (
                <div className="col-span-full text-center">Loading...</div>
              ) : filteredData?.length > 0 ? (
                filteredData.map((product) => (
                  <ProductCard
                    key={product._id || product.id}
                    product={product}
                  />
                ))
              ) : (
                <div className="text-center col-span-full text-[#714329] font-medium">
                  No products found
                </div>
              )}
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Products;


