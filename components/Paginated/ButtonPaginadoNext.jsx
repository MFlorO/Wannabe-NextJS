import React from "react";

const ButtonPaginadoNext = ({pagina, setPagina, maximo}) => {

  const next = () => setPagina(pagina + 1)  //Pagina es mi pagina actual, que inicia en 0,  por eso le tengo que sumar 1
  
  return (
    <div>
      <button
        onClick={next}
        disabled={pagina === maximo}
        className="bg-black hover:bg-zinc-800 font-sains text-zinc-200 font-semibold py-2 px-6 border border-gray-400 rounded shadow"
      > NEXT
      </button>
    </div>
  );
};

export default ButtonPaginadoNext;
