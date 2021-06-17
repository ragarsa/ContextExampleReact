import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';


export const RecipesContext = createContext();

const RecipesProvider = (props) => {
    
    const [recipes, setRecipes] = useState([])

    const [searchRecipes, setSearchRecipes] = useState({
        name: '',
        category: ''
    })

    const [query, setQuery] = useState(false);

    const {name, category} = searchRecipes

    useEffect(() => {
        
        
        if (query) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const recipes = await axios.get(url); 
                // console.log(recipes.data.drinks);
                setRecipes(recipes.data.drinks);
            }

        getRecipes();

        



        }


    },[searchRecipes])
    
    return (
        <RecipesContext.Provider
            value = {{
                recipes,
                setSearchRecipes,
                setQuery
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );

};

export default RecipesProvider;