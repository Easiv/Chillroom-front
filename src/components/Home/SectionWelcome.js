import React from 'react'
import '../../css/SectionWelcome.css'
import SingleGame from './SingleGame'
import tournamentLogo from '../../assets/tournament-icon.png'
import soonLogo from '../../assets/question.png'
export default function SectionWelcome() {
	const _fromServer = [
		{
			name: 'Tournament',
      description: 'Tu sie walczy',
      image: tournamentLogo,
			link: "/tournament"
		},
		{
			name: 'Coming Soon',
			description: 'Here will be our next game',
			image: soonLogo,
			link: "/gra2"
		},
	]
	return (
		<div className="section-welcome">
			<div className="games-main">
				{_fromServer.map(x => (
					<SingleGame name={x.name} description={x.description} image={x.image} key={x.name} link={x.link} />
				))}
			</div>
		</div>
	)
}
