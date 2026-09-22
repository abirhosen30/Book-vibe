export interface IBook {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  totalPages: number,
  review: string;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}
