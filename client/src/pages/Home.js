import React from "react";
import {Col, Row, Container} from "../components/Grid";
import SearchBooks from "../components/SearchBooks/SearchBooks";
import BooksList from "../components/BooksList/BooksList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <SearchBooks />
        </Col>
        <Col size="md-6 sm-12">
          <BooksList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
