"use client";

import SelectedBookCard from "@/components/shared/SelectedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooks must be used inside BooksProvider");
  }

  const { readBooks, wishlist } = context;

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">(
    "rating"
  );

  const sortBooks = (books: IBook[]): IBook[] => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-6">
      <div className="my-4 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 px-3 py-6 text-center">
        <h2 className="font-semibold">Books</h2>
      </div>

      <div className="mb-4 flex justify-center text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Publisher year</option>
        </select>
      </div>

      <div className="tabs tabs-border">
        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book) => (
              <SelectedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="flex items-center justify-center text-gray-500">
              No books in read list.
            </p>
          )}
        </div>

        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book) => (
              <SelectedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="flex items-center justify-center text-gray-500">
              No books in wishlist.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;