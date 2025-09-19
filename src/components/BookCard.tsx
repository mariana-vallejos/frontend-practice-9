import { Link } from "react-router";
import type { BriefBook } from "../types/Book";

const BookCard = ({ id, title, subtitle, authors, image }: BriefBook) => {
  return (
    <article className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-40 h-56 object-cover rounded-l-xl"
        />
      </div>

      <div className="flex flex-col justify-between p-6 w-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 leading-tight line-clamp-2">
            {title}
          </h3>
          <h4 className="text-gray-500 text-sm mt-1">By {authors}</h4>
          {subtitle && (
            <p className="mt-3 text-gray-400 text-sm line-clamp-3">
              {subtitle}
            </p>
          )}
        </div>

        <Link
          to={`/books/${id}`}
          className="mt-4 inline-block w-32 text-center bg-amber-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors"
        >
          See more
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
