import Mv from "./MV";
import Objetivos from "./Objetivos";
import ImageMv from "./imageMv";
import ImageObjetivos from "./imageObjetivos";

const Nosotros1 = () => {
  return (
    <div className="container-nosotros1">
      <h1 className="title-nosotros1">Nosotros</h1>
      <div>
        <Mv />
        <ImageMv />
        <ImageObjetivos />
        <Objetivos />
      </div>
    </div>
  );
};

export default Nosotros1;
