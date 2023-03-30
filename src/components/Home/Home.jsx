import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className='grid grid-cols-6 gap-4 container mx-auto'>
            <div className='grid grid-cols-2 gap-4 py-5 col-span-4'>
                {
                    meals.map(meal => <Meal 
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>

            <div className='col-span-2 bg-green-500'>
                This is Sidebar container
            </div>
        </div>
    );
};

export default Home;