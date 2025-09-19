import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { Book } from "../types/Book";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://www.dbooks.org/api/book/${id}`);
        const data = await res.json();

        if (data.status === "not found") {
          navigate("/not-found", {replace: true});
          return;
        }

        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        navigate("/not-found", {replace: true});
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBook();
  }, [id, navigate]);

  if (loading) {
    return <p className="text-center text-lg py-10">Loading book...</p>;
  }

  if (!book) {
    return null;
  }

  return (
    <div className="min-h-screen relative bg-[#F5F6F8] mb-20">
      <div className="absolute inset-x-0 top-0 h-2/5 bg-[#FF971D]"></div>

      <section className="bg-white absolute z-10 w-4/5 left-[10%] top-[15%] p-10 rounded-xl shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-5 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
        >
          ← Back
        </button>

        <div className="flex gap-8">
          <img
            src={book.image}
            alt={book.title}
            className="w-60 h-80 object-cover rounded-md shadow-[0px_10px_40px_0px_rgba(0,0,0,0.20)]"
          />

          <div className="flex flex-col justify-between w-2/3">
            <div>
              <h2 className="text-black text-4xl font-semibold mb-3">
                {book.title}
              </h2>
              {book.subtitle && (
                <h3 className="text-lg text-gray-500 mb-4">{book.subtitle}</h3>
              )}
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Authors:</span> {book.authors}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Publisher:</span> {book.publisher}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Year:</span> {book.year}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Pages:</span> {book.pages}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-amber-500 rounded-[10px] px-6 text-white font-medium text-md hover:bg-amber-600 transition"
              >
                Buy now
              </a>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-[10px] border border-amber-500 text-amber-500 text-md font-medium hover:bg-amber-50 transition"
              >
                Read Book
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h5 className="text-2xl font-semibold mb-3">Description</h5>
          <p className="text-black/70 text-base leading-relaxed whitespace-pre-line">
            {book.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookDetail;
