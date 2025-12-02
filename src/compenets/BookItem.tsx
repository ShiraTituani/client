import  type { Book } from "../types";

type BookItemProps = {
    book : Book
}


const BookItem = ({ book }: BookItemProps) => {
  return (
    <div style={{ border: "1px solid gray", margin: 5, padding: 10 }}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>Tags: {book.tags.join(", ")}</p>


      <p>{book.description}</p>
    </div>
  );
};

export default BookItem