import { Form, Button, Container } from "react-bootstrap";
import { ContainerCards12 } from "./ContainerCards";
import { useState } from "react";


const Tp12Noticias = () => {
  const [datoNoticia2, setdatoNoticia2] = useState([]); 
  const [categoria2, setcategoria2] = useState("");
  const [pais2, setpais2] = useState("ar");

  const handleSubmit = (e) => {
    e.preventDefault();
    consultaApi();
  };

  const consultaApi = async () => { 
    try {
      const API_KEY = "pub_086cc81419ff49e6b17633dc30c69dcb";
      const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=es&country=${pais2}${
        categoria2 ? `&category=${categoria2}` : ""
      }`;

      const respuesta = await fetch(url);
      console.log(respuesta);

      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);
        setdatoNoticia2(datos.results); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <section className="border-primary my-4 text-center mx-2">
        <h1 className="fw-bold display-5 text-info">Buscar noticias</h1>
        <div>
          <Form className="mt-3 sect" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Selecciona una categoria"
                className="EfectoTransparente text-light"
                value={categoria2} 
                onChange={(e) => setcategoria2(e.target.value)} 
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
                value={pais2} 
                onChange={(e) => setpais2(e.target.value)}
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

            <Button variant="dark" type="submit" className="rounded-pill px-4">
              Buscar Noticias
            </Button>
          </Form>
        </div>
        <div>
          <ContainerCards12 datoNoticia2={datoNoticia2} />
        </div>
      </section>
    </Container>
  );
};

export default Tp12Noticias;