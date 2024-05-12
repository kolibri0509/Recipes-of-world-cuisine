import React from "react";
import { Link } from "react-router-dom";

const RecipePage = ({recipe}) => {

  return (
    <div className="container_2" key={recipe.id}>
      <div className="container_2-header">
        <Link className="back-link-header" to="/">&#x2190;</Link>
        <h3> {recipe.name}</h3>
      </div>
      <div className="container_2-cuisine">
        <p className="bold padding">Cuisine</p>
        <hr></hr>
        <p className="padding">{recipe.cuisine}</p>
      </div>
      <div className="container_2-tags">
        <p className="bold padding">Tags</p>
        <hr></hr>
        <ul>{recipe.tags.map(t => <li className="padding" key={t}>#{t}</li>)}</ul>
      </div>
      <div className="container_2-calories">
        <p className="bold padding">Calorie content</p>
        <hr></hr>
        <div>
          <p className="bold calories">{recipe.caloriesPerServing} kcal</p>
          <p className="gramm">100g</p>
        </div>
      </div>
      <div className="container_2-servings">
        <p className="bold padding">Number of servings</p>
        <hr></hr>
        <p className="bold padding">{recipe.servings}</p>
      </div>
      <div className="container_2-descriptions">
        <p className="bold padding">Description</p>
        <hr></hr>
        <p className="padding">This dish of traditional cuisine has an exquisite <br /> refined taste and aroma.</p>
        {/* <ul className="padding">{recipe.instructions.map(r=><li className="descriptions-list" key={r}>{r}</li>)}</ul> */}
      </div>
      <div className="container_2-time">
        <p className="bold padding">Total cooking time</p>
        <hr></hr>
        <p className="padding">{recipe.prepTimeMinutes} minutes</p>
      </div>
      <div className="container_2-instructions">
        <p className="bold padding">Cooking Instructions</p>
        <hr></hr>
        <ul className="padding">{recipe.instructions.map(r=><li className="li-style" key={r}><span>{r}</span></li>)}</ul>
      </div>
      <div className="container_2-image">
        <img className="recipe-image"src={recipe.image} alt="dish_image" />
        <Link to="/" className="back-link"><div className="container_2-image-link">Back to the recipe list</div></Link>
      </div>
    </div>       
)
}
export default RecipePage