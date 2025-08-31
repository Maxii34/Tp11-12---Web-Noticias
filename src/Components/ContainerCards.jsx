import { Row, Col } from "react-bootstrap";
import {CardApy11, CardApy12 } from "./CardApy";


/*Expor del componente tp-11*/
export const ContainerCards11 = () => {
  return (
    <div className="container my-4">
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
        <CardApy11 />
        </Col>
      </Row>
    </div>
  );
};

/*Expor del componente tp-12*/
export const ContainerCards12 = () => {
  return (
    <div className="container my-4">
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
        <CardApy12 />
        </Col>
      </Row>
    </div>
  );
};

