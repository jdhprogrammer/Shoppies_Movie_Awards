import React, {useEffect, useState} from "react";
import {ListItem, List} from "../List";
import DeleteBtn from "../DeleteBtn";
import {Link} from "react-router-dom";
import {useStoreContext} from "../../utils/GlobalState";
import {REMOVE_BOOK, UPDATE_BOOKS, LOADING, ADD_FAVORITE, REMOVE_FAVORITE} from "../../utils/actions";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import FavModal from "../Modal/FavModal"


function BooksList() {
  const [state, dispatch] = useStoreContext();
  const [modalShow, setModalShow] = useState({});

  const removeBook = id => {
    API.deleteBook(id)
      .then(() => {
        dispatch({
          type: REMOVE_BOOK,
          id: id
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // getBooks();
  }, []);


  return (
    <div id="searchResults" className="mb-3 text-center">
      <h3>Google Book Results</h3>
      {state.books.length ? (
        <>
          <List>
            {state.books.slice().reverse().map((book, index) => (
              <ListItem key={book.id}>
                <img src={book.image} alt={book.title} style={{"height": "50px"}} />
                <strong>
                  {book.title.length < 25 ? (book.title) : (book.title.substring(0, 20) + "...")}
                  {book.author.length < 20 ? (` by ${book.author}`) : ('...')}
                </strong>
                <Button className="float-right" variant="primary"
                  onClick={() => setModalShow({...modalShow, [index]: true})}>
                  View Details
              </Button>
                {/* <DeleteBtn onClick={() => removeBook(book._id)} /> */}
                <FavModal key={book.id} book={book} show={modalShow[index]}
                  onHide={() => setModalShow({...modalShow, [index]: false})} />
              </ListItem>
            ))}
          </List>
        </>
      ) : (<div className="mt-4 mb-4 p-3 shadow"
        style={{
          "border": "solid 1px lightgray",
          "border-radius": "5px 5px 5px 5px",
          "background-color": `rgb(255,255,255,0.4)`
        }}>
        <h4 className="mt-2">no results yet...</h4>
      </div>
        )}
      {/* <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div> */}
    </div>
  );
}

export default BooksList;

// const addFavorite = (e) => {
//   console.log(e.target.name)
//   let book = state.books.filter((book) => (book.id === e.target.name))
//   dispatch({
//     type: ADD_FAVORITE,
//     book: book
//   });
// };

// const removeFavorite = (e) => {
//   let book = state.books.filter((book) => (book.id === e.target.key))
//   dispatch({
//     type: REMOVE_FAVORITE,
//     id: book.id
//   });
// };


// {state.favorites.indexOf([book]) !== -1 ? (
//   <Button className="btn btn-danger" name={book.id} style={{"width": "50px"}} onClick={removeFavorite}>
//     x
//   </Button>
// ) : (
//     <Button className="btn" name={book.id} style={{"width": "50px"}} onClick={addFavorite}>
//       ❤️
//     </Button>
//   )}