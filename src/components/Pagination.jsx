import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({recipesPerPage, totalRecipes, paginate, prevPage, nextPage}) => {
  const pageNumbers = []

  for (let i=1; i<= Math.ceil(totalRecipes/recipesPerPage); i++){
    pageNumbers.push(i)
  }
  return (
  <div className="pagination pagination-block">
    <button className="pagination-btn" onClick={()=>prevPage()}>Prev Page</button>
    <div>
      <ul className="pagination">
      {pageNumbers.map(number => (
        <Link className="link pagination-btn" onClick={() => paginate(number)} key={number}>
          <li key={number}>
            {number}
          </li>
        </Link>
    )
  )
}
      </ul>
    </div>
    <button className="pagination-btn" onClick={()=>nextPage()}>Next Page</button>
  </div>
  )
}

export default Pagination