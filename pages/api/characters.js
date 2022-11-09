
const llamada = async ( url, personajes = [] ) => {
    const resp = await fetch( url )
    const data = await resp.json()
    if ( data ) {
        personajes = personajes.concat( data.results )
        if ( data.next ) {
            return llamada( data.next, personajes )
        }
    }
    return personajes
}

export default async function handler ( req, res ) {

    const data = await llamada( 'https://swapi.dev/api/people' )

    res.status( 200 ).json( data )
}
