import React  from "react";


export async function getServerSideProps ( { params } ) { //id por params
    const personaje = await fetch( `http://localhost:3000/api/character/${params.id}` )
    const data = await personaje.json()
    return { props: { data } }
}


const Details = ({data}) => {

  //Me traigo el id por params y le hago destructuring de sus propiedades

  const { name, gender, eye_color, skin_color, hair_color, height, mass } = data

  return (
    <div className="bg-neutral-700 h-screen w-full -z-20 flex flex-col ">
     
      <div className="w-full mt-20 flex flex-col justify-center items-center font-sains text-4xl text-zinc-200 ">
        <h2>{name}</h2>
        <h2>{gender}</h2>
        <h2>{eye_color}</h2>
        <h2>{skin_color}</h2>
        <h2>{hair_color}</h2>
        <h2>{height}</h2>
        <h2>{mass}</h2>
      </div>
    </div>
  );
};

export default Details;
