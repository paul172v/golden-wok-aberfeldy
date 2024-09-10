import classes from "./MenuItem.module.scss";

interface IProps {
  number: number;
  name: string;
  quantity?: number | null;
  price: number;
  description?: string;
}

const MenuItem = (props: IProps) => {
  //// Adjusting the padEnd dots according to the string length of the name and quantity
  const nameLength = props.name.length;
  let quantityLength = 0;

  if (props.quantity && props.quantity < 10) {
    quantityLength = 3;
  }

  if (props.quantity && props.quantity >= 10) {
    quantityLength = 4;
  }

  const stringLength = nameLength + quantityLength;

  //// Accounting for letter markers next to the item number
  let spanNumberElement = <span className="list-marker">{props.number}.</span>;

  if (
    props.name === "Salt & Pepper Tofu" ||
    props.name === "Singapore Rice Vermicelli" ||
    props.name === "Tofu with Black Bean & Chilli"
  ) {
    spanNumberElement = (
      <span className="list-marker--letter">{props.number}a.</span>
    );
  }

  if (props.name === "Tofu Szechuan Style") {
    spanNumberElement = (
      <span className="list-marker--letter">{props.number}b.</span>
    );
  }

  if (props.name === "Tofu with Mixed Vegetables") {
    spanNumberElement = (
      <span className="list-marker--letter">{props.number}c.</span>
    );
  }
  return (
    <div className={classes.page}>
      <div className={classes["outer-wrapper"]}>
        <div className={classes["item-wrapper"]}>
          {props.quantity ? (
            <p className={classes.item}>
              <span className="list-marker">{props.number}.</span>
              {`${props.name} ${`(${props.quantity})`}`.padEnd(
                115 - stringLength,
                "."
              )}
              {`£6.50`}
            </p>
          ) : (
            <p className={classes.item}>
              {spanNumberElement}
              {`${props.name}`.padEnd(115 - stringLength, ".")}
              {`£${props.price.toFixed(2)}`}
            </p>
          )}

          {props.description && (
            <p className={classes.description}>{props.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
