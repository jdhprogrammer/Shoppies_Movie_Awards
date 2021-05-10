import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import {Jumbotron, Image} from "react-bootstrap";
import award from "../pages/images/movie_award.png";

const SubmitDone = () => {
  return (
    <Container>
      <Row>
        <Col >
          <Jumbotron className='text-center fluid p-4'>
            <h3>Thank You for your Nominations!</h3>
            <h3>
              <span>
                Check Back in a Week to see Who Won the awards.
              </span>
            </h3>
            <Image fluid src={award} />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default SubmitDone;
