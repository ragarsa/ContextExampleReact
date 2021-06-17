import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoriaContext';
import { RecipesContext } from '../context/RecetasContext';

const Formulario = () => {


    const [search, setSearch] = useState({
        name:'',
        category: ''
    })

    const { categories } = useContext(CategoryContext);
    const {setSearchRecipes, setQuery} = useContext(RecipesContext);

    //Read content
    const getRecipe = e => {
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        })
    }


    return (
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                setSearchRecipes(search);
                setQuery(true)
            }}
            >
            <fieldset className="text-center">
                <legend> Busca bebidas por Categoría o Ingrediente </legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={getRecipe}
                    >
                    </input>
                </div>

                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getRecipe}
                    >
                        <option value="">
                            --Selecciona Categoría--
                        </option>

                        {categories.map(category => 
                            (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}>
                                    {category.strCategory}
                                </option>
                            ))}

                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search for drinks"
                    >
                    </input>
                </div>
            </div>

        </form>
    );
}

export default Formulario;