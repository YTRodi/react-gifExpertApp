import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ( { defaultCategory = [] } ) => {

    // const categoriesDefault = [ 'Kimetsu no Yaiba', 'Shingeki no kyojin', 'Made in abyss' ];
    // const [ categories, setCategories ] = useState( categoriesDefault );

    // const [ categories, setCategories ] = useState( [ 'Tanjiro' ] );
    const [ categories, setCategories ] = useState( defaultCategory );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    // El key NO PUEDE ser el índice y TIENE QUE SER único.
                    categories.map( category =>

                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                        
                    )              
                }
            </ol>
        </>
    )
}

export default GifExpertApp
