import React from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {

    const { data } = getData();

    const getUniqueCategories = (data, property) => {
        const uniqueCategories = data
            ?.map(item => item[property]?.name || item[property]) // get name if object
            ?.filter((value, index, self) => self.indexOf(value) === index); // keep unique
        return uniqueCategories;
    };

    const categories = getUniqueCategories(data, 'category');
    console.log(categories);

    return (
        <div className="w-full mt-4 py-4">
            <div className="max-w-full mx-auto flex flex-wrap justify-between gap-4 px-4 md:px-6">
                {categories?.length > 0 ? (
                    categories.map((category, index) => (
                        <button
                            key={index}
                            className="flex-1 text-center text-[#714329] bg-white border border-[#D0B9A7]/50 text-sm md:text-base font-semibold whitespace-nowrap px-5 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-[#714329] hover:text-white transition transform "
                        >
                            {category}
                        </button>
                    ))
                ) : (
                    <p className="text-[#714329] text-sm w-full text-center">Loading categories...</p>
                )}
            </div>
        </div>


    )
}

export default Category