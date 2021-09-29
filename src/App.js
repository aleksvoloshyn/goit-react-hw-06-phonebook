import './App.css';
// import React from 'react';
import { useState } from 'react';
// import { useLocalStotage } from './hooks/useLocalStorage';
import { Container } from './Components/Container/Container';
import { ContactForm } from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import { ContactList } from './Components/ContactList/ContactList';
// import { v4 as uuidv4 } from 'uuid';
import ReactNotifications from 'react-notifications-component';
import {
  onSuccsessNotification,
  onErrorNotification,
  onDeleteNotification,
} from './Components/Notifications/Notifications';
import s from './../src/Components/Container/Container.module.css';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { connect } from 'react-redux';
import contactsActions from './redux/contacts/contacts-actions';

// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = ({ contacts, filter, addItem, onDeleteContact }) => {
  const getFilteredResult = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  return (
    <div className="App">
      <ReactNotifications />
      <Container>
        <h1 className={s.container__label}>Phonebook</h1>
        <ContactForm onSubmit={addItem} />

        <h2 className={s.container__contacts}>Contacts</h2>

        <Filter />
        <ContactList
          contacts={getFilteredResult(contacts, filter)}
          deleteContact={onDeleteContact}
        />
      </Container>
    </div>
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: items,
  filter: filter,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(contactsActions.addContact(item)),
  onDeleteContact: item => dispatch(contactsActions.deleteContact(item)),

  // switchFilter: e => dispatch(contactsActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
