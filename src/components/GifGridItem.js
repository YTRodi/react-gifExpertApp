import React from 'react'

const GifGridItem = ( { title, url } ) => {

    // props.title
    // console.log( { id, title, url} );

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title ? title : 'No title' }</p>
        </div>
    )
}

export default GifGridItem;
