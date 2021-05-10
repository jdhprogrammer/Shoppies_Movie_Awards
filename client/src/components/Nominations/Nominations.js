import React, {useEffect, useState} from "react";
import {ListItem, List} from "../List";
import DeleteBtn from "../DeleteBtn";
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap"
import {useStoreContext} from "../../utils/GlobalState";
import {REMOVE_MOVIE, UPDATE_MOVIES, LOADING, SET_CURRENT_MOVIE, REMOVE_FAVORITE} from "../../utils/actions";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import SavedModal from "../Modal/SavedModal"
import {set} from "mongoose";

function Nominations() {
  const [state, dispatch] = useStoreContext();
  const [modalShow, setModalShow] = useState({});

  const setCurrentMovie = (id) => {
    let movie = state.nominations.filter((movie) => (movie._id === id))
    dispatch({
      type: SET_CURRENT_MOVIE,
      movie: movie[0]
    })
  }

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      id: state.currentMovie.ID
    });
  }

  const removeMovie = id => {
    API.deleteMovie(id)
      .then(() => {
        dispatch({
          type: REMOVE_MOVIE,
          _id: id
        });
      })
      .catch(err => console.log(err));
    removeFavorite()
  };

  const getMovies = () => {
    dispatch({type: LOADING});
    API.getMovies()
      .then(results => {
        console.log("getting movies")
        dispatch({
          type: UPDATE_MOVIES,
          nominations: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, [state.favorites]);

  return (
    <div className="text-center">
      <h3 id="nominations">Your Nominees</h3>

      {state.nominations.length ? (
        <>

          <List className="shadow">
            {state.nominations.slice().reverse().map((movie, index) => (
              <ListItem key={movie._id}>
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
                    <Button className="float-right" variant="info"
                      onClick={() => {
                        setModalShow({...modalShow, [index]: true})
                        setCurrentMovie(movie._id)
                        console.log(modalShow[index])
                      }}>
                      View Details
                    </Button>
                    <SavedModal key={movie._id} movie={movie} show={modalShow[index]}
                      onHide={() => setModalShow({...modalShow, [index]: false})} remove={removeMovie} dialogClassName="modal-90w" />
                  </Col>
                </Row>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <h4 className="mt-5">No Nominees yet...</h4>
      )}
      {/* <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div> */}
    </div>
  );
}

export default Nominations;
