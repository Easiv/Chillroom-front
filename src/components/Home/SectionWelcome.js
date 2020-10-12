import React from 'react'
import '../../css/SectionWelcome.css'
import SingleGame from './SingleGame'

export default function SectionWelcome() {
	var _fromServer = [
		{
			name: 'Tournament',
			description: 'Tu sie walczy',
			link: "/tournament/gra1"
		},
		{
			name: 'Druga giera',
			description: '2',
			link: "/tournament/gra2"
		},
		{
			name: 'Trzecia giera',
			description: '3',
			link: "/tournament/gra3"
		},
		{
			name: 'Czwarta giera',
			description: 'Tu sie gra',
			link: "/tournament/gra4"
		},
	]
	return (
		<div className="section-welcome">
			<div className="games-main">
				{_fromServer.map(x => (
					<SingleGame name={x.name} description={x.description} key={x.name} link={x.link} />
				))}
			</div>
		</div>
	)
}
