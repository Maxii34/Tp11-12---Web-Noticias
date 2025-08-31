import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./Components/Inicio";
import Tp12Noticias from "./Components/Tp12Noticias";
import Menu from "./Components/Shared/Menu";
import Footer from "./Components/Shared/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/Tp12" element={<Tp12Noticias></Tp12Noticias>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
