import Contactanos from "./Contactanos";
import Nosotros from "./Nosotros";
import Proyectos from "./Proyectos";
import Servicios from "./Servicios";

const Barra = () => {
  return (
    <div className="element-barra">
      <div className="box">
        <Servicios />
      </div>
      <div className="box">
        <Proyectos />
      </div>
      <div className="box">
        <Contactanos />
      </div>
      <div className="box">
        <Nosotros />
      </div>
  
    </div>
  );
};

export default Barra;
