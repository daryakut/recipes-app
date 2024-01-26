import { useEffect, useState } from "react";
import "./App.css";
// import Recipe from "./components/Recipe";
import Recipies from "./components/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) throw new Error("error by fetching data");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error(`this is my error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {recipes.length ? <Recipies recipes={recipes} /> : null}
    </div>
  );
}

export default App;
