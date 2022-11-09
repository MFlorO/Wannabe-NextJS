import Image from 'next/image'
import Link from "next/link"

const NotFound = () => {
    return(
        <>
             <Image src="/404.png" alt="404" width={500} height={500} className="h-screen w-full" />
             <Link href="/" alt="" className="absolute w-20 top-10 right-96 font-mono text-lg text-center text-zinc-300 bg-black border-2 border-gray-300 w-20 hover:shadow-lg hover:shadow-gray-500/40">GO TO HOME</Link>
        </>
    )
}

export default NotFound;