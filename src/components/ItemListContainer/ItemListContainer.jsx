import { useState, useEffect } from "react";
import { getProducts } from '../asyncMock.jsx'
import { ItemList } from '../ItemList/ItemList.jsx'
import {useParams} from 'react-router-dom'
import { getProductById } from "../asyncMock.jsx";

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const { CategoryId} = useParams ()


        useEffect(() => {
            const asyncFunc = CategoryId ? getProductById : getProducts

            asyncFunc(CategoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.error(error)
                })
        }, [CategoryId])

    
    
    
    
    
    
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products= {products} />  
        </div>
    );
}


