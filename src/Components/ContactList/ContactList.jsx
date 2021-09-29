import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import s from './ContactList.module.css';

function ContactList({ contacts, deleteContact }) {
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
