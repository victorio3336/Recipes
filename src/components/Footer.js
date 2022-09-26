import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xm="6">
            <h3>
              <strong className="logo-footer">AweRecipes</strong>
            </h3>
          </Col>
          <Col xs="6" sm="6" className="text-center">
            <a className="btn btn-social-icon btn-instagram-sm">
              <span className="fa fa-instagram"></span>
            </a>
            <a
              className="btn btn-social-icon btn-facebook-sm"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              className="btn btn-social-icon btn-twitter-sm"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className="btn btn-social-icon btn-google-sm"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
