// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterInfo from './CharacterInfo';

const StyledCharacter = styled.div`
	& {
		background-color: #333;
		color: #eee;
		margin: 3px;
		width: 30%;
		min-width: 450px;
		display: flex;
		flex-wrap: wrap;
		border-radius: 30px;
		justify-content: space-between;
		border-bottom: 3px solid #34b1eb;
		align-content: space-between;
		&:hover {
			cursor: pointer;
		}
	}
	h2 {
		padding-left: 30px;
	}
	.show-more-arrow {
		margin: 25px 30px 0 100px;
	}
	.show-less-arrow {
		margin: 25px 30px 0 30%;
	}
`;

const Character = ({ character }) => {
	const [showCharacterInfo, setShowCharacterInfo] = useState(false);
	const handleClick = () => {
		setShowCharacterInfo(!showCharacterInfo);
	};
	return (
		<StyledCharacter onClick={() => handleClick()}>
			<h2>{character.name}</h2>
			{showCharacterInfo ? (
				<div className='show-less-arrow'>▲</div>
			) : (
				<div className='show-more-arrow'>▼</div>
			)}

			{showCharacterInfo ? <CharacterInfo character={character} /> : null}
		</StyledCharacter>
	);
};

export default Character;
