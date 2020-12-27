import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

// Usamos una libreria para probar los hooks

describe('Pruebas en el custom hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();


        expect( data ).toEqual( [] );
        expect( loading ).toEqual( true );

    });

    test('Debe de retornar una arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        // Esta función nos va a retornar una promesa que nos indica cuando sucedió un cambio
        // en el estado del custom hook.
        expect( data.length ).toBe( 20 );
        expect( loading ).toBe( false );

    });

});