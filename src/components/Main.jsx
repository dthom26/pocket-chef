import { useState, useEffect, useRef } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "./ai";
import Hero from "./Hero";
import PopupModal from "./Popup";
import Header from "./Header";

function ChefApp() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true); // State for modal
  const recipeSection = useRef(null);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function handleClearAll() {
    setIngredients([]);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function removeIngredient(itemToRemove) {
    setIngredients(
      ingredients.filter((ingredient) => ingredient !== itemToRemove)
    );
  }

  return (
    <main>
      <Header toggleModal={toggleModal} />
      <Hero />
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="Enter at least 4 ingredients, e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
          removeIngredient={removeIngredient}
          handleClearAll={handleClearAll}
        />
      ) : null}
      {recipe && <Recipe recipe={recipe} />}
      {/* Render the modal */}
      <PopupModal isOpen={isModalOpen} onClose={toggleModal} />
    </main>
  );
}

export default ChefApp;
