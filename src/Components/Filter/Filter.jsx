import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ name, onChange }) {
  return (
    <>
      <label htmlFor="">
        Find contacts by name
        <input
          className={s.filter__input}
          type="text"
          name={name}
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

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export { Filter };
