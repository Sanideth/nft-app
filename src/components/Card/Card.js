import Author from "../Author/Author";
import Info from "../Info/Info";
import styles from "./Card.module.css";
import Image from "../../images/image-avatar.png";
import { ReactComponent as ViewIcon } from "../../images/icon-view.svg";

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Image}>
        <ViewIcon className={styles.Icon} />
      </div>
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
