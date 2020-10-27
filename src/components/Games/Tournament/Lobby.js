import React from 'react'
import { Face } from '@material-ui/icons';

import '../../../css/Tournament/Lobby.css'
export default function Lobby() {

  return (
    <div className="main-view">
      <div className="lobby-join">
        <div className="field-title">
          🧔 New Game
        </div>
        <input type="text" className="input input-name" placeholder="Nickname" />
        <input type="text" className="input input-name" placeholder="Room name" />
        <input type="submit" className="inputButton" value="Create Room" />
      </div>
      <div className="lobby-join">
        <div className="field-title">
          🧔🧔 Join Game 
        </div>
        <input type="text" className="input input-name" placeholder="Room code / Room name" />
        <input type="text" className="input input-name" placeholder="Nickname" />
        <input type="submit" className="inputButton" value="Join Room" />
      </div>
    </div>
  )
}
