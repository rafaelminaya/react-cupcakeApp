
import Cupcake from "../cards/cupcake"
import useFetch from "../../hooks/useFetch"

const Cupcakes = ({peticion, title}) => {

    /*

    PETICIÓN CON FETCH

    - data => setCupcakes(data) : Almaceno la información que venga en data en la variable "cupcakes".
    - process.env.REACT_APP_URL_API : Permte acceder a la variable de entorno cuyo nombre es "REACT_APP_URL_API"
    */

   /*

    const [cupcakes, setCupcakes] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(response =>  response.json())
        .then(data => setCupcakes(data))
        .catch(e=> console.log(e))
    }, [peticion])
    */
   
   /*
   PETICIÓN CON AXIOS - ALTERNATIVA

   - {data} : Usamos la desestructuración ya que pa información obtenida por Axios será devuleta/empaquetada dentro de un objeto llamado "data"
   */

  /*
    useEffect(() => {
        // http://localhost:3050/cupcakes o http://localhost:3050/cupcakes?sabor_like=fresa  - Dependiendo de la prop "petición"
        Axios.get(`${process.env.REACT_APP_URL_API}${peticion}`) 
        .then(({data}) => setCupcakes(data))
        
    }, [peticion])
    */

    //USAMOS LOS HOOKS PROPIOS 
    //useFetch() : Es una función/hook personlizado el cual le enviaremos de parámtro la petición, que es el enpoint
    const [cupcakes] = useFetch(peticion)
    /*
    title && <h1>Página de cupcakes</h1> : Acá digo que si existe title, que renderice el JSX. este "title" es una condición de existencia.
    */

    return (
        <div className="ed-grid">
            {
                title && <h1>Página de cupcakes</h1>
            }    
            {/*
            - Hago un operador ternario donde si el arreglo "cupcakes" existe, renderizará la lógica del "map", de lo contrario el "<span>"
            - map() : Usamos la función "map" para recorrer el arreglo, ya que no podría trabajar en el arreglo original con el método "foreach()" 
            - Con map sí podría ya que me devuelve un nuevo arreglo. 
            - dentro del callback destructuro el objeto que recibimos del API.
            - key : Es el valor único que requiere la función "map()" para cada objeto del bucle. Se le puede enviar cualquier valor pero que sea único en cada objeto.
            */}
            {

            cupcakes ? (        
                <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                    {
                        cupcakes.map(({id, descripcion, imagen, sabor, color, precio, vendido}) => 
                        <Cupcake key={id} id={id} imagen={imagen} descripcion={descripcion} sabor={sabor} color={color} precio={precio} vendido={vendido} />
                        )
                    }                            
                </section>
                    ) : (                        
                        <span>Cargando...</span>                        
                    )
            }
            
        </div>
    )
}    

export default Cupcakes