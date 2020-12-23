import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Un Título';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( < GifGridItem title={title} url={url} /> );

    test('Debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find( 'p' );

        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find( 'img' );
        // console.log( img.html() );

        // Objeto con todas las propiedades de la etiqueta o puedo hacerlo por cada propiedad individualmente.
        // console.log( img.props() ); 

        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );

    });

    test('Debe de tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find( 'div' );
        const className = div.prop( 'className' );
        
        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
        expect( div.hasClass( 'animate__fadeIn' ) ).toBe( true );

    });

});