import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}