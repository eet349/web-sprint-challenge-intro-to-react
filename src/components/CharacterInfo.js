import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCharacterInfo = styled.div`
	& {
		margin: -5px auto 15px auto;
		width: 50%;
		text-align: left;
		/* margin-top: 50px; */
	}
`;

const CharacterInfo = ({ character }) => {
	// const [];

	useEffect(() => {}, []);
	return (
		<StyledCharacterInfo>
			{/* <p>Home world: {character.homeworld}</p> */}
			<p>Height: {character.height}</p>
			<p>Mass: {character.mass}</p>
			<p>Hair color: {character.hair_color}</p>
			<p>Eye color: {character.eye_color}</p>
			<p>Birth year: {character.birth_year}</p>
			<p>Gender: {character.gender}</p>
		</StyledCharacterInfo>
	);
};

export default CharacterInfo;
