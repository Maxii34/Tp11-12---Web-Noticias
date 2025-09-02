import Card from "react-bootstrap/Card";

// CardApy11.jsx
export const CardApy11 = ({ datoNoticia }) => {
  //si no hay dato, no renderiza
  if (!datoNoticia) return null;

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
          <span className="description">
            {datoNoticia.description || "Sin descripción disponible"}
          </span>
          <br />
          <span>
            <b>Fuente:</b> {datoNoticia.source_id}
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

export const CardApy12 = ({ datoNoticia2 }) => {
  //si no hay dato, no renderiza
  if (!datoNoticia2) return null;

  return (
    <Card className="CardsApy-css">
      <Card.Img
        variant="top"
        src={datoNoticia2.image_url || "https://via.placeholder.com/300"}
        className="CardsApy-css-top"
      />
      <Card.Body>
        <Card.Title>{datoNoticia2.title}</Card.Title>
        <Card.Text>
          <span className="description">
            {datoNoticia2.description || "Sin descripción disponible"}
          </span>
          <br />
          <span>
            <b>Fuente:</b> {datoNoticia2.source_id}
          </span>
        </Card.Text>
        <a
          href={datoNoticia2.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Ver artículo
        </a>
      </Card.Body>
    </Card>
  );
};