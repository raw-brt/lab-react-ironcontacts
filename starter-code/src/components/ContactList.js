import React, { Component } from 'react';
import TableHead from './TableHead'
import ContactRow from './ContactRow'

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts.slice(0, 5) || [],
      allContacts: this.props.contacts || []
      }
    }

    onClickRandomContact = () => {
      const remainingContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(stateContact => contact === stateContact));
      // Return a random contact from remainingContacts
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      // Modify the state by updating the contacts property with the previous contacts + a random new one
      if (randomContact) {
        this.setState({contacts: [...this.state.contacts, randomContact]})
      }
    }

    onClickSortNameContact = () => {
      this.setState({contacts: [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name)) })
    }

    onClickSortPopularityContact = () => {
      this.setState({ contacts: [...this.state.contacts].sort((a, b) => b.popularity - a.popularity) })
    }

    onClickDeleteContact = (contact) => {
      this.setState({
        contacts: this.state.contacts.filter(cont => cont !== contact)
      })
    }

    render () {
      const TableBody = () => {
        return (
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return <ContactRow key={index} {...contact} deleteContact={() => this.onClickDeleteContact(contact)}/>
            })}
          </tbody>
        )
      }

      const Buttons = (
        <div className="btn-group mb-4" role="group" aria-label="example">
          <button className="btn btn-primary add-button" onClick={this.onClickRandomContact}>Add random contact</button>
          <button className="btn btn-primary name-button" onClick={this.onClickSortNameContact}>Sort by name</button>
          <button className="btn btn-primary popularity-button" onClick={this.onClickSortPopularityContact}>Sort by popularity</button>
        </div>
      )

      return (
        <div>
          {Buttons}
          <table className="table">
            <TableHead />
            <TableBody />
          </table>
        </div>
      )
    }
  }

  export default ContactList;