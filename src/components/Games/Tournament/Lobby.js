import React from 'react'
import Form from './Lobby/Form'
import '../../../css/Tournament/Lobby.css'

export default function Lobby() {

  return (
    <div className="main-view">
      <Form 
        roomType="🧔 New Game"
        roomName="Room Name"
        submitText="Create Room"
        />
      <Form 
        roomType="🧔🧔 Join Game"
        roomName="Room Code / Room Name"
        submitText="Join Room"
      />
    </div>
  )
}
