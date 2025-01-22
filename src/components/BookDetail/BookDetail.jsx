import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList, addToStoredWishList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, bookName, image } = book;

  const handleMarkAsRead = (id) => {
    addToStoredList(id);
  };

  const handleWishlist = (id) => {
    // console.log(id);
    addToStoredWishList(id);
  };

  return (
    <div className="my-12 flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl">Book Name: {bookName}</h2>
      <img className="w-40" src={image} alt="" />
      <div>
        <button
          onClick={() => handleMarkAsRead(bookId)}
          className="btn btn-outline mr-4 btn-accent"
        >
          Mark as Read
        </button>
        <button
          onClick={() => handleWishlist(bookId)}
          className="btn btn-accent"
        >
          Add to WishList
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
