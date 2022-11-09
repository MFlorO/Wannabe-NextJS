import React from 'react';
import Image from 'next/image'

const HeadComponent = () => {
	return (
		<div className=" w-full h-56 relative z-8">
			<Image src="/fondoEstrellado.png" width={500} height={500} className="w-full h-full object-cover absolute mix-blend-overlay "/>
			   <div className=" w-1/2 h-full flex flex-row  justify-center items-center">
			  <h1 className="font-mono text-7xl text-center text-zinc-300">STAR WARS</h1>
		   </div>
		</div>
	  );
};

export default HeadComponent;
