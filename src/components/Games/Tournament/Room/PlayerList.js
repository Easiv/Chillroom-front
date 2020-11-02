import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';

export default function PlayerList(props) {
  return (
    <div className="main-list">
      <List component="nav">
        {props.players.map(p => (
          <ListItem divider="true">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText key={p.id} primary={p.name} />
          </ListItem>
        ))}
      </List> 
    </div>
  )
}