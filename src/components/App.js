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
    No hay necesidad de que haya un orden en estas pero es recomendable tener la ruta con 'path="/"' al último
    <Routes> Envolvemos solo a los componentes que van a redireccionar. Este componente también permite agrupar rutas.
    <Route> : Declara una ruta al componente. Este componente es hijo de <Routes>
    path : Propiedad que indica el nombre de la ruta.
    element : Esel componente a renderizar según el atributo "path"
    */}
    <Routes>
      <Route path="/cupcakes" element={<Cupcakes/>}/>
      <Route path="/nosotros" element={<AboutUs/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  
  </>
)

export default App;
