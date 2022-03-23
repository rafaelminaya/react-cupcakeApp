
import { useState, useEffect } from "react"
//Importamos al librería de Axios
import Axios from "axios"

//Debemos de recibir de prop un enpoint que es lo que tienen de diferente al consumir un API.
const useFetch = (endpoint) => {

    const [state, setState] = useState()
    const [error, setError] = useState()
    
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_URL_API}${endpoint}`)        
        .then(({data}) => setState(data))
        .catch( err => setError(err))
    }, [endpoint])

    return [state, error]
}

//Consumo de API que recciona a cambios de la url "endpoint" y del valor recibido del estado vendido "valueVendido"
export const usePatch = (endpoint, valueVendido) => {

    const [state, setState] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        Axios.patch(`${process.env.REACT_APP_URL_API}${endpoint}`,{
            vendido: valueVendido
        })        
        .then(({data}) => setState(data))
        .catch( err => setError(err))
    }, [endpoint, valueVendido])
    

    return [state, error]

}

export default useFetch