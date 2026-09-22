"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";


const ReadButton = ({book}: {book: IBook}) => {

  const {readBooks, setReadBooks} = useContext(BooksContext)

  const handeleReadBook = () => {
    console.log("Read book btn triggered", book);

    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`)
  }

  return <button className="btn btn-outline px-15" onClick={() => handeleReadBook()}>Read</button>;
};

export default ReadButton;
