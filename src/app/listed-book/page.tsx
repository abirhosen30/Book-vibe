"use client";
import SelectedBookCard from "@/components/shared/SelectedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortestReadBooks = sortBooks(readBooks);
  const sortestWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-6 ">
      <div className="flex text-center flex-col items-center justify-center px-3 py-6 bg-gray-200 gap-4 my-4 rounded-lg">
        <h2 className="font-semibold">Books</h2>
      </div>
      <div className="flex justify-center text-center mb-4">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option disabled={true}>Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Publisher year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            sortestReadBooks.map((book: IBook) => {
              return <SelectedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-gray-500 flex items-center justify-center">
              No books in read list.
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            sortestWishlist.map((book: IBook) => {
              return <SelectedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-gray-500 flex items-center justify-center">
              No books in wishlist.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
