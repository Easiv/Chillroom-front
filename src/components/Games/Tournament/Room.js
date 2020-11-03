import React from 'react';
import PlayerList from './Room/PlayerList';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
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
    },
    player: {
      id: 1,
      name: 'Szczepan',
      points: 0,
      isHost: true,
      isReady: false,
    }
	}
	return (
		<div className="room-view">

      <div className="room-first-panel">
        <div className="tournament-logo">
          Tournament
        </div> 
        <div className="room-center-top">
          <div className="room-code">
            {data.room.code}
          </div>
          <div className="room-name">
            {data.room.name}
          </div>
        </div>
        <div className="nickname">
          {data.player.name}
        </div>
      </div>

      <div className="room-second-panel">
        <div className="player-list">
          <h2>Lista Graczy</h2>
          <PlayerList players={data.room.playerList}/>
        </div>
        <div className="chat-wrapper">
          Tu kiedyś powstanie chat
        </div>
        <div className="room-settings">
          <div className="settings-text">
            Room settings
          </div>
          Private Room <Switch />
        </div>
      </div>
      <Button variant="contained" color="secondary">Ready</Button>
		</div>
	)
}
