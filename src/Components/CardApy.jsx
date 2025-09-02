import Card from "react-bootstrap/Card";

// CardApy11.jsx
export const CardApy11 = ({ datoNoticia }) => {
  return (
    <Card className="CardsApy-css">
      <Card.Img
        variant="top"
        src={datoNoticia.image_url || "https://via.placeholder.com/300"}
        className="CardsApy-css-top"
      />
      <Card.Body>
        <Card.Title>{datoNoticia.title}</Card.Title>
        <Card.Text>
          <span className="description">{datoNoticia.description || "Sin descripción disponible"}</span>
          <br />
          <span>
            <strong>Fuente:</strong> {datoNoticia.source_id}
          </span>
        </Card.Text>
        <a
          href={datoNoticia.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="button2"
        >
          Ver artículo
        </a>
      </Card.Body>
    </Card>
  );
};

export const CardApy12 = () => {
  return (
    <Card className="CardsApy-css">
      <Card.Img
        variant="top"
        src="holder.js/100px180"
        className="CardsApy-css-top"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button variant="link" className="button2">
          Ver articulo
        </button>
      </Card.Body>
    </Card>
  );
};
