
import useFetch from "../../hooks/useFetch"

const Servicios = ({peticion}) => {

    /*
    const [servicios, setServicios] = useState()
 
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_URL_API}${peticion}`)   // http://localhost:3050/servicios       
        .then(({data}) => setServicios(data))
        
    }, [peticion])

    */

    //useFetch() : Retorna un arreglo con dos una valores, el valor del estado y un mensaje de error.
    const [servicios, error] = useFetch(peticion)
   
    //renderizo en caso obtenga un error de la función "useFetch()"
    if(error){
        return (
            <div className="ed-grid">
                <span>Hubo un error.</span>
            </div>
        )
    }

    if(!servicios || servicios.length === 0) {
        return (
            <div className="ed-grid">
                <span>No hay servicios.</span>
            </div>
        )
    }
    
    return (
        <div className="ed-grid">
            {
                servicios.map( serv => (
                    <div key={serv.id}>
                        <h2>{serv.nombre}</h2>
                        <p>{serv.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )

}

export default Servicios