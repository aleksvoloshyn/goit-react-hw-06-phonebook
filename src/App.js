import './App.css';
// import { useLocalStotage } from './hooks/useLocalStorage';
import { Container } from './Components/Container/Container';
import { ContactForm } from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import { ContactList } from './Components/ContactList/ContactList';
import ReactNotifications from 'react-notifications-component';
import s from './../src/Components/Container/Container.module.css';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { connect } from 'react-redux';
import contactsActions from './redux/contacts/contacts-actions';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
