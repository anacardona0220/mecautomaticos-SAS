import Contactanos from "./Contactanos";
import Nosotros from "./Nosotros";
import Proyectos from "./Proyectos";
import Servicios from "./Servicios";

const Barra = () => {
  return (
    <div className="element-barra">
      <div className="header-barra">
        <ul className="container-ul">
          <li>Nosotros</li>
          <ul className="nosotros">
            <li>Mision</li>
            <li>Vision</li>
            <li>Objetivos</li>
          </ul>
          <li className="servicios">Servicios</li>
          <ul>
            <li>Automatización de Maquinaria Industrial:</li>
            <li>Electrónica Industrial</li>
            <li>Programación de PLC</li>
            <li>Montajes Industriales</li>
            <li>Montajes Metalmecánicos</li>
            <li>Puertas Eléctricas y Control de Acceso</li>
            <li>Consultoría y Desarrollo a Medida</li>
          </ul>
          <li className="proyectos">Proyectos</li>
          <ul className="container-ul2">
            <li>Arcroma</li>
            <li>Triguisar</li>
            <li>Otro</li>
          </ul>
          <li>Contactanos</li>
        </ul>
      </div>
    </div>
  );
};

export default Barra;
