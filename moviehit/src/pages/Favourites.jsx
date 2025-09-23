// src/pages/Favourites.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * A simple MovieCard used by this page. Replace with your own MovieCard if needed.
 * Props:
 *  - movie: { id, title, url, release_date, description }
 *  - onRemove(movieId) -> callback to remove from favourites
 */
const MovieCard = ({ movie, onRemove }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative group">
      <img
        src={movie.url}
        alt={movie.title}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <button
        onClick={() => onRemove(movie.id)}
        aria-label="Remove from favourites"
        className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 rounded-full p-2 shadow-md transition-transform transform hover:scale-105"
      >
        ❤️
      </button>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{movie.release_date}</p>
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
          {movie.description ||
            "No description available. This is a placeholder text to describe the movie briefly."}
        </p>
      </div>
    </div>
  );
};

const Favourites = () => {
  const [favs, setFavs] = useState([]);

  // Load favourites from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favourites");
      if (raw) setFavs(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to read favourites from localStorage", e);
      setFavs([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Your Favourites
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Saved movies you loved ✨
            </p>
          </div>

          {favs.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-2 bg-red-50 text-red-600 rounded-md border border-red-100 hover:bg-red-100 transition"
                title="Remove all favourites"
              >
                Clear All
              </button>
              <Link
                to="/"
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-md shadow-md hover:opacity-95 transition"
              >
                Browse more
              </Link>
            </div>
          )}
        </div>

        {favs.length === 0 ? (
          // EMPTY STATE
          <div className="rounded-xl border border-dashed border-gray-200 bg-white/60 p-10 text-center">
            <div className="max-w-lg mx-auto">
              <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-pink-100 mb-6 shadow-sm">
                <svg
                  className="w-10 h-10 text-red-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21s-7-4.35-9-7.5C0.6 10.15 3 5 7.5 5 9.24 5 10.7 6 12 7.07 13.3 6 14.76 5 16.5 5 21 5 23.4 10.15 21 13.5 19 16.65 12 21 12 21z" />
                </svg>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No favourites yet
              </h2>
              <p className="text-gray-600 mb-6">
                Start adding your favourite movies — they’ll appear here. You
                can browse movies and click the ❤️ icon to save them.
              </p>

              <div className="flex items-center justify-center gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-md shadow hover:opacity-95 transition"
                >
                  Browse Movies
                </Link>

              </div>
            </div>
          </div>
        ) : (
          // GRID OF FAVOURITES
          <div className="mt-6">
            <div
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              {favs.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
 