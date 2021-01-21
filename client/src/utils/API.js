import axios from "axios";

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const PARAMS = "&printType=books&maxResults=10"
const API_KEY = process.env.GOOGLE_BOOK_SEARCH_API_KEY;

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBooks: function (query) {
    console.log("query = " + query.title)
    console.log(BASE_URL + query.title + PARAMS)
    return axios.get(BASE_URL + query.title + PARAMS);
  },
  searchAuthor: function (query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}`
    );
  },
  searchSubject: function (query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${query}`
    );
  }
};


// `https://www.googleapis.com/books/v1/volumes?q=intitle: