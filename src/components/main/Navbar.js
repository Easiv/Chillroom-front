import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import Link from '@material-ui/core/Link';
import '../../css/Navbar.css'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
	}, 
    icon: {
      marginRight: theme.spacing(2),
      color: 'white',
      fontSize: 40
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: '#ff5e19'
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
      color: 'white'
    },
    textPrimary: {
      color: 'white'
    },
    link: {
      margin: theme.spacing(1, 1.5),
      color: 'white',
      textDecoration: 'none'
    },
    button: {
      color: 'black',
      backgroundColor: 'white'
		},
  }));

export default function Navbar() {
	
	const classes = useStyles();
	return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<a href="/"><HomeIcon className={classes.icon}></HomeIcon></a>
        
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					<a href="/" className="linkacz">Chill Room</a>
				</Typography>
				<nav>
					<Link variant="button" href="#" className={classes.link}>
						Instructions
					</Link>
					<Link variant="button" href="#" className={classes.link}>
						Rulebook
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	)
}
