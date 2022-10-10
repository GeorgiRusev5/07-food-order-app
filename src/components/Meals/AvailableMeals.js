import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pasta Carbonara",
    description: "A creamy delight and a hearty meal",
    price: 15.99,
  },
  {
    id: "m2",
    name: "Caprese Salad with Pesto Sauce",
    description: "Healthy and delicous!",
    price: 19.5,
  },
  {
    id: "m3",
    name: "Mushroom Risotto",
    description: "For those that love the earthy taste of mushrooms",
    price: 16.99,
  },
  {
    id: "m4",
    name: "Focaccia Bread",
    description: "Simple, yet amazing!",
    price: 7.99,
  },
  {
    id: "m5",
    name: "Margherita Pizza",
    description: "A staple of the Italian Cuisine!",
    price: 13.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
