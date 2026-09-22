import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

import { readFile } from "fs/promises";
import path from "path";

const getBooks = async () => {
  const filePath = path.join(process.cwd(), "public", "booksData.json");
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
};

const page = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook
  console.log(book, "book");
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left - Book Image */}
        <div className="bg-[#f5f5f5] rounded-xl h-[600px] flex items-center justify-center p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={350}
            height={450}
            className="max-h-[430px] w-auto object-contain"
          />
        </div>

        {/* Right - Book Information */}
        <div>

          {/* Book Name */}
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-gray-600 mb-4">
            By <span className="font-medium">{book.author}</span>
          </p>

          {/* Category */}
          <div className="border-y border-gray-200 py-3 mb-5">
            <span className="text-gray-700">
              {book.category}
            </span>
          </div>

          {/* Review */}
          <p className="text-sm text-gray-600 leading-6">
            <span className="font-bold text-gray-800">Review:</span>{" "}
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 mt-5">
            <span className="font-bold text-sm">
              Tag
            </span>

            <div className="flex gap-2 flex-wrap">
              {book.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Book Information */}
          <div className="border-t border-gray-200 mt-5 pt-5 space-y-3">

            <div className="flex">
              <span className="w-40 text-sm text-gray-500">
                Number of Pages:
              </span>

              <span className="text-sm font-semibold">
                {book.totalPages}
              </span>
            </div>

            <div className="flex">
              <span className="w-40 text-sm text-gray-500">
                Publisher:
              </span>

              <span className="text-sm font-semibold">
                {book.publisher}
              </span>
            </div>

            <div className="flex">
              <span className="w-40 text-sm text-gray-500">
                Year of Publishing:
              </span>

              <span className="text-sm font-semibold">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="flex">
              <span className="w-40 text-sm text-gray-500">
                Rating:
              </span>

              <span className="text-sm font-semibold">
                {book.rating}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <ReadButton book={book}/>

            <WishListButton book={book}/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default page;
