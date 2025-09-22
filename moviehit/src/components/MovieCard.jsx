import React from "react";

const MovieCard = ({ movie }) => {
  //ALERT: When we click on favorite btn
  function onFavoriteClick() {
    alert("Clicked");
  }
  return (
    <>
      <div className="max-w-xs bg-white m-2 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
        {/* Poster Section */}
        <div className="relative">
          <img
            src={movie.url}
            alt={movie.title}
            className="w-full h-56 object-cover"
          />
          {/* fAV BTN*/}
          <div className="absolute top-2 right-2">
            <button
              className="bg-white/80 hover:bg-white text-red-500 rounded-full p-2 shadow-md transition"
              onClick={onFavoriteClick}
            >
              ♥
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
