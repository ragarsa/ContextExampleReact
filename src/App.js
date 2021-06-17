import React from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriesProvider from './context/CategoriaContext';
import RecipesProvider from './context/RecetasContext';
import RecipesList from './components/RecipesList';
import ModalProvider from './context/ModalContext';


function App() {

  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <RecipesList />
          </div>
          </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
      );
}

      export default App;
