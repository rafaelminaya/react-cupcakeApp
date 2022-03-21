import Banner from "../sections/Banner"
import Cupcakes from "./cupcakes"

const Home = () => (
  <>
    
    <Banner />
    {/*  Nos traeremos aquellos componentes cuyo "sabor" contenga la palabra "fresa". Este formato es facilitado por el "json server"*/}
    <Cupcakes peticion="cupcakes?sabor_like=fresa"/>
  </>

)


export default Home