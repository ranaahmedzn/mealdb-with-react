import React from "react";

const Sidebar = ({ meal }) => {
  console.log(meal);
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="flex items-center gap-4">
      <img className="w-[60px] mb-3 rounded-full" src={strMealThumb} alt="" />
      <h4 className="font-bold">{strMeal}</h4>
    </div>
  );
};

export default Sidebar;
