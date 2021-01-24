import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Col, Row, Container, Card, Button} from "react-bootstrap";
import API from "../utils/API";
import {useStoreContext} from "../utils/GlobalState";
import {SET_CURRENT_BOOK, ADD_FAVORITE, REMOVE_FAVORITE} from "../utils/actions";

const Detail = () => {
  const [state, dispatch] = useStoreContext();

  const {id} = useParams();

  useEffect(() => {
    let book = state.books.filter((book) => (book.id === id))
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
      id: state.currentBook.id
    });
  };

  return (
    <>{state.currentBook ? (console.log("currentbook = " + state.currentBook),
      <Container>
        <Row>
          <Col size="md-10" style={{paddingTop: '10px'}}>
            <Card className="mx-auto" style={{width: '18rem'}}>
              <Card.Img alt={state.currentBook.title} src={state.currentBook.image} />
              <Card.Body>
                <Card.Title>{state.currentBook.title}
                  by
                  {state.currentBook.author}</Card.Title>
                <Card.Text>
                  Content:
                  <p>{state.currentBook.description}</p>
                </Card.Text><Link to="/">
                  <Button variant="primary">← Back to Directory</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {state.favorites.indexOf(state.currentBook) !== -1 ? (
            <Button className="btn btn-danger" onClick={removeFavorite}>
              Remove from Favorites!
            </Button>
          ) : (
              <Button className="btn" onClick={addFavorite}>
                ❤️ Add to Favorites
              </Button>
            )}
        </Row>
        <Col size="md-2">
          <Link to="/">← Back to Books</Link>
        </Col>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default Detail;
