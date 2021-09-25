import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import s from './ContactList.module.css';

function ContactList({ contacts, deleteContact }) {
  //   contacts = [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];

  return (
    <div>
      <ul>
        {contacts.map(cont => {
          return (
            <li className={s.contactList__item} key={cont.id}>
              <span className={s.contactList__name}>{cont.name}</span>
              <span className={s.contactList__number}>{cont.number}</span>
              <Button variant="danger" onClick={() => deleteContact(cont.id)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export { ContactList };
