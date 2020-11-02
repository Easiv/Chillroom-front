import React from 'react';
import PlayerList from './Room/PlayerList';
import '../../../css/Tournament/Lobby.css';

export default function Room() {
	let data = {
		room: {
      id: '1234',
      code: 'XD3217',
			name: 'Pokój świrków',
			host: 'Szczepan',
      playerList: [
				{
					id: 1,
          name: 'Szczepan',
          host: true
				},
				{
					id: 2,
          name: 'Seba',
          host: false
				},
				{
					id: 3,
          name: 'Cziter',
          host: false
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
		<div className="room-view">
      
			{/* <div className="tournament-logo">
        <h1>Tournament</h1>
        <hr/>
        <div>Lista Graczy</div>
      </div> */}

      <div className="player-list">
        <h2>Lista Graczy</h2>
        <PlayerList players={data.room.playerList}/>
			</div>
      
      <div className="room-code">
        <h1>{data.room.code}</h1>
      </div>
		</div>
	)
}
