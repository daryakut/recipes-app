/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

export default function Recipes({ recipes }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        showNextCard();
      } else if (event.key === "ArrowLeft") {
        showPreviousCard();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showNextCard, showPreviousCard]);

  console.log(recipes);

  function showNextCard() {
    if (index + 1 >= recipes.length) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }
  function showPreviousCard() {
    if (index - 1 < 0) {
      setIndex(recipes.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="container">
      <Recipe key={recipes[index].id} recipe={recipes[index]} />
      <div className="btns">
        {" "}
        <button className="btn" onClick={showNextCard}>
          Previous
        </button>
        <button className="btn" onClick={showPreviousCard}>
          Next
        </button>
      </div>
    </div>
  );
}

// const o = { x: 1, y: 2 };
// const x = 5;
// const n = 1;
// function f1(input) {
//   console.log(input.x);
// }

// const o2 = { n }; // { n: n }
// const { y } = o;

// function f2({ x }) {
//   console.log(x);
// }
// f2(o); // prints 1
// f2({x}); // prints 5
