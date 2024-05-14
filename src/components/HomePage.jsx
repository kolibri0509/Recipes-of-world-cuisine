import React from "react"
import { useState } from "react"
import Recipe from '../components/Recipe'
import Pagination from '../components/Pagination'
import SelectCuisine from '../components/SelectCuisine' 
import SelectTypeOfDish from '../components/SelectTypeOfDish'
import { Link } from "react-router-dom"
import SelectDifficulty from "./SelectDifficulty"
import Main_img from "../assets/main_img.jpg"

const HomePage = ( {recipes, loading, currentPage, setCurrentPage }) => {

  const [recipesPerPage] = useState(6)
  const [cuisine, setCuisine] = useState('')
  const [mealType, setMealType] = useState('')
  const [difficulty, setDifficulty] = useState('')

  const lastRecipeIndex = currentPage*recipesPerPage
  const firstRecipeIndex = lastRecipeIndex-recipesPerPage

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const nextPage = () => {
    if(currentPage < (recipes.length/recipesPerPage)){
    setCurrentPage(prev => prev + 1)
    }
  }
  const prevPage = async () => {
    if(currentPage > 1){
    await setCurrentPage(prev => prev - 1)
    }
  }

  const arrId = recipes.map(recipe => recipe.id)
  const id = arrId[Math.ceil(Math.random(arrId)*recipes.length)]

  const selectedCuisine = (value) => {
    setCuisine(value)
  }

  const selectedMealType = (value) => {
    setMealType(value)
  }

  const selectedDifficulty = (value) => {
    setDifficulty(value)
    console.log(difficulty)
  }

  const filteredRecipes = recipes.filter(item => {

    if (cuisine && mealType && difficulty) {
      return item.cuisine === cuisine && item.mealType.includes(mealType)
              && item.difficulty === difficulty
    }
    else if (cuisine && mealType) {
      return item.cuisine === cuisine && item.mealType.includes(mealType)
    }
    else if (cuisine && difficulty) {
      return item.cuisine === cuisine && item.difficulty === difficulty
    }
    else if (mealType && difficulty) {
      return item.mealType.includes(mealType) && item.difficulty === difficulty
    }
    else if (cuisine) {
      return item.cuisine === cuisine
    }
    else if (mealType) {
      return item.mealType.includes(mealType) 
    }
    else if (difficulty) {
      return item.difficulty === difficulty
    }
    else {
      return recipes
    }
  })

  const currentRecipe = filteredRecipes.slice(firstRecipeIndex, lastRecipeIndex)
    
  console.log(filteredRecipes)

  const resetFilters = () => {
    setCuisine('')
    setMealType('')
    setDifficulty('')
  }

  return (
      <div className="container">
        <h2 className="container-header">A collection of recipes from around the world</h2>
        <div className="container-filters">
          <img className="container-img" src={Main_img} alt="" />
          <p className="descriptions">In our lives, as time becomes an increasingly valuable resource,
            the task of planning meals becomes increasingly difficult.
          </p>
          <p className="descriptions">We often face a dilemma: what to cook for breakfast, lunch or dinner?
            How can we easily and quickly decide on the choice of dish
              and not spend a lot of time making this decision? 
          </p>
          <p className="descriptions">
            Our service will help: choose the parameters - and go! 
          </p>            
          <form id="some-form">
            <SelectCuisine recipes={recipes} selectedCuisine={selectedCuisine}/> <br />
    
            <SelectTypeOfDish recipes={recipes} selectedMealType={selectedMealType}/> <br />

            <SelectDifficulty selectedDifficulty={selectedDifficulty}></SelectDifficulty> <br />
            <button className="reset" type="reset" from="some-form"
            onClick={resetFilters}>Reset all filters</button>  
          </form>                     
          <p className="luck">You can also try the taste for luck</p> <br />
          <Link to={`recipes/${id}`} className="btn link">I'll be lucky!</Link>
        </div>
        <div className="container-content">
          <h3 className="container-content-img"><span>{filteredRecipes.length} </span>{filteredRecipes.length > 1 ? "Recipes" : "Recipe"} found</h3> 
          <div className="recipes">
            <Recipe loading={loading} recipes={currentRecipe}/>
          </div>    
          <div>
            <Pagination recipesPerPage={recipesPerPage} prevPage={prevPage}
              totalRecipes={(cuisine || mealType || difficulty)? filteredRecipes.length : recipes.length} paginate={paginate} nextPage={nextPage}/></div>
          </div>        
        </div>
  )
}
export default HomePage
