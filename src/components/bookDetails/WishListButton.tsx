"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";


const WishListButton = ({book}: {book: IBook}) => {

  const {wishlist, setWishlist} = useContext(BooksContext)

  const handeleReadBook = () => {
    console.log("Read book btn triggered", book);

    setWishlist([...wishlist, book]);
    toast.success(`You have add to wishlist "${book.bookName}"`)
  }

  return <button className="btn btn-outline px-15" onClick={() => handeleReadBook()}>Wishlist</button>;
};

export default WishListButton;
