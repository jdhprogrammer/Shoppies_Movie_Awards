import React, {useEffect, useState} from "react";
import {ListItem, List} from "../List";
import DeleteBtn from "../DeleteBtn";
import {Link} from "react-router-dom";
import {useStoreContext} from "../../utils/GlobalState";
import {REMOVE_BOOK, UPDATE_BOOKS, LOADING, SET_CURRENT_BOOK, REMOVE_FAVORITE} from "../../utils/actions";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import SavedModal from "../Modal/SavedModal"
import {set} from "mongoose";

function SavedBooks() {
  const [state, dispatch] = useStoreContext();
  const [modalShow, setModalShow] = useState({});

  const setCurrentBook = (id) => {
    let book = state.savedBooks.filter((book) => (book._id === id))
    dispatch({
      type: SET_CURRENT_BOOK,
      book: book[0]
    })
  }

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      id: state.currentBook.id
    });
  }

  const removeBook = id => {
    API.deleteBook(id)
      .then(() => {
        dispatch({
          type: REMOVE_BOOK,
          _id: id
        });
      })
      .catch(err => console.log(err));
    removeFavorite()
  };

  const getBooks = () => {
    dispatch({type: LOADING});
    API.getBooks()
      .then(results => {
        console.log("getting books")
        dispatch({
          type: UPDATE_BOOKS,
          savedBooks: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBooks();
  }, [state.favorites]);

  return (
    <div className="text-center">
      <h3 id="savedBooks">Your Saved Books</h3>

      {state.savedBooks.length ? (
        <>

          <List className="shadow">
            {state.savedBooks.slice().reverse().map((book, index) => (
              <ListItem key={book._id}>
                <img className="float-left" src={book.image} alt={book.title} style={{"height": "50px"}} />
                <strong>
                  {book.title.length < 25 ? (book.title) : (book.title.substring(0, 20) + "...")}
                  {book.author.length < 20 ? (` by ${book.author}`) : ('...')}
                </strong>
                <Button className="float-right" variant="info"
                  onClick={() => {
                    setModalShow({...modalShow, [index]: true})
                    setCurrentBook(book._id)
                  }}>
                  View Details
              </Button>
                {/* <Button className="float-right mr-2" variant="warning"
                  onClick={() => removeBook(book._id)} >
                  Remove Book
                </Button> */}
                <SavedModal key={book._id} book={book} show={modalShow[index]}
                  onHide={() => setModalShow({...modalShow, [index]: false})} remove={removeBook} dialogClassName="modal-90w" />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
          <h4 className="mt-5">no results yet...</h4>
        )}
      {/* <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div> */}
    </div>
  );
}

export default SavedBooks;

// let num;
// num = parseInt(index) + 20,

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