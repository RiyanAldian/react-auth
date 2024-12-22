import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardKu(srcStat = true, source) {
  return (
    <Card style={{ width: "18rem" }}>
      {srcStat && <Card.Img variant="top" source />}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardKu;
