import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Recipes from "./Recipes";

const HomePageCard = () => {
  const APP_ID = "c993a3bd";
  const APP_KEY = "785fda4c5a6157153e42e76874caefe1	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // Fetch data with useEffect once

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   );
  //   const data = await response.json();
  //   setRecipes(data.hits);
  //   console.log(data.hits);
  // };

  // Target event search

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  //  CLICK SEARCH FORM TO FETCH DATA

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);

    setSearch("");
  };

  // const exampleRequ = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    // <div className="menu">
    <Container>
      <Row>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            placeholder="Find a recipe"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <Button variant="light" size="sm" type="submit">
            Search
          </Button>
        </form>
      </Row>
      <Row>
        <div className="recipeContent">
          {recipes.map((recipe) => (
            <Recipes
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              cuisineType={recipe.recipe.cuisineType}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </Row>
    </Container>
    // </div>
  );
};

export default HomePageCard;
