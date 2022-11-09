import React from 'react';


export default function Paginated({pagina, setPagina, maximo}){

    const next = () => setPagina(pagina + 1)  //Pagina es mi pagina actual, que inicia en 0,  por eso le tengo que sumar 1
    const previous = () => setPagina(pagina - 1) //Pagina es mi pagina actual. Si estoy en next quiere decir que no estoy en 0. Por esto tengo que restar 1 para volver a mi pagina anterior
    
    return(
        <div className='h-16 mb-6 flex justify-between items-center'>
           
            <div>
              <button onClick={previous} disabled={pagina === 0}
              className="bg-black hover:bg-zinc-800 font-sains text-zinc-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> 
              PREVIOUS  </button>
            </div>

            <p className="mx-6 font-sains text-md text-center text-zinc-200">PAGINA: {pagina + 1 }</p>
          
            <div>
              <button onClick={next} disabled={pagina === maximo}
               className="bg-black hover:bg-zinc-800 font-sains text-zinc-200 font-semibold py-2 px-6 border border-gray-400 rounded shadow"> 
              NEXT </button>
            </div>
        </div>
    )
}