import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Character from './components/Character';

export const BASE_URL = 'https://swapi.dev/api/';

// Styled component definition
const StyledApp = styled.div`
	& {
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	.Header {
		font-size: 3.5rem;
		color: #443e3e;
		text-shadow: 1px 1px 5px #34b1eb;
	}
	.character-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [characterDataArray, setCharacterDataArray] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}people/`)
			.then((res) => {
				setCharacterDataArray(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const renderCharacters = () => {
		const mappedCharacterDataArray = characterDataArray.map((character) => {
			return <Character key={character.name} character={character} />;
		});
		return mappedCharacterDataArray;
	};

	return (
		<StyledApp>
			<h1 className='Header'>Characters</h1>
			<div className='character-container'>{renderCharacters()}</div>
		</StyledApp>
	);
};

export default App;
