import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';



function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        maxHeight: 500, 
        display: 'block'
    },
}));


const Recipes = ({ recipe }) => {

    //Modal from material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    //Extract the recipe
    const { recipeDrink, setIdRecipe, setRecipeDrink } = useContext(ModalContext);
    
    const showIngredients = recipeDrink => {
        let ingredients = [];

        for(let i=1; i<16; i++){
            if (recipeDrink[`strIngredient${i}`]) {
                ingredients.push(
                    <li>
                        {recipeDrink[`strIngredient${i}`]} {recipeDrink[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients
    }
    
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {recipe.strDrink}
                </h2>
                <img
                    className="card-img-top"
                    src={recipe.strDrinkThumb}
                    alt={`Imagen de ${recipe.strDrink}`}
                />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => { setIdRecipe(recipe.idDrink);
                                        handleOpen();
                        }}
                    >
                        Details

                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdRecipe(null);
                            setRecipeDrink({})
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeDrink.strDrink}</h2>
                            <h3 className="mt-4">
                                Instrucciones
                            </h3>
                            <p>{recipeDrink.strInstructions}</p>
                            <img className="img-fluid my-4" src={recipeDrink.strDrinkThumb} alt="Imagen"/>
                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                { showIngredients(recipeDrink) }
                            </ul>
                        </div>
                    </Modal>
                </div>

            </div>
        </div>
    );
}

export default Recipes;