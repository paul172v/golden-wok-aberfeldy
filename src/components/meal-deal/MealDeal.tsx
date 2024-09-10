import classes from "./MealDeal.module.scss";

interface IProps {
  mealAPrice: number;
  mealAItems: string[];
  mealBPrice: number;
  mealBItems: string[];
}

const MealDeal = (props: IProps) => {
  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["box-wrapper"]}>
        <h2 className={classes.heading}>Meal Deal</h2>
        <h3 className={classes["sub-heading"]}>Set Meal A (For 2 Persons)</h3>
        <p className={classes.price}>£{props.mealAPrice.toFixed(2)}</p>
        <p className={classes["tertiary-heading"]}>Chef's Combo</p>
        <p className={classes.list}>{props.mealAItems.join(" / ")}</p>
        <h3 className={classes["sub-heading"]}>Set Meal B (For 3 Persons)</h3>
        <p className={classes.price}>£{props.mealBPrice.toFixed(2)}</p>
        <p className={classes.list}>{props.mealBItems.join(" / ")}</p>
      </div>
    </div>
  );
};

export default MealDeal;
