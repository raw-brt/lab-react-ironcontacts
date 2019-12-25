import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
