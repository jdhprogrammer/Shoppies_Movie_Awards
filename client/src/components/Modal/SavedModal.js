import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useStoreContext} from "../../utils/GlobalState";
import {SET_CURRENT_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_MOVIE} from "../../utils/actions";
import API from "../../utils/API"

function SavedModal(props) {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        // let movie = state.nominations.filter((movie) => (movie._id === props.movie._id))
        // dispatch({
        //     type: SET_CURRENT_MOVIE,
        //     movie: movie[0]
        // })

    }, [props.show]);

    const addFavorite = () => {
        console.log(state.currentMovie)
        API.saveMovie(state.currentMovie)
            .then(result => {
                dispatch({
                    type: ADD_FAVORITE,
                    movie: state.currentMovie
                });
            })
            .catch(err => console.log(err));
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
    };

    const removeFavorite = () => {
        dispatch({
            type: REMOVE_FAVORITE,
            id: state.currentMovie.ID
        });
    }
    return (
        <Modal size="lg" show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row>
                        <Col xs={6} md={6}>
                            <strong>
                                {props.movie.Title}
                            </strong>
                        </Col>
                        <Col xs={6} md={6}>
                            <Button className="btn btn-warning float-right" style={{"width": "200px"}} onClick={() => props.remove(state.currentMovie._id)}>
                                Remove Nominee
                            </Button>
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={5} className="text-center">
                            <img src={props.movie.Poster} alt={props.movie.Title} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={7}>
                            <Row>
                                <Col xs={11} md={11}>
                                    <br />
                                    <strong>Year </strong><br />{props.movie.Year}<br />
                                    <strong>Genre</strong><br /> {props.movie.Genre}<br />
                                    <strong>Cast</strong><br /> {props.movie.Actors}<br />
                                    <strong>Director</strong><br /> {props.movie.Director}<br />
                                    <strong>Plot</strong><br /> {props.movie.Plot}<br />
                                    <strong>Country</strong><br /> {props.movie.Country}<br />
                                    <strong>Production</strong><br /> {props.movie.Production}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default SavedModal;