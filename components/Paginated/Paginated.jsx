import React from 'react';
import ButtonPaginadoNext from './ButtonPaginadoNext';
import ButtonPaginadoPrevious from './ButtonPaginadoPrevious';


export default function Paginated({pagina, setPagina, maximo}){

    return(
        <div className='h-16 mb-6 flex justify-between items-center'>
           
              <ButtonPaginadoPrevious pagina={pagina} setPagina={setPagina} />

            <p className="mx-6 font-sains text-md text-center text-zinc-200">PAGINA: {pagina + 1 }</p>
          
              <ButtonPaginadoNext pagina={pagina} setPagina={setPagina} maximo={maximo}/>

        </div>
    )
}