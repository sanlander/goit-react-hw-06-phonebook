import { useDispatch } from 'react-redux';
import { textSearch } from 'redux/filtersReducer';
import { Input, Label } from './Filter.modules';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(textSearch(e.target.value));
  };
  return (
    <div>
      <Label>
        Find contacts by name
        <br />
        <Input type="text" onChange={onChangeFilter} />
      </Label>
    </div>
  );
};
