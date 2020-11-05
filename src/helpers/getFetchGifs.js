// Función para consumir los datos de la Fetch API
export const getFetchGifs = async( category ) => {

    // encondeURI = Va a encargarse de los espacios en blanco, es decir, de los caracteres de escape como por ejemplo: los va a transformar en '%20'
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=Nt4ACMs0TBmsydLDNeElO00qxCJaqUTp`; 
    const res = await fetch( url );
    const { data } = await res.json();
    
    // No me interesan todos los datos que me proporciona la data, solo algunos por eso mapeo...
    const onlyGifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // images? = Preguntamos que si viene una imagen, vamos a utilizar esta prop
        }

    });

    console.log( onlyGifs );
    return onlyGifs;

}
