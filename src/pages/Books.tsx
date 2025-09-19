import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import type { BriefBook } from "../types/Book";

const Books = () => {
  const [books, setBooks] = useState<BriefBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://www.dbooks.org/api/recent");
        const data = await res.json();

        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="bg-neutral-100 min-h-full pb-10">
      <h2 className="text-4xl text-center font-semibold py-6 mb-4">
        All Books
      </h2>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <section className="mx-20 px-20 py-10 bg-neutral-100 rounded-[10px] shadow-[0px_15px_80px_0px_rgba(0,0,0,0.10)] grid grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Books;
