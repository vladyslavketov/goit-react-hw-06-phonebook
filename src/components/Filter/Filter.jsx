import { useDispatch } from 'react-redux';
import { filteredContacts } from '../../redux/filterSlice';
import css from '../Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  function onChange (e) {
    dispatch(filteredContacts(e.currentTarget.value));
  }; 

  return (
    <label className={css.filter}>
      <span>Find contacts by name</span>
      <input type="text" onChange={onChange} />
    </label>
  );
};

export default Filter;