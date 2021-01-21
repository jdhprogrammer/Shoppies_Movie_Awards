import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {useStoreContext} from "../utils/GlobalState";
import {SET_CURRENT_BOOK, ADD_FAVORITE, REMOVE_FAVORITE} from "../utils/actions";

const Detail = () => {
  const [state, dispatch] = useStoreContext();

  const {id} = useParams();

  useEffect(() => {
    console.log(id)
    console.log("didmount")
    console.log(state.books)
    let book = state.books.filter((book) => (book._id === id))
    console.log(book)
    dispatch({
      type: SET_CURRENT_BOOK,
      book: book[0]
    })

  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      book: state.currentBook
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentBook._id
    });
  };

  return (
    <>{state.currentBook ? (console.log("currentbook = " + state.currentBook[0]),
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {state.currentBook.title} by {state.currentBook.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{state.currentBook.body}</p>
            </article>
          </Col>
          {state.favorites.indexOf(state.currentBook) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
              Remove from Favorites!
            </button>
          ) : (
              <button className="btn" onClick={addFavorite}>
                ❤️ Add to Favorites
              </button>
            )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Books</Link>
          </Col>
        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default Detail;
