import Banner from "../sections/Banner"
import Servicios from "../sections/Servicios"
import Cupcakes from "./cupcakes"

const Home = () => (
  <>
    
    <Banner />
    {/*  Nos traeremos aquellos componentes cuyo "sabor" contenga la palabra "fresa". Este formato es facilitado por el "json server"*/}
    <Cupcakes peticion="cupcakes?sabor_like=fresa"/>
    <Servicios peticion="servicios"/>
  </>

)

export default Home