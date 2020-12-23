import { getFetchGifs } from "../../helpers/getFetchGifs";

describe('Pruebas con getGifs Fetch', () => {
   
    test('Debe de traer 20 elementos', async() => {

        const gifs = await getFetchGifs( 'Tanjirou' );

        expect( gifs.length ).toBe( 20 );

    });

    test('Tiene que traer 0 elementos', async() => {

        const gifs = await getFetchGifs( '' );

        expect( gifs.length ).toBe( 0 );

    });
    
});