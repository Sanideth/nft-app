import Author from "../Author/Author";
import Info from "../Info/Info";
import styles from "./Card.module.css";
import Image from "../../images/image-avatar.png";

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Image}></div>
      <Info
        daysLeft="3"
        ethereum="0.041"
        heading="Equilibrium #3429"
        text="Our Equilibrium collection promotes balance and calm."
      />
      <Author
        image={Image}
        alt="Avatar"
        text="Creation of"
        author="Jules Wyvern"
      />
    </div>
  );
};

export default Card;
