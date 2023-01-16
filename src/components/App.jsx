// import { useEffect } from "react";
import { useSelector } from "react-redux";

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const isShow = contacts.length > 0;

  return (
      <div
      style={{
        padding: "12px 16px",
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm/>
        {isShow && <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>}
      </div>
    );
};