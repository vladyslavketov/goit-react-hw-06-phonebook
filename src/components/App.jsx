import { useEffect } from "react";
import { useSelector } from "react-redux";

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
      <div
      style={{
        padding: "12px 16px",
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
};