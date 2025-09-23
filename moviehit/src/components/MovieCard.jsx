import React from "react";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isFav, setIsFav] = useState(false);

  const onFavoriteClick = () => {
    setIsFav((prev) => !prev); // toggle state
  };

  return (
    <>
      <div className="max-w-xs bg-white m-2 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
        {/* Poster Section */}
        <div className="relative">
          <img
            src={`httpS://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-80 object-fit"
          />
          {/* fAV BTN*/}
          <div className="absolute top-2 right-2">
             <button
          onClick={onFavoriteClick}
          className={`rounded-full p-2 shadow-md transition ${
            isFav
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white/80 text-red-500 hover:bg-white"
          }`}
        >
          {isFav ? "♥" : "♡"}
        </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{movie.release_date}</p>
          <p className="text-sm text-gray-700 line-clamp-3">
            {movie.description ||
              "No description available. This is a placeholder text to describe the movie briefly."}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
