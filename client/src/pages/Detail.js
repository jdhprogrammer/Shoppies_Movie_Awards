import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {useStoreContext} from "../utils/GlobalState";
import {SET_CURRENT_BOOK, ADD_FAVORITE, REMOVE_FAVORITE} from "../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getBook(props.match.params.id)
      .then(res => dispatch({type: SET_CURRENT_BOOK, book: res.data}))
      .catch(err => console.log(err));
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
    <>{state.currentBook ? (
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
