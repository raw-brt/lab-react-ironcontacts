import React, { Component } from 'react';
import ContactRow from './ContactRow';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts.slice(0, 5) || [],
      allContacts: this.props.contacts || []
      }
    }

  onClickRandomContact = () => {
    const remainingContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(contact => contact === contact));
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    if (randomContact) {
      this.setState({contacts: [...this.state.contacts, randomContact]})
    }
  }

    render () {
      const Head = () => {
        return (
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col"></th>
            </tr>
          </thead>
        )
      }

      const Body = () => {
        return (
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return <ContactRow key={index} {...contact}/>
            })}
          </tbody>
        )
      }

      const Buttons = () => {
        return (
          <div className="btn-group mb-4" role="group" aria-label="example">
            <button type="button" className="btn btn-secondary" onClick={this.onClickRandomContact}>+</button>
          </div>
        )
      }

      return (
        <div>
          <Buttons />
            <table className="table">
              <Head />
              <Body />
            </table>
        </div>
      )
    }
  }

  export default ContactList;