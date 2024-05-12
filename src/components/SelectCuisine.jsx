import React from "react";

const SelectCuisine = ({recipes, selectedCuisine}) => {

const cuisines = recipes.map((recipe) => recipe.cuisine)
const uniqueCuisines = [...new Set(cuisines)]

  return (
    <>
      <label>Cuisine:
        <select defaultValue="All countries and regions" onChange={(event)=>selectedCuisine(event.target.value)}>
          <option value="">All countries and regions</option>
          {uniqueCuisines.map(cuisine => (
          <option value={cuisine} key={cuisine}>{cuisine}</option>
    )
  )
}
        </select>
      </label>
    </>
  )
}

export default SelectCuisine