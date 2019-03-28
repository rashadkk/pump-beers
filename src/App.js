import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import Favorites from './components/favorite/Favorite';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Route path='/' component={Home} exact />
        <Route path='/favorites' component={Favorites} />
      </Router>
    );
  }
}

export default App;
