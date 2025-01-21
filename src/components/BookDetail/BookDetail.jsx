import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  //   console.log(data, book);

  const { bookId: currentBookId, bookName, image } = book;

  //   console.log(param);

  return (
    <div className="my-12 flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl">Book Name: {bookName}</h2>
      <img className="w-40" src={image} alt="" />
      <div>
        <button className="btn btn-outline mr-4 btn-accent">Read</button>
        <button className="btn btn-accent">WishList</button>
      </div>
    </div>
  );
};

export default BookDetail;
