import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto py-10 px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Books</h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.slice(0,6).map((book: IBook, ind: number) => {

          return <BookCard key={ind} book={book}/>
        }

          
        )}
      </div>
    </section>
  );
};

export default Books;
