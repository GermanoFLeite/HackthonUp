import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sobre from "../Pages/sobre/index";
import NossoTime from "../Pages/nossoTime/index";
import Home from "../Pages/home";
import Programas from "../Pages/programas/index";
import NotFound from "../Pages/NotFound";
import FastDating from "../Pages/fastDating";

function Rotas() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/*" exact element={<NotFound />} />
          <Route path="/fastdating" element={<FastDating />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/nossotime" element={<NossoTime />} />
          <Route path="/programas" element={<Programas />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Rotas;
