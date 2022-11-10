const Author = ({ image, alt, text, author }) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <p>
        {text} <span>{author}</span>
      </p>
    </div>
  );
};

export default Author;
