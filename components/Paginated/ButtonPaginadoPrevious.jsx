import React from "react";

const ButtonPaginadoPrevious = ({pagina, setPagina}) => {

  const previous = () => setPagina(pagina - 1) //Pagina es mi pagina actual. Si estoy en next quiere decir que no estoy en 0. Por esto tengo que restar 1 para volver a mi pagina anterior

  return (
    <div>
      <button
        onClick={previous}
        disabled={pagina === 0}
        className="bg-black hover:bg-zinc-800 font-sains text-zinc-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        PREVIOUS
      </button>
    </div>
  );
};

export default ButtonPaginadoPrevious;
