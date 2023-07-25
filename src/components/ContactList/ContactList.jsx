import React from 'react';
import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/operations'
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch()

  const contacts = useSelector(selectContacts);
  const filtration = useSelector(selectFilter);

  const handleDelete = (id) => { dispatch(deleteContact(id)) };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtration.toLowerCase())
  );
  
  return (
      <ul>
        {filterContact.map(({name, phone, id}) => (
          <li key={id}>
            {name}: {phone}
            <button
              type="button"
              className={css.buttonList}
              id={id}
              onClick={() => {handleDelete(id)}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
  )
}