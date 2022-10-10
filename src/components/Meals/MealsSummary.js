import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Most amazing meals from all of Italy </h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and feel the magical aroma, before your order is at your doorstep.
      </p>
      <p>
        Our meals are made with love by Vito and he uses only the finest and
        freshest ingredients to make your favourite dishes!
      </p>
    </section>
  );
};

export default MealsSummary;
