import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// creat context created
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5001/products");
                const products = response.data;
                console.log(products);
                setAllProducts(products)
                setMenProducts(products.filter((product) => product.sex == "male"));
                setWomenProducts(products.filter((product) => product.sex == "female"));
            } catch (error) {
                console.log("Error Fetching", error);
            } finally {
                console.log("axios completed");
            }
        };
        fetchData();
    }, []);
    return <ProductContext.Provider value={{allProducts, menProducts, womenProducts }}>{children}</ProductContext.Provider>;
};
