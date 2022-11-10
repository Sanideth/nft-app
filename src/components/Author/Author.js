import styles from "./Author.module.css";

const Author = ({ image, alt, text, author }) => {
  return (
    <div className={styles.Author}>
      <img src={image} alt={alt} className={styles.Image} />
      <p className={styles.Text}>
        {text} <span className={styles.AuthorName}>{author}</span>
      </p>
    </div>
  );
};

export default Author;
