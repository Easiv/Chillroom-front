import React from 'react'
import '../../css/SingleGame.css'

export default function SingleGame(props) {
	return (
		<a href={props.link}>
      <div className="test"> 
				<h4>{props.name}</h4> 
				{props.description}
			</div>
		</a>
	)
}
