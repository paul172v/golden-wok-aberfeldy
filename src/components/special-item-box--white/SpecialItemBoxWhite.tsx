import classes from "./SpecialItemBoxWhite.module.scss";

interface IProps {
  number: number;
  title: string;
  description?: string;
  price?: number;
  listItem1?: {
    size: string;
    price: number;
  };
  listItem2?: {
    size: string;
    price: number;
  };
  listItem3?: {
    size: string;
    price: number;
  };
}

const SpecialItemBoxWhite = (props: IProps) => {
  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["box-wrapper"]}>
        {props.price ? (
          <h2 className={classes.heading}>
            <span className="list-marker">{props.number}.</span>
            {`${props.title}`.padEnd(75, ".") + `£${props.price.toFixed(2)}`}
          </h2>
        ) : (
          <h2 className={classes.heading}>
            <span className="list-marker">{props.number}.</span>
            {`${props.title}`}
          </h2>
        )}
        {props.description && (
          <p className={classes.description}>{props.description}</p>
        )}
        {!props.description && (
          <p className={classes.list}>
            (<span className={classes.size}>{props.listItem1!.size}</span>£
            {props.listItem1!.price.toFixed(2)}{" "}
            <span className={classes["u-purple"]}>•</span>{" "}
            <span className={classes.size}>{props.listItem2!.size}</span>£
            {props.listItem2!.price.toFixed(2)}{" "}
            <span className={classes["u-purple"]}>•</span>{" "}
            <span className={classes.size}>{props.listItem3!.size}</span>£
            {props.listItem3!.price.toFixed(2)})
          </p>
        )}
      </div>
    </div>
  );
};

export default SpecialItemBoxWhite;
