import { useDispatch} from 'react-redux';
import { filter } from '../../redux/filterSlice';

export default function Filter() {

  const dispatch = useDispatch();
  const handleFilter = evt => {
    dispatch(filter(evt.currentTarget.value));
  };
  
  return (
    <label>
      Find contact by name
      <input name='search' placeholder='Search...'onChange={handleFilter}></input>
    </label>
  );
}