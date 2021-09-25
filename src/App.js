import './App.css';
// import React from 'react';
import { useState } from 'react';
import { useLocalStotage } from './hooks/useLocalStorage';
import { Container } from './Components/Container/Container';
import { ContactForm } from './Components/ContactForm/ContactForm';
import { Filter } from './Components/Filter/Filter';
import { ContactList } from './Components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import ReactNotifications from 'react-notifications-component';
import {
  onSuccsessNotification,
  onErrorNotification,
  onDeleteNotification,
} from './Components/Notifications/Notifications';
import s from './../src/Components/Container/Container.module.css';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';
const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useLocalStotage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  // Удалить текущий контакт +
  const onDeleteContact = id => {
    setContacts(prev => prev.filter(cont => cont.id !== id));

    onDeleteNotification();
  };

  // Проверка на повтор +
  const duplicationCheck = newName => {
    return contacts.find(contact => {
      return contact.name === newName;
    });
  };

  //Добавить новый контакт +
  const addContact = contact => {
    console.log(contact);
    if (!duplicationCheck(contact.name)) {
      setContacts([
        {
          id: uuidv4(),
          name: contact.name,
          number: contact.number,
        },
        ...contacts,
      ]);
      onSuccsessNotification();
      return;
    } else {
      onErrorNotification();
      console.log(contacts);
      return;
    }
  };

  // Устанваливить значение filter  в state +
  const switchFilter = event => {
    setFilter(event.currentTarget.value.trim());
  };

  console.log(filter);
  // Фильтр +
  const getFilteredResult = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <div className="App">
      <ReactNotifications />
      <Container>
        <h1 className={s.container__label}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={s.container__contacts}>Contacts</h2>
        <Filter name={filter} onChange={switchFilter} />
        <ContactList
          contacts={getFilteredResult()}
          deleteContact={onDeleteContact}
        />
      </Container>
    </div>
  );
};
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ],
//       filter: '',
//     };
//   }

//   // Удалить текущий контакт
//   onDeleteContact = id => {
//     this.setState({
//       contacts: this.state.contacts.filter(cont => cont.id !== id),
//     });
//     onDeleteNotification();
//   };

//   // Проверка на повтор
//   duplicationCheck = newName => {
//     return this.state.contacts.find(contact => {
//       return contact.name === newName;
//     });
//   };

//   //Добавить новый контакт
//   addContact = contact => {
//     console.log(contact);
//     if (!this.duplicationCheck(contact.name)) {
//       this.setState({
//         contacts: [
//           {
//             id: uuidv4(),
//             name: contact.name,
//             number: contact.number,
//           },
//           ...this.state.contacts,
//         ],
//       });
//       onSuccsessNotification();
//       return;
//     } else {
//       onErrorNotification();
//       return;
//     }
//   };

//   // Устанваливить значение filter  в state
//   setFilter = event => {
//     this.setState({ filter: event.currentTarget.value.trim() });
//   };

//   // Фильтр
//   getFilteredResult = () => {
//     const { filter, contacts } = this.state;

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('contacts have been updated');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <ReactNotifications />
//         <Container>
//           <h1 className={s.container__label}>Phonebook</h1>
//           <ContactForm onSubmit={this.addContact} />

//           <h2 className={s.container__contacts}>Contacts</h2>
//           <Filter name={this.state.filter} onChange={this.setFilter} />
//           <ContactList
//             contacts={this.getFilteredResult()}
//             deleteContact={this.onDeleteContact}
//           />
//         </Container>
//       </div>
//     );
//   }
// }

export default App;
