import React, { useState } from "react";


const Search = ({character, setCharacterCopia, setMaximo}) => {
  
  const [search, setSearch] = useState(""); //Estado del input

  const onSearchChange = (event) => {  //Funcion que me toma lo que escriba en el input 
    setSearch(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //para que no refresque al dar "buscar"
	  filtrar(search); //le paso lo que escribo en el input a la funcion filtrar. Esta va a recorrer el array con los datos de la api y los va a filtrar de acuerdo al dato que escriba en el input
    setSearch("");
  };

 
  const filtrar = (elemenoBusqueda) => {
	
   let resultadosBusqueda = character.filter( e =>  e.name.toString().toLowerCase().includes(elemenoBusqueda)) //Filtro el original

   if(resultadosBusqueda.length > 0) {
     	setCharacterCopia(resultadosBusqueda) //Muestro la copia
      setMaximo(Math.ceil(resultadosBusqueda.length / 10) - 1 )  //Resetear la cantidad total de paginas porque cuando busco algo en search va a disminuir el array total
    }else{
       setCharacterCopia("") //Muestro cuando no se encuentra nada 
    }
  };

  const onClickReset = () => {  //Para resetear la busqueda
    return setCharacterCopia(character)
  }

  return (

    <form onSubmit={handleSubmit} className="absolute top-24 right-20 w-1/4 flex justify-between item-center" >
      <input
        className="h-9 w-60 bg-inherit border-2 border-gray-300 font-mono text-lg text-center text-zinc-200 "
        type="text"
        placeholder="Search Character..."
        value={search}
        onChange={onSearchChange}
      />

      <div className="flex mx-2">

      <button title="Search" type="submit"
	  className="font-mono text-lg text-center text-black bg-gray-300 border-2 border-gray-300 w-20 hover:shadow-lg hover:shadow-gray-400/40  "
	  >SEARCH</button>
	  
    <button onClick={onClickReset}
    className="font-mono text-lg text-center text-zinc-300 bg-black border-2 border-gray-300 w-20 hover:shadow-lg hover:shadow-gray-500/40 mx-2 "
	  >RESET</button>
    
    </div>

    </form>
  );
};

export default Search;
