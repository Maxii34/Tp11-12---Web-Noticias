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
      /* Mensaje de fallback si no hay noticias */
      <Col xs={12}>
        <p className="text-center text-muted fs-5">
          No se encontraron noticias. Selecciona una categoría.
        </p>
      </Col>
    )}
  </Row>
</div>
  );
};

/* Expor del componente tp-12 */
export const ContainerCards12 = () => {
  return (
    <div className="container my-4">
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          {/* Este no recibe nada */}
          <CardApy12 />
        </Col>
      </Row>
    </div>
  );
};
