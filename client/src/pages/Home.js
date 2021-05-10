import React from "react";
import {Col, Row, Container} from "../components/Grid";
import SearchMovies from "../components/SearchMovies/SearchMovies";
import MovieList from "../components/MoviesList/MoviesList";
import Nominations from "../components/Nominations/Nominations"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="xl-4 lg-4 md-6 sm-9 xs-12" order=" order-3 order-sm-3 order-md-3 order-lg-1">
          <Nominations />
        </Col>
        <Col size="xl-4 lg-4 md-6 sm-9 xs-12" order=" order-2 order-sm-2 order-md-2 order-lg-2">
          <SearchMovies />
        </Col>
        <Col size="xl-4 lg-4 md-7 sm-9 xs-12" order=" order-1 order-sm-1 order-md-1 order-lg-3">
          <MovieList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
