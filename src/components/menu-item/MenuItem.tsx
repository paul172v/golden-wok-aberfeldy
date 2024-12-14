import classes from "./MenuItem.module.scss";

interface IProps {
  number: number;
  name: string;
  quantity?: number | null;
  price: number;
  description?: string | null;
  icon: string | null;
}

const MenuItem = (props: IProps) => {
  //// Adjusting the padEnd dots according to the number and price and icon length
  let dotLength;
  dotLength = 55;

  props.number < 10 && dotLength;
  props.number === 46 && dotLength++;
  props.number >= 100 && dotLength;
  props.number >= 107 && dotLength++;
  props.number >= 123 && dotLength--;
  props.price > 9 && dotLength--;

  //// Selecting item class based on item number and icon type (the padding will align the menu items)
  let itemClass;

  // no icon
  if (props.number < 10 && !props.icon) itemClass = "item--single--no-icon";
  if (props.number >= 10 && props.number < 100 && !props.icon)
    itemClass = "item--double--no-icon";
  if (props.number >= 100 && !props.icon) itemClass = "item--no-icon";

  // one icon
  if (
    props.number < 10 &&
    props.icon !== null &&
    (props.icon === "🥜" || props.icon === "🌶️")
  )
    itemClass = "item--single--one-icon";
  if (
    props.number >= 10 &&
    props.number < 100 &&
    props.icon !== null &&
    (props.icon === "🥜" || props.icon === "🌶️")
  )
    itemClass = "item--double--one-icon";
  if (
    props.number >= 100 &&
    props.icon !== null &&
    (props.icon === "🥜" || props.icon === "🌶️")
  )
    itemClass = "item--one-icon";

  // two icon
  if (
    props.number < 10 &&
    props.icon !== null &&
    (props.icon === "🌶️🥜" || props.icon === "🥜🌶️" || props.icon === "🌶️🌶️")
  )
    itemClass = "item--single--two-icon";
  if (
    props.number >= 10 &&
    props.number < 100 &&
    props.icon !== null &&
    (props.icon === "🌶️🥜" || props.icon === "🥜🌶️" || props.icon === "🌶️🌶️")
  )
    itemClass = "item--double--two-icon";
  if (
    props.number >= 100 &&
    props.icon !== null &&
    (props.icon === "🌶️🥜" || props.icon === "🥜🌶️" || props.icon === "🌶️🌶️")
  )
    itemClass = "item--two-icon";

  //// Adjusting padding for letter markers a,b,c, next to the item number
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
            <pre>
              <p className={classes[`${itemClass}`]}>
                <span className="list-marker">{props.number}.</span>

                {`${props.name} ${`(${props.quantity}) ${
                  props.icon !== null ? props.icon : ""
                }`}`.padEnd(dotLength, ".")}

                {`£${props.price.toFixed(2)}`}
              </p>
            </pre>
          ) : (
            <pre>
              <p className={classes[`${itemClass}`]}>
                {spanNumberElement}
                {`${props.name} ${
                  props.icon !== null ? props.icon : ""
                }`.padEnd(dotLength, ".")}
                {`£${props.price.toFixed(2)}`}
              </p>
            </pre>
          )}

          {props.description &&
            props.description !== null &&
            props.description !== undefined && (
              <p className={classes.description}>{props.description}</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
