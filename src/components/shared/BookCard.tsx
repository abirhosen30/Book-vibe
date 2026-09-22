import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
      {/* Book Image */}
      <div className="bg-gray-100 rounded-lg flex items-center justify-center p-3 mb-5">
        <Image
          src={book.image}
          alt={book.bookName}
          width={200}
          height={300}
          className="h-full w-auto object-contain rounded-md"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-3">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{book.bookName}</h3>

      {/* Author */}
      <p className="text-sm text-gray-500 mb-4">
        By <span className="text-gray-700">{book.author}</span>
      </p>

      {/* Bottom Info */}
      <div className="border-t border-gray-200 pt-4 mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{book.category}</span>

          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{book.rating}</span>

            <span className="text-yellow-400 text-lg">★</span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="btn btn-success text-white w-full mt-4">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
