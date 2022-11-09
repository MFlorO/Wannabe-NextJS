import React from 'react';


export default function Paginated({pagina, setPagina, maximo}){


    function siguiente(){
        setPagina(pagina + 10)  
     }
    
    function anterior(){
       setPagina(pagina - 10)
    }
    
    const maximoRedondeo = Math.ceil(maximo) 

    return(
        <div className='flex justify-center items-center'>
            <div>
              <button onClick={anterior} 
              className=" my-7 font-sains text-xl text-center text-zinc-200 underline decoration-soli"> 
              PREVIOUS  </button>
            </div>
            
            <p>  {setPagina(pagina)} de {maximoRedondeo}</p>

            <div>
              <button onClick={siguiente}
              className=" my-7 font-sains text-xl text-center text-zinc-200 underline decoration-soli"> 
              NEXT </button>
            </div>
        </div>
    )
}