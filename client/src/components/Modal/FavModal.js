import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useStoreContext} from "../../utils/GlobalState";
import {SET_CURRENT_BOOK, ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_BOOK} from "../../utils/actions";
import API from "../../utils/API"

function FavModal(props) {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        let book = state.books.filter((book) => (book.id === props.book.id))
        dispatch({
            type: SET_CURRENT_BOOK,
            book: book[0]
        })

    }, [props.show]);

    const addFavorite = () => {
        API.saveBook(state.currentBook)
            .then(result => {
                dispatch({
                    type: ADD_FAVORITE,
                    book: state.currentBook
                });
            })
            .catch(err => console.log(err));
    }

    const removeFavorite = () => {
        dispatch({
            type: REMOVE_FAVORITE,
            id: state.currentBook.id
        });
    }

    return (
        <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row>
                        <Col xs={6} md={6}>
                            <strong>
                                {props.book.title}
                            </strong>
                        </Col>
                        <Col xs={6} md={6}>
                            {state.savedBooks.filter((book) => (book.id === state.currentBook.id)).length ? (
                                <p className="btn btn-info" style={{"width": "200px"}} >
                                    <span>📚 </span> <span>Already Saved...</span>
                                </p>
                            ) : (
                                    <Button className="btn btn-info" style={{"width": "200px"}} onClick={addFavorite}>
                                        <span>❤️</span> <span>Favorite</span>
                                    </Button>
                                )}
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <img src={props.book.image} alt={props.book.title} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Row>
                                <Col xs={11} md={11}>
                                    Author: {props.book.author}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={11} md={11}>
                                    <a target="_blank" href={props.book.link}>See Full Book <br /> on Google</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11} md={11}>
                            {props.book.description}
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

export default FavModal;



// state.favorites.filter((book) => (book.id === state.currentBook.id)).length ? (
//     <Button className="btn btn-danger" style={{"width": "200px"}} onClick={removeFavorite}>
//         x UnFavorite!
//     </Button>
// ) : (
//     )