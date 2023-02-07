import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MyFooter = () => (
  <Navbar bg="light" expand="lg" fixed="bottom">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyFooter;
