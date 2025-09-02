import { Form, Button, Container } from "react-bootstrap";
import { ContainerCards11 } from "./ContainerCards";
import { useState } from "react"; // 👈 useEffect ya no se usa, así que no lo importamos

const Inicio = () => {
  const [datoNoticia, setdatoNoticia] = useState([]);
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    consulaApi();
  };

  const consulaApi = async () => {
    try {
      const API_KEY = "pub_086cc81419ff49e6b17633dc30c69dcb";
      const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=es&country=ar${
        categoria ? `&category=${categoria}` : ""
      }`;

      const respuesta = await fetch(url);
      console.log(respuesta);

      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);
        setdatoNoticia(datos.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <section className=" border-primary my-4 text-center mx-2">
        <h1 className="fw-bold display-5 text-info">Buscar noticias</h1>
        <div>
          <Form className="mt-3 sect" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Selecciona una categoria"
                className="EfectoTransparente text-light"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
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

            <Button variant="dark" type="submit" className="rounded-pill px-4">
              Buscar Noticias
            </Button>
          </Form>
        </div>
        <div>
          <ContainerCards11 datoNoticia={datoNoticia} />
        </div>
      </section>
    </Container>
  );
};

export default Inicio;