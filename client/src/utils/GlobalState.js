import React, {createContext, useReducer, useContext} from "react";
import {
  SET_CURRENT_MOVIE,
  REMOVE_MOVIE,
  UPDATE_MOVIES,
  UPDATE_SEARCH_MOVIES,
  ADD_MOVIE,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.movie,
        loading: false
      };

    case UPDATE_MOVIES:
      return {
        ...state,
        nominations: [...action.nominations],
        loading: false
      };

    case UPDATE_SEARCH_MOVIES:
      return {
        ...state,
        movies: [...action.movies],
        loading: false
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [action.movie, ...state.movies],
        loading: false
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        nominations: state.nominations.filter((movie) => {
          return movie._id !== action._id
        })
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
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
        favorites: state.favorites.filter((movie) => {
          return movie.id !== action.id;
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
    movies: [],
    nominations: [],
    currentMovie: {
      title: "",
      year: "",
      type: "",
      poster: "",
      id: ""
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
