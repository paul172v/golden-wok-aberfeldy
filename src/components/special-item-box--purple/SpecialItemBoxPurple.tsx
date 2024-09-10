import classes from "./SpecialItemBoxPurple.module.scss";

interface IProps {
  number: number;
  title: string;
  description: string;
  price: number;
}

const SpecialItemBoxPurple = (props: IProps) => {
  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["box-wrapper"]}>
        <h2 className={classes.heading}>
          <span className="list-marker">{props.number}.</span>
          {`${props.title}`.padEnd(75, ".") + `£${props.price.toFixed(2)}`}
        </h2>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default SpecialItemBoxPurple;
