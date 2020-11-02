import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import useGlobalState from './Store/useGlobalState'
import Context from './Store/context'
import Home from './pages/Home.js';
import TournamentLobbyPage from './pages/TournamentLobbyPage';
import RoomPage from './pages/RoomPage';

import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import NotFound from './pages/NotFound';

const Index = () => {
  const store = useGlobalState();
  return (
    <>
      <Context.Provider value={store}>
        <Navbar />
        <Router>
          <Switch>
            {/* test */}
            <Route exact path='/' component={Home} />
            <Route exact path='/tournament' component={TournamentLobbyPage} />
            <Route exact path='/tournament/room' component={RoomPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </Context.Provider>
    </>
  )
}
ReactDOM.render(<Index />, document.getElementById('root'));