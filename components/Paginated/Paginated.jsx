import React from 'react';
import ButtonPaginadoNext from './ButtonPaginadoNext';
import ButtonPaginadoPrevious from './ButtonPaginadoPrevious';


export default function Paginated({pagina, setPagina, maximo}){

    return(
        <div className='h-16 w-1/3 mb-6 flex justify-between items-center'>
           
              <ButtonPaginadoPrevious pagina={pagina} setPagina={setPagina} />
          
              <ButtonPaginadoNext pagina={pagina} setPagina={setPagina} maximo={maximo}/>

        </div>
    )
}