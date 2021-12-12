import React from "react";
import ReactDom from "react-dom";

// JSX rules
// return single element, if there are two divs wrap both under a single div
// use camelcase for html attribute
// className instead of class because we are using javascript
// close every element
// formatting
import "./index.css";
import { books } from "./books";
import Book from "./Book"; // export is set to default so no need of angular brackets

// const friends = ["jack", "jill", "krish"];
// const newFriends = friends.map((friend) => {
//   return <h1>{friend}</h1>;
// });

// console.log(newFriends);
// will get null values because the friends.map doesnt return anything

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, id) => {
        return <Book key={id} bookies={book} />;
      })}
      {/* {newFriends} */}
    </section>
  );
}

/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p> Children </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */

ReactDom.render(<BookList />, document.getElementById("root"));
