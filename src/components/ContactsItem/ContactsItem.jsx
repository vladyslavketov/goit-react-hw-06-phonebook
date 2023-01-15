import { useDispatch } from "react-redux";
import { deleteContacts } from '../../redux/contactsSlice';

import PropTypes from 'prop-types';
import css from '../ContactsItem/ContactsItem.module.css'

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contactsItem}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(deleteContacts(id))}>Delete</button>
    </li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsItem;