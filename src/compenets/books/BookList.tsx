import  type { Book } from "../../types";
import BookItem from "./BookItem";

type BookListProps = {
    books : Book[];
     
}

const BookList = ({ books}: BookListProps) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};
export default BookList