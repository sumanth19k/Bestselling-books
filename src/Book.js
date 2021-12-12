const Book = (props) => {
  // another way to access props: "const {img, title, author, children} = props";
  const clickHandler = () => {
    console.log({ title });
  };
  const { img, title, author, link } = props.bookies;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3 onClick={clickHandler}>{title}</h3>
      <h4>{author}</h4>
      {/* {children, the content in between the Book tag is called children}*/}
      <a href={link}>Check on Amazon</a>
    </article>
  );
};

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
//     alt=""
//   />
// );

// const Title = () => <h3>I love you to the moon and back</h3>;
// const Author = () => <h4>Amelia Hepworth</h4>;

// inline css using js=>
// const Author = () => <h4 style={{color: "", font-family: ""}}></h4>
// {} to access js. JS accepts key value pair

export default Book;
