import React, { Component } from 'react';
import ContactRow from './ContactRow';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts.slice(0, 5) || []
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

      return (
        <table className="table">
          <Head />
          <Body />
        </table>
      )
    }
  }

  export default ContactList;