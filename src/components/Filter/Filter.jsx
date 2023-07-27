import { useDispatch} from 'react-redux';
import { filter } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css'

export default function Filter() {

  const dispatch = useDispatch();
  const handleFilter = evt => {
    dispatch(filter(evt.currentTarget.value));
  };
  
  return (
    <>
      <label className={css.labelSearch}> Find contact by name</label>
      <input className={css.search} name='search' placeholder='Search...' onChange={handleFilter}></input>
    </>
  )
}