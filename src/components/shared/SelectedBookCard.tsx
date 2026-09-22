import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectedBookCard = ({ book }: { book: IBook }) => {
  return (
    <div>
      <div className="bg-white p-6 m-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-5">
        {/* Book Image */}
        <div className="w-full md:w-36 h-52 md:h-36 bg-gray-100 rounded-xl flex items-center justify-center p-4 shrink-0">
          <Image
            src={book.image}
            alt={book.bookName}
            width={120}
            height={150}
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Book Information */}
        <div className="flex-1">
          {/* Book Name */}
          <h2 className="text-2xl font-bold text-gray-900">{book.bookName}</h2>

          {/* Author */}
          <p className="text-sm text-gray-600 mt-2">By : {book.author}</p>

          {/* Tags + Year */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-semibold text-sm">Tag</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}

            <span className="text-sm text-gray-500">
              📅 Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-500">
            <span>
              👥 Publisher:{" "}
              <span className="text-gray-700">{book.publisher}</span>
            </span>

            <span>
              📄 Page <span className="text-gray-700">{book.totalPages}</span>
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Category */}
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-500 text-sm">
                Category: {book.category}
              </span>

              {/* Rating */}
              <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-500 text-sm">
                Rating: {book.rating}
              </span>

              {/* Details Button */}
              <Link
                href={`/books/${book.bookId}`}
                className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedBookCard;
