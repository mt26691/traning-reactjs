/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import Contact from './Contact';

export default class ContactList extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-center">
          Contacts
        </h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contacts.map((contact, index) => {
                return (
                  <Contact contact={contact} key={index} />
                )
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}