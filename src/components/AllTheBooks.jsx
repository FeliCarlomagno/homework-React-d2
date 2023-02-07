import { Card, Button, Container, Row } from "react-bootstrap";
import book from "../../src/books/fantasy.json";

const AllTheBooks = () => (
  <Container>
    <Row>
      {book.map((book) => (
        <Card style={{ width: "18rem" }} className="col-12 m-2">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>

            <Button variant="primary">Compra</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  </Container>
);
export default AllTheBooks;
