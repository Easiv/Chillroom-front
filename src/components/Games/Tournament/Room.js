import React from 'react'
import '../../../css/Tournament/Lobby.css'

export default function Room() {
	let data = {
		room: {
      id: '1234',
			name: '',
			host: 'idName',
      playerList: [
				{
					id: 1,
					name: 'Twoja stara'
				},
				{
					id: 2,
					name: 'Twój stary'
				},
				{
					id: 3,
					name: 'Cziter'
				},
			],
			generatedQuestions: [
				'Czy stara gracza _ jest tak stara, że _',
				'Mark cukierber powiedzial ze kto słucha rege ten _',
				'A jak Pan Jezus powiedział?',
			],
			settings: {
				voteTime: 60,
			}
    }
	}
	return (
		<div className="main-view">
      
			<div className="tournament-logo">
        <div>Tournament</div>
        <hr/>
        <div>Lista Graczy</div>
      </div>
      
      <div className="room-code">
        {data.room.id}
      </div>
      
      <div className="player-list">
        <ul>
					{data.room.playerList.map(e => (
						<li key={e.id}>{e.name}</li>
					))}
				</ul>
			</div>
      
		</div>
	)
}
