//Import para poder usar los "links" (hipervículos) del React Router
import { NavLink, Link } from "react-router-dom";


const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <a href="/">
            <img className="main-logo" src="https://ux.ed.team/img/edteam-ux.svg" alt="Logo EDcupcake"/>
          </a>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            {/* NavLink : 
            - Componente de React que permite añadir un hipervínculo en reemplazo de la etiqueta "<a>".
            - Se debe usar esto ya que la aplicación es una SPA.
            - Este componente está se usa en reemplazo de <Link>.
            - La diferencia con el componente <Link> es que <NavLink> resalta de un color el componente que está renderizado.
            - exact : Propiedad que permite independizar (entre hijos) los colores de resaltado para cada <NavLink> */}
            <ul>
              <li><NavLink to="/" exact>Inicio</NavLink></li>
              <li><NavLink to="/cupcakes" exact>Cupcakes</NavLink></li>
              <li><NavLink to="/nosotros" exact>Nosotros</NavLink></li>
            </ul>

              {/* Alternativa con el Componente <Link> */}
            
            {/* <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/cupcakes">Cupcakes</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
            </ul> */}

          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
)

export default Header