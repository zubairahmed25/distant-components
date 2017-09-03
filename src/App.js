import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInAs: '',
      isCreditCardHolder: false,
    };

    this.setLoggedInAs = this.setLoggedInAs.bind(this);
    this.setIsCreditCardHolder = this.setIsCreditCardHolder.bind(this);
  }

  setLoggedInAs(name) {
    this.setState({ loggedInAs: name });
  }

  setIsCreditCardHolder(value) {
    this.setState({ isCreditCardHolder: value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
