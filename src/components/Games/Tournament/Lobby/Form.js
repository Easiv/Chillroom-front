import React from 'react'

export default function Form(props) {
  return (
    <div className="lobby-join">
    <div className="field-title">
      {props.roomType}
    </div>
    <input type="text" className="input input-name" placeholder="Nickname" />
    <input type="text" className="input input-name" placeholder={props.roomName} />
    <input type="submit" className="inputButton" value={props.submitText} />
  </div>
  )
}