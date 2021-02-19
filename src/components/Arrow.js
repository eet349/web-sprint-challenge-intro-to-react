import React from 'react';

const Arrow = ({ showCharacterInfo }) => {
	return showCharacterInfo ? (
		<div className='show-less-arrow'>▲</div>
	) : (
		<div className='show-more-arrow'>▼</div>
	);
};

export default Arrow;
