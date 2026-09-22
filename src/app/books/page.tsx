import React from "react";
import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booksData.json`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto py-10 px-4">
      {/* Section Title */}
      <div className="container bg-gray-200 mx-auto py-6 flex text-center flex-col items-center justify-center gap-4 my-4 rounded-lg">
        <h2 className="font-semibold">All Books</h2>
      </div>
      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {booksData.map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
