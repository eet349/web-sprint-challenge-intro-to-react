import React from 'react';
import styled from 'styled-components';

const StyledCharacterInfo = styled.div`
	& {
		margin: -5px auto 15px auto;
		width: 75%;
		text-align: left;
		display: flex;
		justify-content: space-between;
	}
	.film {
		padding-left: 15px;
	}
`;

const CharacterInfo = ({ character, homeworldData, speciesData }) => {
	const renderFilms = () => {
		const mappedFilms = character.films.map((film) => {
			return (
				<p className='film' key={film}>
					{film}
				</p>
			);
		});
		return mappedFilms;
	};

	return (
		<StyledCharacterInfo>
			<div className='left-column'>
				<p>Height: {character.height}</p>
				<p>Mass: {character.mass}</p>
				<p>Hair color: {character.hair_color}</p>
				<p>Eye color: {character.eye_color}</p>
				<p>Birth year: {character.birth_year}</p>
				<p>Gender: {character.gender}</p>
				<p>Home world: {homeworldData}</p>
				{speciesData.length !== 0 ? <p>Species: {speciesData}</p> : null}
			</div>
			<div className='right-column'>
				<h3>Films:</h3>
				{renderFilms()}
			</div>
		</StyledCharacterInfo>
	);
};

export default CharacterInfo;
