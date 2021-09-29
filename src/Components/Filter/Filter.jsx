import s from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from './../../redux/contacts/contacts-actions';

function Filter({ onChange }) {
  return (
    <>
      <label htmlFor="">
        Find contacts by name
        <input
          className={s.filter__input}
          type="text"
          placeholder="find by name.."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
        />
      </label>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.filter(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
