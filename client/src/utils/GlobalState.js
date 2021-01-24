import React, {createContext, useReducer, useContext} from "react";
import {
  SET_CURRENT_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOKS,
  UPDATE_SEARCH_BOOKS,
  ADD_BOOK,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.book,
        loading: false
      };

    case UPDATE_BOOKS:
      return {
        ...state,
        savedBooks: [...action.savedBooks],
        loading: false
      };

    case UPDATE_SEARCH_BOOKS:
      return {
        ...state,
        books: [...action.books],
        loading: false
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [action.book, ...state.books],
        loading: false
      };

    case REMOVE_BOOK:
      return {
        ...state,
        savedBooks: state.savedBooks.filter((book) => {
          return book._id !== action._id
        })
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.book, ...state.favorites],
        loading: false
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((book) => {
          return book.id !== action.id;
        })
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    savedBooks: [],
    currentBook: {
      _id: 0,
      id: 0,
      title: "",
      author: "",
      description: "",
      image: "",
      link: "",
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};
