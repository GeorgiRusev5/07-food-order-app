import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./AvailableMeals.module.css";



const AvailableMeals = () => {

  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    const fetchMeals = async() =>{  //we create another function in useEffect, because the anonymous function cannot be asynchronous. This is a workaround 
      setIsLoading(true);
    const response = await fetch('https://react-http-food-order-ap-73e1a-default-rtdb.europe-west1.firebasedatabase.app/meals.json'); // default GET request
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

    const responseData = await response.json();

    const transformedMeals = [];
    for (const key in responseData){
      transformedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      })
    }

    setMeals(transformedMeals);
    setIsLoading(false);
    }

      fetchMeals().catch(error => {
        setIsLoading(false);
        setError(error.message);  
      });
    
  }, [])

  if(isLoading){
  return(
  <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
    )
  }

  if(error !== null){
    return <section className={classes.mealsError}>
    <p>{error}</p>
  </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
