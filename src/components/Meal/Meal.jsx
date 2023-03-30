import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Meal = ({ meal, handleMealInfo }) => {
//   console.log(meal);
  const { strMeal, strMealThumb, strInstructions } = meal;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={strMealThumb} className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{strMeal}</h2>
        <p>{strInstructions.slice(0, 75)}...</p>
        <div className="card-actions">
          <button onClick={() => handleMealInfo(meal)} className="btn btn-success mt-3">
            Add Meal &nbsp;
            <FontAwesomeIcon icon={faAdd} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
