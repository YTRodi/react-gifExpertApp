import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

// Finjo cualquier llamada a ese archivo, suponer y controlar la info que me va a traer.
jest.mock("../../hooks/useFetchGifs"); 

describe('Pruebas en GifGrid', () => {
    
    const category = 'Tanjirou';

    test('Debe de mostrar el componente correctamente', () => {
        
        // Lo que hace esto es:
        // Cuando se llame a dicha función dentro del componente, va a regresar el obj.
        // Falseo la data, 'falsa implementación'
        useFetchGifs.mockReturnValue({
            // Estado inicial del objeto
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs (Custom HOOK)', () => {
        
        const gifs = [{
            id: 'YTR',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'Cualquier cosa'
        },
        {
            id: 'Msdiofj',
            url: 'https://localhost/otra/cosa.png',
            title: 'Cualquier otra cosa'
        }
        ];

        useFetchGifs.mockReturnValue({
            // Estado inicial del objeto
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe( false ); // No debería de existir el parrafo
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );

    });

});