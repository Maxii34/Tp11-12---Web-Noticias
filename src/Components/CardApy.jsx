import Card from 'react-bootstrap/Card';

export const CardApy11 = () => {
  return (
    <Card className="CardsApy-css">
      <Card.Img variant="top" src="holder.js/100px180" className="CardsApy-css-top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="button2" >Ver articulo</button>
      </Card.Body>
    </Card>
  );
};

export const CardApy12 = () => {
  return (
    <Card className="CardsApy-css">
      <Card.Img variant="top" src="holder.js/100px180" className="CardsApy-css-top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button variant="link" className="button2" >Ver articulo</button>
      </Card.Body>
    </Card>
  );
};
