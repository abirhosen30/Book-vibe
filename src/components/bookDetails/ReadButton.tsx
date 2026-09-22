"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadButton must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    console.log("Read book btn triggered", book);

    const alreadyRead = readBooks.some(
      (readBook) => readBook.bookId === book.bookId
    );

    if (alreadyRead) {
      toast.info(`"${book.bookName}" is already in your read list.`);
      return;
    }

    setReadBooks((currentBooks) => [...currentBooks, book]);

    toast.success(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-outline px-15"
      onClick={handleReadBook}
    >
      Read
    </button>
  );
};

export default ReadButton;
