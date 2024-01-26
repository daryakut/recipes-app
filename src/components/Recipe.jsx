/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";

export default function Recipe({ recipe }) {
  const { name, image, ingredients, instructions } = recipe;
  console.log(recipe);
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <ul style={{ columnCount: 3, paddingLeft: "40px" }}>
        {ingredients.map((ingr, i) => (
          <li key={i}>{ingr}</li>
        ))}
      </ul>
      <ul style={{ listStyleType: "decimal", paddingLeft: "40px" }}>
        {instructions.map((instr, i) => (
          <li key={i}>{instr}</li>
        ))}
      </ul>
    </div>
  );
}
