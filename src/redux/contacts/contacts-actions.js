// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: uuidv4(),
    name: contact.name,
    number: contact.number,
  },
}));

const deleteContact = createAction('contacts/delete');

const filter = createAction('contacts/filter');

const actions = {
  addContact,
  filter,
  deleteContact,
};
export default actions;
