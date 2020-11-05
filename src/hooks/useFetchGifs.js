import { useEffect, useState } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

// Custom HOOK
// Funcionan como si fuera functional components, pueden tener efectos, pueden usar reducer, contextos
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Me permite poder ejecutar código de manera condicional, es decir,
    // solamente quiero que se ejecute esa condición cuando el componente es RENDERIZADO por PRIMERA vez. ( NO PUEDEN SER async )
    // ( Analogía al patrón de diseño Singleton )
    //     1er param = función a ejecutar
    //     2do param = [] de dependencias

    // Si la catergoria cambia entonces se ejecuta de nuevo el useEffect
    useEffect( () => {

        getFetchGifs( category )
            .then( imgs => {

                // console.log(imgs);
                setState( {
                    data: imgs,
                    loading: false
                });

            });

            console.log(category);
            
    }, [category])

    return state; // { data: [], loading: true }

};