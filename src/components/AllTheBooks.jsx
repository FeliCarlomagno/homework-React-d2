import { Card, Button, Container, Row } from "react-bootstrap";
import book from "../../src/books";

const AllTheBooks = () => (
  <Container>
    <Row>
      {book.map((book) => (
        <Card style={{ width: "18rem" }} className="col">
          <Card.Img variant="top" src={book.cover} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
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
