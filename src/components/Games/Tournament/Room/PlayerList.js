import React from 'react';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import StarIcon from '@material-ui/icons/Star';

export default function PlayerList(props) {

  const PlayerCard = styled(ListItem)({
    background: 'white',
    padding: '10px',
    width: '300px'
  })
  return (
    <div className="main-list">
      <List component="nav">
        {props.players.map(p => (
          <PlayerCard divider="true">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText key={p.id} primary={p.name} />
            {p.host === true && <StarIcon style={{color: 'yellow', fontSize: '30px'}}/>}
          </PlayerCard>
        ))}
      </List> 
    </div>
  )
}