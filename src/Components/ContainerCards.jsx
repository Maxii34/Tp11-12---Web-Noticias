import { Row, Col } from "react-bootstrap";
import { CardApy11, CardApy12 } from "./CardApy";

/* Expor del componente tp-11 */
export const ContainerCards11 = ({ datoNoticia }) => {
  return (
    <div className="container my-4">
      <Row className="g-4">
        {/* Mapeo las noticias solo si existen y son un array */}
        {datoNoticia && Array.isArray(datoNoticia) && datoNoticia.length > 0 ? (
          datoNoticia.map((noticia, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              {/* Paso la noticia como prop con nombre 'datoNoticia' */}
              <CardApy11 datoNoticia={noticia} />
            </Col>
          ))
        ) : (
          /* Mensaje si no hay noticias */
          <Col xs={12}>
            <p className="text-center text-muted fs-5 text-light">
              No se encontraron noticias. Selecciona una categoría.
            </p>
          </Col>
        )}
      </Row>
    </div>
  );
};

/* Expor del componente tp-12 */
export const ContainerCards12 = ({ datoNoticia2 }) => {
  return (
    <div className="container my-4">
      <Row className="g-4">
        {datoNoticia2 && Array.isArray(datoNoticia2) && datoNoticia2.length > 0 ? (
          datoNoticia2.map((noticia2, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <CardApy12 datoNoticia2={noticia2} />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p className="text-center text-muted fs-5 text-light">
              No se encontraron noticias. Selecciona una categoría o país.
            </p>
          </Col>
        )}
      </Row>
    </div>
  );
};
