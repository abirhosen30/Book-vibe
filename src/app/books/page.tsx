import React from "react";
import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";

const getBooks = async (): Promise<IBook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booksData.json`
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
    <section className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="container mx-auto my-4 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 py-6 text-center">
        <h2 className="font-semibold">All Books</h2>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;