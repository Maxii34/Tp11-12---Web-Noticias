import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar expand="lg" className=" bg-dark shadow">
      <Container>
        <Navbar.Brand href="#home" className=" text-light">
          Tp11&12 - Web Noticias
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="button mx-2">
             <i class="bi bi-bookmark-check fs-5 mx-1"></i> Tp:11
            </Nav.Link>
            <Nav.Link href="/Tp12" className="button mx-2">
              <i class="bi bi-bookmark-check fs-5 mx-1"></i> Tp:12
            </Nav.Link>
            <Nav.Link href="https://github.com/Maxii34/Tp11-12---Web-Noticias" className="button mx-2" target="_blank">
              <i class="bi bi-github fs-5 mx-1"></i> Repositorio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
