import { filtered } from 'redux/filterSlice';
import { Filter, Label, Input } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <Filter>
      <Label>
        Filter
        <Input
          type="text"
          name="filter"
          placeholder="Filter list"
          onChange={e => dispatch(filtered(e.target.value.trim()))}
        />
      </Label>
    </Filter>
  );
};
