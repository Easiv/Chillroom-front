import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import useGlobalState from './Store/useGlobalState'
import Context from './Store/context'
import Home from './pages/Home.js';
import Tournament from './pages/Tournament';

import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'

const Index = () => {
  const store = useGlobalState();
  return (
    <>
      <Context.Provider value={store}>
        <Navbar />
        <Router>
          <div>
            {/* test */}
            <Route exact path='/' component={Home} />
            <Route exact path='/tournament' component={Tournament} />
          </div>
        </Router>
        <Footer />
      </Context.Provider>
    </>
  )
}
ReactDOM.render(<Index />, document.getElementById('root'));