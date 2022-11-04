import React, { useState, useEffect } from 'react'

export default function Details() {

    const [meal, setMeal] = useState()


    const plate = async () =>  {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772)')
        const json = await response.json()
        setMeal({...json})

    }

    useEffect(() => {
        
        plate()
      
      }, [])

  return (
    <div>
       { meal && <div>
       <h1>Titolo: { meal.strMeal}</h1>
       <h4>Cuisine: {meal.strArea}</h4>
        <p>Preparazione: { meal.strInstructions}</p>
        {/* <img src={meal.strMealThumb} ></img> */}
       </div>}

    </div>
  )
}
