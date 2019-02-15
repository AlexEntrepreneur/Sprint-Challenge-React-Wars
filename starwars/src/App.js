import React, { Component } from 'react';
import CardsList from './components/CardsList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextUrl: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(currentState => ({
          starwarsChars: currentState.starwarsChars.concat(data.results),
          nextUrl: data.next
        }));
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="app-container">
        <header>
          <h1 className="Header">React Wars</h1>
        </header>
        <CardsList cardsData={this.state.starwarsChars} loadMoreCharacters={this.getCharacters} nextRequestURL={this.state.nextUrl}/>
      </div>
    );
  }
}

export default App;
