import React from 'react';

const Characters = ({name}) => {
	
	return (
		<div className='w-60 mt-2'>
			<h3 className="font-sains text-xl text-center text-zinc-500 hover:text-2xl hover:text-zinc-300">{name}</h3>
		</div>
		)
};

export default Characters;
