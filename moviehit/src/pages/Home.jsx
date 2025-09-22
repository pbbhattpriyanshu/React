import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovie, fetchMovies } from "../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularPictures = async () => {
      try {
        const popularPictures = await fetchMovies();
        setPictures(popularPictures);
      } catch (error) {
        console.log(`Error in fetching data ${error}`);
        setError("Failed to load movies........");
      } finally {
        setLoading(false);
      }
    };
    loadPopularPictures();
  }, []);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies... "
          className="search-input p-2 mb-5 w-80 rounded-2xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pictures
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
