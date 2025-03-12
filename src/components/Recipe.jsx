import React from "react";
import ReactMarkdown from "react-markdown";

function Recipe({ recipe }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Recommendation</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}

export default Recipe;
