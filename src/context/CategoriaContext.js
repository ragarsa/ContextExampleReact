import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
//Crea Context

export const CategoryContext = createContext(); 

//Provider, de donde salen datos y funciones 
const CategoriesProvider = (props) => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {

        const getCategory = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const category = await axios.get(url);
            setCategory(category.data.drinks);
            
            
        }
        getCategory();
        
    }, [])


    return (
        <CategoryContext.Provider
            value = {{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoriesProvider;
