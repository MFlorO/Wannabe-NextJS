import React from 'react';

const Characters = ({id,name}) => {
	
	return (
		<div className='w-60'>
			<h3 className="font-sains text-xl text-center text-zinc-200 hover:text-2xl">{name}</h3>
		</div>
		)
};

export default Characters;
