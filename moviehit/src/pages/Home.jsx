import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      description:
        "A skilled thief leads a team into the dream world to steal secrets and implant ideas, blurring the line between reality and imagination.",
    },
    {
      id: 2,
      title: "The Matrix",
      release_date: "1999-03-31",
      description:
        "A hacker discovers the truth about his reality and joins a rebellion to free humanity from a simulated world controlled by machines.",
    },
    {
      id: 3,
      title: "Interstellar",
      release_date: "2014-11-07",
      description:
        "A team of explorers ventures through a wormhole in search of a new home for humanity as Earth faces ecological collapse.",
    },
    {
      id: 4,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      description:
        "Batman faces his greatest test when the Joker unleashes chaos and anarchy across Gotham City.",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      release_date: "2019-04-26",
      description:
        "The surviving heroes assemble for a final stand to undo the catastrophic damage caused by Thanos.",
    },
    {
      id: 6,
      title: "Parasite",
      release_date: "2019-05-30",
      description:
        "A poor family schemes to infiltrate a wealthy household, leading to a shocking spiral of secrets and consequences.",
    },
    {
      id: 7,
      title: "Spirited Away",
      release_date: "2001-07-20",
      description:
        "A young girl becomes trapped in a mysterious spirit world and must find her courage to rescue her parents and return home.",
    },
    {
      id: 8,
      title: "Gladiator",
      release_date: "2000-05-05",
      description:
        "A betrayed Roman general seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("")

  //todo handleSearch
  function handleSearch(e) {
    e.preventDefault
  }

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
             type="text"
             placeholder="Search for movies... "
             className="search-input"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" type="submit">Search</button>
        </form>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
