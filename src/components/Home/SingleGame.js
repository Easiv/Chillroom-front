import React from 'react'
import '../../css/SingleGame.css'

export default function SingleGame(props) {
	return (
		<a className="singleGame" href={props.link}>
			<h4>{props.name}</h4>
			{props.description}
		</a>
	)
}
