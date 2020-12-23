import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState( '' );
    
    const handleInputChange = ( e ) => {
        // console.log( e.target.value );
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) {
            
            // Como no tengo acceso a las categorias del componente padre, tengo que usar un callback así tengo una referencia a ese array.
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue( '' ); // Para que no se creen valores con el mismo key.
        } else {
            console.error( `El gif a buscar no puede tener menos de 2 caractéres` );
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                // required
                placeholder='Ingrese gif a buscar'
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



export default AddCategory
