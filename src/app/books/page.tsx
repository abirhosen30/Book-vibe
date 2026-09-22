import React from "react";
import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";
import fs from "fs/promises";
import path from "path";

const getBooks = async (): Promise<IBook[]> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "booksData.json"
    );

    const file = await fs.readFile(filePath, "utf-8");

    return JSON.parse(file);
  } catch (error) {
    console.error("Error reading books:", error);
    throw new Error("Failed to load books");
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="container mx-auto my-4 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 py-6 text-center">
        <h2 className="font-semibold">All Books</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;