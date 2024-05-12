import React from "react";

const SelectTypeOfDish = ({recipes, selectedMealType}) => {

  const types = recipes.map((recipe) => (
    recipe.mealType
  )
)
  const arr = types.flat()
  const uniquetypes = [...new Set(arr)]

  return (
    <>
      <label>Type of dish:
        <select defaultValue="All types" onChange={(event)=> selectedMealType(event.target.value)}>
          <option value="">All types</option>
            {uniquetypes.map(type => (
          <option value={type} key={type}>{type}</option>
    )
  )
}
        </select>
      </label>
    </>
  )
}

export default SelectTypeOfDish