const baseURL = "https://swapi.py4e.com/api/people" || "http://localhost:3001";


//Ruta para el detalle
export default async function handler ( req, res ) {
    const { id } = req.query
    const resp = await fetch( `${baseURL}/${id}` )
    const data = await resp.json()
    res.status( 200 ).json( data )
}