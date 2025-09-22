const API_KEY = "99ae900be3a0c072b12358b78513cba2";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  } 
}; 

export const searchMovie = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Search movie:", error);
    return [];
  } 
};