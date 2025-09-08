import { createContext, useState } from "react";
import axios from 'axios';
import { useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {

    const [data, setData] = useState()
   
    const fetchAllProducts = async () =>{
        try {
           const res = await axios.get('https://api.escuelajs.co/api/v1/products');
           console.log(res.data);
           const productsData = res.data;
           setData(productsData);
        } catch (error) {
            console.log(error);
        }
    }
    return <DataContext.Provider value={{ data, setData ,fetchAllProducts}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);