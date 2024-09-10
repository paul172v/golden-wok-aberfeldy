import classes from "./Heading.module.scss";

interface IProps {
  heading: string;
}

const Heading = (props: IProps) => {
  return (
    <div className={classes.page}>
      <div className={classes["outer-wrapper"]}>
        <div className={classes["heading-wrapper"]}>
          <h2>{props.heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
