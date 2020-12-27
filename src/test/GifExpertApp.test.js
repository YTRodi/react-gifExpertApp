import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en el componente GifExpertApp', () => {
    
    test('Debe de mostrar el componente correctamente', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar una lista de categorias', () => {
        
        // Nota:
        // Como no hay una forma de testear los estados que poseen los componentes, le pasamos un
        // valor por defecto al mismo, para poder evaluarlo en los test.
        const categories = ['Shingeki no kyojin', 'One Piece'];
        const wrapper = shallow( <GifExpertApp defaultCategory={ categories } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );

    });

});