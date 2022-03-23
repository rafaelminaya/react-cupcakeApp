//Importamos la librería propTypes, de forma desestructurada, que nos ayudará a controlar los tipos de datos

import { number, string } from "prop-types"
import { useEffect, useRef, useState } from "react"
import "../../../src/Cupcake.css"
import { usePatch } from "../../hooks/useFetch"

const Cupcake = ({id, descripcion, imagen, sabor, color, precio, vendido}) => {

    //estado y función para controlar el valor de "vendido"
    const [stateVendido, setVendido] = useState(vendido)

    //Referencias para controlar el elemento de la imagen y el input de tipo hidden
    const refImagenCupcake = useRef()
    const refIdCupcake = useRef()
    
    //Preparación del consumo del API que actualiza el estado a vendido
    let idCupcake = id           
    let peticion = `cupcakes/${idCupcake}`
    //const [cupcakes, error] = usePatch(peticion, stateVendido)
    usePatch(peticion, stateVendido)
        
    //Usamos "useEffect" para controlar el color de la imagen, 
    useEffect(() => {
        const elementoImagen = refImagenCupcake.current
        if(stateVendido){

            elementoImagen.classList.add("vendido")
        }else{
            elementoImagen.classList.remove("vendido")
        }
           //Solo en la primera carga del componente, por eso enviamos un array vacío "[]"
    }, [stateVendido])
    
    //Función creada por nosotros, que en su nombre necesita anteponer la palabra "use" ya que invoca a un hook.
    const useVender = () => {    
        const elementoImagen = refImagenCupcake.current
        elementoImagen.classList.add("vendido")
        setVendido(true)            
    }

    //Variable para asignar un estilo enviado a mi componente
    const colorRojo = {
        color: "red"
    }

    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <input ref={refIdCupcake} type="hidden" value={id}></input>
            <img ref={refImagenCupcake} src={imagen} alt={sabor}/>
            <p>{descripcion}</p>
            <span>Color: {color}</span><br></br>
            <span>Precio: {precio}</span><br></br>
            {
                stateVendido === true ? <span style={colorRojo} >Vendido</span> : <button className="button dark-color" onClick={useVender}>Comprar</button>
            }
            
        </div>
    )
}

/*
PRIMERA FORMA - import propTypes from "prop-types"
*/

/*
Cupcake.propTypes = {    
    precio: propTypes.number,
    color: propTypes.string,
    descripcion: propTypes.string,
    sabor: propTypes.string,
    imagen: propTypes.string  
}
*/

/*
SEGUNDA FORMA - import {number, string} from "prop-types"

- Aquí indico los tipos de datos a obtener de las props" de este componente
- propTypes : Permite asignar los "prop-types" de mi componente
- precio: PropTypes.number : Indico que el "prop" llamado "precio" será de tipo "Number".
-isRequired : Permite indicar que estas "props" son requeridas.
*/

Cupcake.propTypes = {    
    precio: number,
    color: string.isRequired,
    descripcion: string.isRequired,
    sabor: string.isRequired,
    imagen: string  
}

/*
Asignamos valores por defecto a las propiedades que hemos puesto como requeridas.
Asignamos valor por defecto al prop "imagen" en caso no tenga un valor.
*/

Cupcake.defaultProps = {
    imagen: "https://www.projectelitestore.com.co/72-home_default/vitrales-diferentes-motivos.jpg",
    precio: 0
}

export default Cupcake