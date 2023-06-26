import React, { useState } from "react";
import Arena from "./components/Arena";
import Player from "./components/Player";

import "./App.css";

const PLAYERS = [
	{
		name: "Player 1",
		symbol: "X",
	},
	{
		name: "Player 2",
		symbol: "O",
	},
];

function App() {
	const [activePlayer, setPlayer] = useState(PLAYERS[0]);
	const [clickedButton, setClickedButton] = useState(null);

	const buttonClickHandler = (key) => {
		setClickedButton(key);
		setNextPlayer();
	};

	const setNextPlayer = () => {
		const nextPlayer = PLAYERS.find(
			(player) => player.symbol !== activePlayer.symbol,
		);
		setPlayer(nextPlayer);
	};

	return (
		<div className='App-header'>
			<Player player={activePlayer} />
			<Arena clickedButton = {clickedButton} handler={buttonClickHandler} player={activePlayer} />
		</div>
	);
}

export default App;
