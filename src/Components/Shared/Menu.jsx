import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar expand="lg" className=" bg-dark shadow">
      <Container>
        <Navbar.Brand href="#home" className=" text-light">Tp11&12 - Web Noticias</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-light btn-css mx-2">Tp:11</Nav.Link>
            <Nav.Link href="/Tp12" className="text-light btn-css mx-2">Tp:12</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
