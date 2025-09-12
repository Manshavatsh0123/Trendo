import { createContext, useState } from "react";
import axios from 'axios';
import { useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {

    const [data, setData] = useState()

    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products');
            //console.log(res.data);
            const productsData = res.data;
            setData(productsData);
        } catch (error) {
            console.log(error);
        }
    }

    const getUniqueCategories = (data, property) => {
        const uniqueCategories = data
            ?.map(item => item[property]?.name || item[property]) 
            ?.filter((value, index, self) => self.indexOf(value) === index); 
        return uniqueCategories;
    };

    const categories = getUniqueCategories(data, 'category');
    return <DataContext.Provider value={{ data, setData, fetchAllProducts, categories }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);