import { Form, Button } from "react-bootstrap";

const Tp12Noticias = () => {
  return (
    <section className="border-primary my-4 text-center mx-2">
      <h1 className="fw-bold display-5">Buscar noticias</h1>
      <div>
        <Form className="mt-3 sect">
          <Form.Group className="mb-3">
            <Form.Select
              aria-label="Selecciona una categoria"
              className="EfectoTransparente"
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
              className="EfectoTransparente"
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
    </section>
  );
};

export default Tp12Noticias;
