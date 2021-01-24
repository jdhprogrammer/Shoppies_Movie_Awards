import axios from "axios";

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const TITLE_URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:`
const AUTHOR_URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:`
const SUBJECT_URL = `https://www.googleapis.com/books/v1/volumes?q=insubject:`
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
    console.log(bookData)
    return axios.post("/api/books", bookData);
  },
  searchTitle: function (query) {
    console.log(`searching by title "${query}"`)
    return axios.get(TITLE_URL + query + PARAMS);
  },
  searchAuthor: function (query) {
    console.log(`searching by author "${query}"`)
    return axios.get(AUTHOR_URL + query + PARAMS);
  },
  searchSubject: function (query) {
    console.log(`searching by subject "${query}"`)
    return axios.get(SUBJECT_URL + query + PARAMS);
  }
};


// `https://www.googleapis.com/books/v1/volumes?q=intitle: