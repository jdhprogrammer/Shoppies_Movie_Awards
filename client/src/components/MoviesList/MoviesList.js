import React, {useEffect, useState} from "react";
import {ListItem, List} from "../List";
import DeleteBtn from "../DeleteBtn";
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap"
import {useStoreContext} from "../../utils/GlobalState";
import {REMOVE_MOVIE, UPDATE_MOVIES, LOADING, ADD_FAVORITE, REMOVE_FAVORITE} from "../../utils/actions";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import FavModal from "../Modal/FavModal"


function MoviesList() {
  const [state, dispatch] = useStoreContext();
  const [modalShow, setModalShow] = useState({});

  const removeMovie = id => {
    API.deleteMovie(id)
      .then(() => {
        dispatch({
          type: REMOVE_MOVIE,
          id: id
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // getMovies();
  }, []);


  return (
    <div id="searchResults" className="mb-3 text-center">
      <h3>Movie Results</h3>
      {state.movies.length ? (
        <>
          <List>
            {state.movies.slice().reverse().map((movie, index) => (
              <ListItem key={movie.ID}>
                <Row>
                  <Col xs={2} className="p-0">
                    <img src={movie.Poster} alt={movie.Title} style={{"height": "50px"}} />
                  </Col>
                  <Col xs={7}>
                    <strong>
                      {movie.Title.length < 40 ? (movie.Title) : (movie.Title.substring(0, 20) + "...")}
                      <br />
                      {movie.Year.length < 20 ? (`${movie.Year}`) : ('...')}
                    </strong>
                  </Col>
                  <Col xs={3} className="p-0">
                    <Button className="float-right" variant="primary"
                      onClick={() => {
                        setModalShow({...modalShow, [index]: true})
                        console.log(modalShow[index])
                      }}>
                      View Details
                  </Button>
                    <FavModal key={movie.ID} movie={movie} show={modalShow[index]}
                      onHide={() => setModalShow({...modalShow, [index]: false})} />
                  </Col>
                </Row>
              </ListItem>
            ))}
          </List>
        </>
      ) : (<div className="mt-4 mb-4 p-3 shadow"
        style={{
          "border": "solid 1px lightgray",
          "borderRadius": "5px 5px 5px 5px",
          "backgroundColor": `rgb(255,255,255,0.4)`
        }}>
        <h4 className="mt-2">no results yet...</h4>
      </div>
      )}
    </div>
  );
}

export default MoviesList;
