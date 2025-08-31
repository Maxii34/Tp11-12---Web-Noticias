import { Form, Button } from "react-bootstrap";
import {ContainerCards12 } from "./ContainerCards";



const Tp12Noticias = () => {
  return (
    <section className="border-primary my-4 text-center mx-2">
      <h1 className="fw-bold display-5  text-info">Buscar noticias</h1>
      <div>
        <Form className="mt-3 sect">
          <Form.Group className="mb-3">
            <Form.Select
              aria-label="Selecciona una categoria"
              className="EfectoTransparente text-light"
            >
              <option value="">Selecciona una categoria</option>
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="health">Salud</option>
              <option value="politics">Política</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnología</option>
              <option value="top">Top</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select
              aria-label="Selecciona un país"
              className="EfectoTransparente text-light"
            >
              <option value="">Selecciona un país</option>
              <option value="ar">Argentina</option>
              <option value="br">Brasil</option>
              <option value="cl">Chile</option>
              <option value="co">Colombia</option>
              <option value="es">España</option>
              <option value="mx">México</option>
              <option value="us">Estados Unidos</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" className="rounded-pill px-4 ">
            Buscar Noticias
          </Button>
        </Form>
      </div>
      <div>
        <ContainerCards12 />
      </div>
    </section>
  );
};

export default Tp12Noticias;
