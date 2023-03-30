import React, { useEffect, useState } from 'react';

const Home = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className='grid grid-cols-6 container mx-auto'>
            <div className='meals-container col-span-4 bg-red-500'>
                This is Meals container
            </div>

            <div className='sidebar-container col-span-2 bg-green-500'>
                This is Sidebar container
            </div>
        </div>
    );
};

export default Home;