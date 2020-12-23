import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {

    // Al declarar una función jest.fn => se puede saber:
    // como fue llamada, si fue llamada, cuantas veces fue llamada
    const setCategories = jest.fn();
    let wrapper = shallow( < AddCategory setCategories={ setCategories } /> );
    
    beforeEach( () => {
        // Reseteamos todo el componente como estaba originalmente.
        jest.clearAllMocks();
        wrapper = shallow( < AddCategory setCategories={ setCategories } /> );

    });

    test('Debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {
        
        // Simulación de cambio en la caja de texto.
        const input = wrapper.find( 'input' );
        const value = 'Hola Mundo';

        // #1 No hace falta el onChange, sólo 'change'
        // #2 Event
        input.simulate('change', { 
            target: {
                value
                // value: value - IDEM
            } 
        }); 

        expect( wrapper.find( 'p' ).text().trim() ).toBe( value );

    });

    test('NO debe de postear la info con submit', () => {
        
        // Simulamos submit
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault() {} } ); // Mandamos un método dentro de un obj.

        expect( setCategories ).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Spiderman';

        // Simulo el inputChange
        const input = wrapper.find( 'input' );
        input.simulate( 'change', { target: { value } } );

        // Simulo el submit
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault() {} } ); // Mandamos un método dentro de un obj.

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) ) // Si queremos evaluar que el setCategories se halla llamado como una función

        // Verifico si la caja de texto se limpió
        expect( input.prop( 'value' ) ).toBe( '' );
        
    });

});