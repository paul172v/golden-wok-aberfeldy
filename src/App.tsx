import { Link, Element } from "react-scroll";
import { GiNoodles } from "react-icons/gi";
import classes from "./App.module.scss";

import Contact from "./components/contact/Contact";
import SpecialItemBoxPurple from "./components/special-item-box--purple/SpecialItemBoxPurple";
import SpecialItemBoxWhite from "./components/special-item-box--white/SpecialItemBoxWhite";
import Heading from "./components/heading/Heading";
import MenuItem from "./components/menu-item/MenuItem";
import MealDeal from "./components/meal-deal/MealDeal";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

import {
  munchieBox,
  chefsCombo,
  crispyAromaticDuck,
  startersArr,
  dimSumArr,
  saltAndPepperDishesArr,
  soupsArr,
  sweetAndSourDishesArr,
  curryDishesArr,
  thaiCurryDishesArr,
  chickenDishesArr,
  porkDishesArr,
  beefDishesArr,
  duckDishesArr,
  kingPrawnDishesArr,
  eggFooYungDishesArr,
  riceDishesArr,
  chowMeinDishesArr,
  vegetableDishesArr,
  sideDishesArr,
  dessertsArr,
  saucesArr,
  mealDeal,
} from "./dev/menu";

function App() {
  const handleSetActive = (to: unknown) => {
    console.log(to);
  };

  return (
    <div className={classes.page}>
      <Element name="section-contact" id="section-contact"></Element>
      <div className={classes.header}>
        <div className={classes.margin}>
          <div className={classes["title-wrapper"]}>
            <h2>
              <span className="dancing-script-font">Golden</span>{" "}
              <span className={classes.wok}>Wok -</span>{" "}
              <span className={classes["u-yellow"]}>Chinese Takeaway</span>
            </h2>

            <span className={classes["u-icon"]}>
              <GiNoodles />
            </span>
            <span className={classes["u-text-col"]}>金锅</span>
          </div>

          <nav className={classes["page-nav-wrapper"]}>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onSetActive={handleSetActive}
                  to="section-contact"
                >
                  Contact
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={handleSetActive}
                  to="section-menu"
                >
                  Menu
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onSetActive={handleSetActive}
                  to="section-location"
                >
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Contact />

      <nav className={classes["category-nav-wrapper"]}>
        <div className={classes["category-nav-wrapper--box"]}>
          <Element name="section-menu" id="section-menu">
            <h2 className={classes.heading}>Menu Navigation</h2>
          </Element>
          <ul>
            <Link
              activeClass="active"
              to="starters"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li className={classes["category-link"]}>Starters</li>
            </Link>
            <Link
              to="dim-sum"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Dim Sum</li>
            </Link>
            <Link
              to="salt-pepper"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Salt & Pepper Dishes</li>
            </Link>
            <Link
              to="soups"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Soups</li>
            </Link>
            <Link
              to="sweet-sour"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Sweet & Sour Dishes</li>
            </Link>
            <Link
              to="curry"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Curry Dishes</li>
            </Link>
            <Link
              to="thai-curry"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Thai Curry Dishes</li>
            </Link>
            <Link
              to="chicken"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Chicken Dishes</li>
            </Link>
            <Link
              to="pork"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>
                Pork (Cha Siu) Dishes
              </li>
            </Link>
            <Link
              to="beef"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Beef Dishes</li>
            </Link>
            <Link
              to="duck"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Duck Dishes</li>
            </Link>
            <Link
              to="king-prawn"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>King Prawn Dishes</li>
            </Link>
            <Link
              to="egg-foo-yung"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Egg Foo Yung Dishes</li>
            </Link>
            <Link
              to="rice"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Rice Dishes</li>
            </Link>
            <Link
              to="chow-mein"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>
                Chow Mein Noodle Dishes
              </li>
            </Link>
            <Link
              to="vegetable"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Vegetable Dishes</li>
            </Link>
            <Link
              to="side-dishes"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Side Dishes</li>
            </Link>
            <Link
              to="desserts"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Desserts</li>
            </Link>
            <Link
              to="sauces"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className={classes["category-link"]}>Sauces</li>
            </Link>
          </ul>
        </div>
      </nav>

      <SpecialItemBoxPurple
        number={munchieBox.number}
        title={munchieBox.title}
        price={munchieBox.price}
        description={munchieBox.description}
      />
      <SpecialItemBoxWhite
        number={chefsCombo.number}
        title={chefsCombo.title}
        price={chefsCombo.price}
        description={chefsCombo.description}
      />
      <SpecialItemBoxWhite
        number={crispyAromaticDuck.number}
        title={crispyAromaticDuck.title}
        listItem1={crispyAromaticDuck.listItem1}
        listItem2={crispyAromaticDuck.listItem2}
        listItem3={crispyAromaticDuck.listItem3}
      />
      <Element name="starters" id="starters">
        <Heading heading="Starters" />
      </Element>
      {startersArr.map((item) => {
        if (item.quantity === null) {
          return (
            <MenuItem
              number={item.number}
              name={item.name}
              price={item.price}
              key={item.number + item.name}
            />
          );
        } else {
          return (
            <MenuItem
              number={item.number}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              key={item.number + item.name}
            />
          );
        }
      })}

      <Element name="dim-sum" id="dim-sum">
        <Heading heading="Dim Sum" />
      </Element>
      {dimSumArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="salt-pepper" id="salt-pepper">
        <Heading heading="Salt & Pepper Dishes" />
      </Element>
      {saltAndPepperDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            description={item.description}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="soups" id="soups">
        <Heading heading="Soups" />
      </Element>
      {soupsArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="sweet-sour" id="sweet-sour">
        <Heading heading="Sweet & Sour Dishes" />
      </Element>
      {sweetAndSourDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="curry" id="curry">
        <Heading heading="Curry Dishes" />
      </Element>
      {curryDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="thai-curry" id="thai-curry">
        <Heading heading="Thai Curry Dishes" />
      </Element>
      {thaiCurryDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="chicken" id="chicken">
        <Heading heading="Chicken Dishes" />
      </Element>
      {chickenDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            description={item.description}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="pork" id="pork">
        <Heading heading="Pork (Cha Siu) Dishes" />
      </Element>
      {porkDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="beef" id="beef">
        <Heading heading="Beef Dishes" />
      </Element>
      {beefDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="duck" id="duck">
        <Heading heading="Duck Dishes" />
      </Element>
      {duckDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="king-prawn" id="king-prawn">
        <Heading heading="King Prawn Dishes" />
      </Element>
      {kingPrawnDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="egg-foo-yung" id="egg-foo-yung">
        <Heading heading="Egg Foo Yung Dishes" />
      </Element>
      {eggFooYungDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="rice" id="rice">
        <Heading heading="Rice Dishes" />
      </Element>
      {riceDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="chow-mein" id="chow-mein">
        <Heading heading="Chow Mein Noodles Dishes" />
      </Element>
      {chowMeinDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="vegetable" id="vegetable">
        <Heading heading="Vegetable Dishes" />
      </Element>
      {vegetableDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="side-dishes" id="side-dishes">
        <Heading heading="Side Dishes" />
      </Element>
      {sideDishesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="desserts" id="desserts">
        <Heading heading="Desserts" />
      </Element>
      {dessertsArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <Element name="sauces" id="sauces">
        <Heading heading="Sauces" />
      </Element>
      {saucesArr.map((item) => {
        return (
          <MenuItem
            number={item.number}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.number + item.name}
          />
        );
      })}

      <MealDeal
        mealAPrice={mealDeal.mealAPrice}
        mealAItems={mealDeal.mealAItems}
        mealBPrice={mealDeal.mealBPrice}
        mealBItems={mealDeal.mealBItems}
      />

      <Element name="section-location" id="section-location" />
      <Location />

      <Footer />
    </div>
  );
}

export default App;
