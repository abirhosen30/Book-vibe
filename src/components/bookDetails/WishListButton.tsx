"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "WishListButton must be used inside BooksProvider"
    );
  }

  const { wishlist, setWishlist } = context;

  const handleWishlist = () => {
    console.log("Wishlist button triggered", book);

    const alreadyInWishlist = wishlist.some(
      (wishlistBook) => wishlistBook.bookId === book.bookId
    );

    if (alreadyInWishlist) {
      toast.info(`"${book.bookName}" is already in your wishlist.`);
      return;
    }

    setWishlist((currentWishlist) => [
      ...currentWishlist,
      book,
    ]);

    toast.success(
      `"${book.bookName}" has been added to your wishlist.`
    );
  };

  return (
    <button
      className="btn btn-outline px-15"
      onClick={handleWishlist}
    >
      Wishlist
    </button>
  );
};

export default WishListButton;