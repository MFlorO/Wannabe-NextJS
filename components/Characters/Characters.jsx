import React from 'react';

const Characters = ({id,name}) => {
	
	return (
		<div className='w-60'>
			<h3>{id}</h3>
			<h3 className="font-sains text-xl text-center text-zinc-500 hover:text-2xl hover:text-zinc-300">{name}</h3>
		</div>
		)
};

export default Characters;
