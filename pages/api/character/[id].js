


//Ruta para el detalle
export default async function handler ( req, res ) {
    const { id } = req.query
    const resp = await fetch( `https://swapi.py4e.com/api/people/${id}` )
    const data = await resp.json()
    res.status( 200 ).json( data )
}