import axios from "axios";


const BASE_URL = `https://www.omdbapi.com/?apikey=`
const TYPE_URL = `&type=movie`
const SEARCH_URL = `&s=`
const YEAR_URL = `&y=`
const ID_URL = '&i='
// const AUTHOR_URL = `https://www.googleapis.com/movies/v1/volumes?q=inyear:`
// const SUBJECT_URL = `https://www.googleapis.com/movies/v1/volumes?q=insubject:`
// const PARAMS = "&printType=movies&maxResults=10"
const API_KEY = "847eaf93";

export default {
  // Gets all movies
  getMovies: function () {
    return axios.get("/api/movies");
  },
  // Gets the movie with the given id
  getMovie: function (id) {
    return axios.get("/api/movies/" + id);
  },
  // Deletes the movie with the given id
  deleteMovie: function (id) {
    return axios.delete("/api/movies/" + id);
  },
  submitNominations: function () {
    console.log("api.js")
    return axios.get("/api/movies/submit");
  },
  // Saves a movie to the database
  saveMovie: function (movieData) {
    console.log(movieData)
    return axios.post("/api/movies", movieData);
  },
  searchTitle: function (query) {
    console.log(`searching by title "${query}"`)
    console.log(BASE_URL + API_KEY + TYPE_URL + SEARCH_URL + query)
    return axios.get(BASE_URL + API_KEY + TYPE_URL + SEARCH_URL + query);
  },
  getMovieDetails: function (query) {
    console.log(`getting movie details for "${query}"`)
    return axios.get(BASE_URL + API_KEY + TYPE_URL + ID_URL + query);
  }
  // searchSubject: function (query) {
  //   console.log(`searching by subject "${query}"`)
  //   return axios.get(SUBJECT_URL + query + PARAMS);
  // }
};