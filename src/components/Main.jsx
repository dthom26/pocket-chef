import { useState, useEffect, useRef } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "./ai";
import Hero from "./Hero";

function ChefApp() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

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
    </main>
  );
}

export default ChefApp;
