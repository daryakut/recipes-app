/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import Recipe from "./Recipe";

export default function Recipes({ recipes }) {
  const [index, setIndex] = useState(0);

  const iAmGosha = useCallback(() => {
    console.log("hi");
  }, []);

  const showNextCard = useCallback(() => {
    if (index >= recipes.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }, [recipes.length, index]);

  const showPreviousCard = useCallback(() => {
    if (index <= 0) {
      setIndex(recipes.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  }, [recipes.length, index]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        showNextCard();
      } else if (event.key === "ArrowLeft") {
        showPreviousCard();
      }
    },
    [showNextCard, showPreviousCard]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="container">
      <Recipe key={recipes[index].id} recipe={recipes[index]} />
      <div className="btns">
        {" "}
        <button className="btn" onClick={showPreviousCard}>
          Previous
        </button>
        <button className="btn" onClick={showNextCard}>
          Next
        </button>
      </div>
    </div>
  );
}
