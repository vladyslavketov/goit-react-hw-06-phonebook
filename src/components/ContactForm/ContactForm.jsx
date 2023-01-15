import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from '../../redux/contactsSlice';
import css from '../ContactForm/ContactForm.module.css'

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  function handleSubmit(e) {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;

    if (contacts.find(contact => contact.name === name.value)) {
      return alert(`${name} is already in contacts.`);
    };

    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    dispatch(addContacts(newContact));
    e.currentTarget.reset();
  };

  return (
      <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
    )
};