import React, { useContext } from 'react';
import Recipes from './Recipes';
import { RecipesContext } from '../context/RecetasContext';



const RecipesList = () => {

    //Get data of recipes
    const { recipes } = useContext(RecipesContext)

    return (
        <div className="row mt-5">
            {
                recipes.map(recipe => {
                    return (
                        <Recipes
                            key={recipe.idDrink}
                            recipe={recipe}
                        />
                    )


                })
            }
        </div>



    );
}

export default RecipesList;