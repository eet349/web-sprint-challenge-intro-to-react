// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CharacterInfo from './CharacterInfo';
import Arrow from './Arrow';

const StyledCharacter = styled.div`
	& {
		opacity: 0.92;
		background-color: ${(props) => props.theme.black};
		color: ${(props) => props.theme.blue};
		margin: 3px;
		width: 45%;
		min-width: 500px;
		display: flex;
		flex-wrap: wrap;
		border-radius: 30px;
		justify-content: space-between;
		border-bottom: 3px solid ${(props) => props.theme.blue};
		align-content: space-between;
		&:hover {
			cursor: pointer;
		}
		/* transition: all 0.5s ease-in-out; */
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
	const [homeworldData, setHomeworldData] = useState('');
	const [speciesData, setSpeciesData] = useState([]);
	const handleClick = () => {
		setShowCharacterInfo(!showCharacterInfo);
	};

	useEffect(() => {
		axios
			.get(character.homeworld)
			.then((res) => {
				console.log('res.data: ', res.data);
				setHomeworldData(res.data.name);
			})
			.catch((err) => {
				console.log(err);
			});
		if (character.species.length > 0) {
			axios
				.get(character.species)
				.then((res) => {
					setSpeciesData(res.data.name);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	return (
		<StyledCharacter onClick={() => handleClick()}>
			<h2>{character.name}</h2>
			<Arrow showCharacterInfo={showCharacterInfo} />
			{showCharacterInfo ? (
				<CharacterInfo
					character={character}
					homeworldData={homeworldData}
					speciesData={speciesData}
				/>
			) : null}
		</StyledCharacter>
	);
};

export default Character;
