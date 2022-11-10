import { ReactComponent as EtheriumIcon } from "../../images/icon-ethereum.svg";
import { ReactComponent as ClockIcon } from "../../images/icon-clock.svg";

import styles from "./Info.module.css";

const Info = ({ heading, text, ethereum, daysLeft }) => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>{heading}</h1>
      <p className={styles.Text}>{text}</p>
      <div className={styles.NftContainer}>
        <div className={styles.IconTextContainer}>
          <EtheriumIcon />
          <p className={styles.IconText}>{ethereum} ETH</p>
        </div>
        <div className={styles.IconTextContainer}>
          <ClockIcon />
          <p className={styles.DaysLeftText}>{daysLeft} days left</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
