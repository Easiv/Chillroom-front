import React from 'react'

import '../../../css/Tournament/Lobby.css'
export default function Lobby() {

  return (
    <div className="main-view">
      <div className="lobby-join">
        <div className="join-game-test">New Game</div>
        <input type="text" className="input input-name" placeholder="write your name here" />
        <input type="text" className="input input-name" placeholder="write room name here" />
        <input type="submit" className="inputButton" value="Create Room" />
      </div>
      <div className="lobby-join">
        <div className="join-game-test">Join Game</div>
        <input type="text" className="input input-name" placeholder="write room code here" />
        <input type="text" className="input input-name" placeholder="write your name here" />
        <input type="submit" className="inputButton" value="Join Room" />
      </div>
    </div>
  )
}
