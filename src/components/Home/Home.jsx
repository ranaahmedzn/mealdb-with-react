import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [meals, setMeals] = useState([])
    const [sidebarMeal, setSidebarMeal] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    const handleMealInfo = (singleMeal) => {
        const exists = sidebarMeal.find(meal => meal.idMeal === singleMeal.idMeal)
        if(exists){
            Swal.fire({
                title: 'Oops!',
                text: 'This Meal Already Added',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
        else{
            setSidebarMeal([...sidebarMeal, singleMeal])
        }
            
    }

    return (
        <div className='grid grid-cols-6 gap-4 container mx-auto'>
            <div className='grid grid-cols-2 gap-4 py-5 col-span-4'>
                {
                    meals.map(meal => <Meal 
                    key={meal.idMeal}
                    meal={meal}
                    handleMealInfo ={handleMealInfo}
                    ></Meal>)
                }
            </div>

            <div className='col-span-2 py-5'>
                <div className='bg-emerald-400 p-5 rounded-md'>
                    <h3 className='text-center font-bold text-2xl mb-7'>Your Meals</h3>
                    {
                    sidebarMeal.map(meal => <Sidebar
                    meal={meal}
                    ></Sidebar>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Home;