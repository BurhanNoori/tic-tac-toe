import React from "react";
import Button from "./Button";
import "./Arena.css";

const GRID = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];

export default function Arena(props) {
    const {clickedButton, handler, player} = props;
	return (
		<div>
			<div className='arena'>
				{GRID.map((row) =>
					row.map((val) => {
						if (val === clickedButton) {
							return (
								<Button
									key={val}
									id={val}
									handler={handler}
									player={player}
								/>
							);
						}
						return (
							<Button
								key={val}
								id={val}
								handler={handler}
								player={player}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}
