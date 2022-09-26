import { Col, Row, Container, Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Coconut from "../images/coconut-oil.jpg";
import Chips from "../images/chips-no-salsa.jpg";

const Articles = () => {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const videoClose = () => setShowVideo(false);
  const videoOpen = () => setShowVideo(true);

  return (
    <Container>
      <Row className="wrapper-1">
        <Col sm="6">
          <h3 className="article-title">Healthy Coconut oil</h3>
          <p className="article-content">
            Is there a place for coconut oil in a healthy diet?
          </p>
          <Button variant="dark" onClick={handleShow}>
            Explore more
          </Button>

          <Modal show={show} onHide={handleClose}>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/goIfgmQQOKc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Modal>
        </Col>
        <Col sm="6" lg="4">
          <img src={Coconut} className="img-fluid rounded-pill" alt="coconut" />
        </Col>
      </Row>

      <Row className="wrapper-1">
        <Col sm="6" lg="4">
          <img src={Chips} className=" img-fluid rounded-pill" alt="chip" />
        </Col>
        <Col sm="6">
          <h3 className="article-title">
            Ugly Side Effects of Eating Potato Chips
          </h3>
          <p className="article-content">
            Overeating this salty snacks can cause some serious damage
          </p>
          <Button variant="dark" onClick={videoOpen}>
            Explore more
          </Button>
          <Modal show={showVideo} onHide={videoClose}>
            <iframe
              width="560"
              height="315"
              loading="lazy"
              src="https://www.youtube.com/embed/K_8Zsx03lNk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
