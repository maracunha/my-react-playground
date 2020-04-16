import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SubdirectoryArrowRightTwoToneIcon from '@material-ui/icons/SubdirectoryArrowRightTwoTone';

import { useHistory } from 'react-router-dom';
import school from './icons/school-24px.svg';
import github from './icons/github.svg';

import Route from '../../utils/Router';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '05668D',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  toolbar2: {
    textDecoration: 'none',
    height: '40px',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'lightslategrey',
  },
  content: {
    flexGrow: 1,
    width: '88vw',
    height: '89vh',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    marginTop: '65px',
    overflow: 'hidden',
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    height: '30px',
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'right',
    paddingRight: '40px',
  },
  bottom: {
    textDecoration: 'none',
    color: 'dark-grey',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    letterSpacing: '0.00938em',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const sideList = ['flappy', 'calc', 'first-testes', 'hitest'];

  const history = useHistory();

  function handleClick(text) {
    history.push(`/${text}`);
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              My React Tests
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar}>
            <a href="/" className={classes.toolbar2}>
              <img src={school} className={classes.toolbar2} alt="school" />
              <span>  RE235</span>
            </a>
          </div>
          <Divider />
          <List>
            {sideList.map((text, index) => (
              <ListItem button key={text} onClick={() => handleClick(text)}>
                <ListItemIcon><SubdirectoryArrowRightTwoToneIcon /></ListItemIcon>
                <ListItemText primary={text.toUpperCase()} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <Route />
        </main>
      </div>
      <footer className={classes.footer}>
        <a href="https://github.com/maracunha/my-react-playground" className={classes.bottom} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
          <span> this project on github </span>
        </a>
      </footer>
    </>
  );
}

export default Dashboard;
