import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const ModalContext = createContext();



const ModalProvider = (props) => {

    const [ idRecipe, setIdRecipe ] = useState(null);
    const [recipeDrink, setRecipeDrink] = useState({});
    
    useEffect(() => {
        
        (async function () {
            if (!idRecipe) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
            const detail = await axios.get(url)
            setRecipeDrink(detail.data.drinks[0]);
        }())
        

    }, [idRecipe])

    return (
        <ModalContext.Provider
            value = {{
                recipeDrink,
                setIdRecipe,
                setRecipeDrink
                
            }}>
                {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;