import React, { Component } from 'react';
import ContactRow from './ContactRow';
import Button from 'react-bootstrap/Button';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts.slice(0, 5) || [],
      allContacts: this.props.contacts || []
      }
    }

  onClickRandomContact = () => {
    // Store all the elements not selected in the 5 element previous array in remainingContacts
    const remainingContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(contact => contact === contact));
    // Return a random contact from remainingContacts
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    // Modify the state by updating the contacts property with the previous contacts + a random new one
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
            <Button variant="primary" className="add-button" onClick={this.onClickRandomContact()}>Add random contact</Button>
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