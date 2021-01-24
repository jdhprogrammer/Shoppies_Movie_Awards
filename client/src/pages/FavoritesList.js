import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-2 mt-2">
      <h3 className="text-center">Here's All of Your Favorite Books</h3>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-2 mt-2">Click on a book to view in detail</h3>
          {state.favorites.map(book => (
            <ListItem key={book.id}>
              <Link to={"/books/" + book.id}>
                <strong>
                  {book.title} by {book.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(book.id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
