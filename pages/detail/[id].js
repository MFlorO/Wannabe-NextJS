import React  from "react";
import { NavBar } from "../../components";


const baseURL= process.env.REACT_APP_API ||  "https://wannabe-next-js.vercel.app/api/character";


export async function getServerSideProps ( { params } ) { //id por params
    const personaje = await fetch( `${baseURL}/${params.id}` )
    const data = await personaje.json()
    return { props: { data } }
}


const Details = ({data}) => {

  //Me traigo el id por params y le hago destructuring de sus propiedades

  const { name, gender, eye_color, skin_color, hair_color, height, mass } = data

  return (
    <>
    <NavBar /> {/*  Reutilizo el componente */}
    <div className="bg-black h-screen w-full flex flex-col justify-center items-center">
    <div className="border-2 border-zinc-900 shadow-xxl shadow-neutral-600/40 w-1/2 flex flex-col justify-center items-center">  
      
        <h2 className="font-sains text-5xl text-zinc-200 mb-4">{name.toUpperCase()}</h2>
        <div className="font-sains text-2xl text-zinc-200">
        <p>Gender: {gender}</p>
        <p>Eyer Color: {eye_color}</p>
        <p>Skin Color: {skin_color}</p>
        <p>Hair Color: {hair_color}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        </div>

     </div>
    </div>
    </>
  );
};

export default Details;
