import Head,{useState} from 'next/head'
// import styles from '../styles/Home.module.css'
import {HeadComponent, Characters} from "../components"
import Link from "next/link"

export async function getServerSideProps () {
  // Con el Fetch conecto a la api
  const res = await fetch( `http://localhost:3000/api/characters` )
  const data = await res.json()

  //Paso data a la pagina por props
  return { props: { data } }
}



export default function Home({ data }) {


  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >

        <div className="bg-neutral-700 h-full w-full -z-20 flex flex-col">
          <HeadComponent />

          <h2 className=" my-7 font-sains text-4xl text-center text-zinc-200 underline decoration-soli">CHARACTERS</h2>

          <div className="h-96">

            {data.length > 0 &&

              data.map((c) => {

                const { url, name } = c;
                const id = url.slice(29); //Para obtener el id unico de cada character y luego utilizarlo en la ruta detail

                return (
                  <Link href={`/detail/${id}`} key={id} className="w-full flex justify-center">
                    <Characters id={id} name={name} />
                  </Link>
                )
              })

            }

          </div>
          </div>
      </main>

    </>
  )
}


