import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/UI/Navigation/Navigation';
import HeaderTitle from './components/UI/HeaderTitle/HeaderTitle';
import DiscoveryList from './containers/DiscoveryList/DiscoveryList';
import LibraryList from './containers/LibraryList/LibraryList';

class App extends Component {
  state = {
    search: '',
    modal: false
  }

  modalOpen = () => {
    this.setState({
      modal: true
    })
  }

  modalClose = () => {
    this.setState({
      modal: false
    })
  }

  onSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navigation value={this.state.search} modal={this.state.modal} open={this.modalOpen} close={this.modalClose} change={this.onSearch}/>
          <Route path="/" exact render={() => <DiscoveryList modal={this.state.modal} open={this.modalOpen} close={this.modalClose} value={this.state.search}/>} />
          <Switch>
            <Route path="/library" component={LibraryList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
