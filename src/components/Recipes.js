import React from "react";
import style from "../recipe.module.css";

const Recipes = ({ title, calories, image, cuisineType, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.cuisineType}>{cuisineType}</p>
      <p>{Math.round(calories)} Calories</p>
      <img className={style.image} src={image} alt="" />

      <ol className={style.ingredientes}>
        {ingredients &&
          ingredients.map((ingredient) => <li>{ingredient.text}</li>)}
      </ol>
    </div>
  );
};
export default Recipes;
