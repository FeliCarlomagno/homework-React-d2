import { Card, Button, Container, Row } from "react-bootstrap";
import book from "../../src/books/fantasy.json";

const AllTheBooks = () => (
  <Container>
    <Row>
      {book.map((book) => (
        <Card style={{ width: "18rem" }} className="col-12">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  </Container>
);
export default AllTheBooks;
