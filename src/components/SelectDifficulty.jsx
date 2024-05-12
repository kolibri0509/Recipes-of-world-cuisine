import React from "react";

const SelectDifficulty = ({selectedDifficulty}) => {

  return (
    <div className="select-difficulty">
      <label className="label-difficulty">Difficulty of <br /> preparation:</label>
      <div className="form_radio_group">
          <div className="form_radio_group-item">
            <input id="radio-1" className="radio" type="radio" name="radio" 
            onChange={(event)=>selectedDifficulty(event.target.value)} value="" defaultChecked></input>
            <label htmlFor="radio-1">Any</label>
          </div>
          <div className="form_radio_group-item">
            <input id="radio-2" type="radio" name="radio"
            onChange={(event)=>selectedDifficulty(event.target.value)} value="Easy"></input>
            <label htmlFor="radio-2">Easy</label>
          </div>
          <div className="form_radio_group-item">
            <input id="radio-3" type="radio" name="radio"
            onChange={(event)=>selectedDifficulty(event.target.value)} value="Medium"></input>
            <label htmlFor="radio-3">Medium</label>
          </div>
          <div className="form_radio_group-item">
            <input id="radio-4" type="radio" name="radio" value="Difficult" disabled></input>
            <label htmlFor="radio-4">Difficult</label>
          </div>            
      </div>
  </div>
  )
}

export default SelectDifficulty