import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const { data:images , loading } = useFetchGifs( category );
    // data:images = le agregamos un alias a la data, en esta caso las img.
    
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>

            {/* Operación lógica AND, si es true entonces evalua el primero, sino no evalua nada. */}
            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img  => (

                        <GifGridItem 
                            key={ img.id }
                            { ...img } // Estoy enviando cada una de las props de las img como una prop independiente.
                            // img={ img } 
                        />

                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;
