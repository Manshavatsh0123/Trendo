import React, { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Pagination from "../components/Pagination";

const Products = () => {
  const { data, fetchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(100);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllProducts().finally(() => setLoading(false));
    window.scrollTo(0,0)
  }, []);

  const handleCategorychange = (e) => {
    const value = e.target.value;
    setCategory(value);
    console.log(value);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

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

    const matchPrice = item.price <= price;

    return matchSearch && matchCategory && matchPrice;
  });

  const dynamicPage = Math.ceil(filteredData?.length / 12);


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
                <>
                  {filteredData
                    .slice(page * 12 - 12, page * 12)
                    .map((product) => (
                      <ProductCard
                        key={product._id || product.id}
                        product={product}
                      />
                    ))}
                  <div className="col-span-full flex justify-center mt-4">
                    <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage}/>
                  </div>
                </>
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


