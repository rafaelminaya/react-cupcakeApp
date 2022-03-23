//Importo mi hoja de estilos en sass
import Home from "./pages/home";
import Header from "./sections/Header";
import Cupcakes from "./pages/cupcakes";
import AboutUs from "./pages/aboutUs";
import "../styles/styles.scss";

//Import para poder usar el React Router
import { BrowserRouter } from "react-router-dom";
//Import para poder usar el React Router
import { Routes, Route } from "react-router-dom";


const App = () => (
  <>
{/* BrowserRouter : Este componente debe envolver a toda la aplicación */}
  <BrowserRouter>
    <Header/>
    {/* 
    - No hay necesidad de que haya un orden en estas rutas pero es recomendable tener la ruta con 'path="/"' al último.
    - <Routes> Este componente permite agrupar rutas. Envolvemos solo a los componentes que van a redireccionar.
    - <Route> : Declara una ruta al componente. Este componente es hijo de <Routes>
    - path : Propiedad que indica el nombre de la ruta.
    - element : Es el componente a renderizar según el atributo "path".
    - title : Prop enviada al archivo "cupcakes.js para luego condicionar el renderizar o no un elemento JSX.
    */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cupcakes" element={<Cupcakes peticion="cupcakes" title/>}/>
      <Route path="/nosotros" element={<AboutUs/>}/>
    </Routes>
  </BrowserRouter>
  
  </>
)

export default App;
