import React from "react";
import {Col, Row, Container} from "../components/Grid";
import SearchBooks from "../components/SearchBooks/SearchBooks";
import BooksList from "../components/BooksList/BooksList";
import SavedBooks from "../components/SavedBooks/SavedBooks"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="xl-4 lg-4 md-6 sm-9 xs-12" order=" order-3 order-sm-3 order-md-3 order-lg-1">
          <SavedBooks />
        </Col>
        <Col size="xl-4 lg-4 md-6 sm-9 xs-12" order=" order-2 order-sm-2 order-md-2 order-lg-2">
          <SearchBooks />
        </Col>
        <Col size="xl-4 lg-4 md-7 sm-9 xs-12" order=" order-1 order-sm-1 order-md-1 order-lg-3">
          <BooksList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
