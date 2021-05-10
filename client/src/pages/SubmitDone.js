import React from "react";
import {Col, Row, Container} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const SubmitDone = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h3>Thank You for your Nominations!</h3>
            <h3>
              <span>
                Check Back in a Week to see Who Won the awards.
              </span>
            </h3>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default SubmitDone;
