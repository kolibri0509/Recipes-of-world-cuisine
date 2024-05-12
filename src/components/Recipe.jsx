import React from "react";
import Timer from "../assets/timer.png"
import Star_empty from "../assets/star_empty.png"
import Star from "../assets/star.png"
import { Link } from "react-router-dom";

const Recipe = ({recipes, loading }) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <ul className="list-group">{recipes.map(recipe => 
      <li className="list-group-item" key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`} className="link">
          <div className="recipe-card">
            <div className="recipe-card-block_1">
              <h4 className="recipe-card-name">{recipe.name}</h4>
              <img className="recipe-card-img" src={recipe.image} alt="recipe" />
            </div>
            <div className="recipe-card-block_2">
              <p className="card-block_2-description">This dish of traditional <br />
              cuisine has an exquisite <br /> refined taste and aroma.</p>
              <div className="timer">
                <img src={Timer} alt="timer" className="timer-img"/>
                <p className="timer-p">{recipe.prepTimeMinutes} minutes </p>
              </div>
              <div className="star">
                <p className="star-p">Difficulti: </p>
                {(recipe.difficulty === "Easy") && 
                <div>
                  <img src={Star} alt="star" />
                  <img src={Star_empty} alt="star_empty" />
                  <img src={Star_empty} alt="star_empty" />
                </div>
                } 
                {(recipe.difficulty === "Medium") && 
                <div>
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star_empty} alt="star_empty" />
                </div>
                } 
                </div>
              <div className="cuisine">{recipe.cuisine} cuisine</div> 
              <div className="mealtype">{recipe.mealType.join(', ')}</div>
            </div>
          </div>  
        </Link>                      
      </li>
  )            
}
    </ul>)
}

export default Recipe