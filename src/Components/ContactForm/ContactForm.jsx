import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    // const { name, value } = target;
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     throw new Error();
    // }
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={s.contactForm}>
        <label className={s.contactForm__label} htmlFor="">
          Name
          <input
            type="text"
            name="name"
            placeholder="John Snow"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.contactForm__label} htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            placeholder="+38(093)9995040"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
};
// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends React.Component {
//   state = { ...INITIAL_STATE };

//   handleChange = ({ target }) => {
//     const { name, value } = target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.clearInput();
//   };

//   clearInput = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.handleSubmit} className={s.contactForm}>
//           <label className={s.contactForm__label} htmlFor="">
//             Name
//             <input
//               type="text"
//               name="name"
//               placeholder="John Snow"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={s.contactForm__label} htmlFor="">
//             Number
//             <input
//               type="tel"
//               name="number"
//               placeholder="+38(093)9995040"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button type="submit">Add contact</Button>
//         </form>
//       </div>
//     );
//   }
// }

export { ContactForm };
