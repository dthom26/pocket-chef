export default function IngredientsList({
  ingredients,
  getRecipe,
  ref,
  removeIngredient,
}) {
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li className="ingredient" key={ingredient}>
      {ingredient}{" "}
      <button
        className="remove-btn"
        onClick={() => removeIngredient(ingredient)}
      >
        x
      </button>
    </li>
  ));
  return (
    <section>
      <h2 className="header-for-ingredients-on-hand">Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div ref={ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
