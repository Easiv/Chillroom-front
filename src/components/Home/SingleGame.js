import React from 'react'
import '../../css/SingleGame.css'
import tournamentLogo from '../../assets/tournament-icon.png'
export default function SingleGame(props) {
	const size = 120;
	return (
		<a className="singleGame" href={props.link}>
			<div className="gameName">
				{props.name}
			</div>
			<div className="gameDescription">
				{props.description}
			</div>
			<div>
				<img src={props.image} width={size} height={size}/>
			</div>
		</a>
	)
}
