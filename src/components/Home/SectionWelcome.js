import React from 'react'
import '../../css/SectionWelcome.css'
import SingleGame from './SingleGame'

export default function SectionWelcome() {
	var _fromServer = [
		{
			name: 'Tournament',
			description: 'Tu sie walczy',
			link: "/tournament"
		},
		{
			name: 'Druga giera',
			description: '2',
			link: "/tournament"
		},
		{
			name: 'Trzecia giera',
			description: '3',
			link: "/tournament"
		},
		{
			name: 'Czwarta giera',
			description: 'Tu sie gra',
			link: "/tournament"
		},
	]
	return (
		<div className="section-welcome">
      <div className="games-main">
				{_fromServer.map(x=>(
					<SingleGame name={x.name} description={x.description} key={x.name} link={x.link} />
				))}
      </div>
		</div>
	)
}
