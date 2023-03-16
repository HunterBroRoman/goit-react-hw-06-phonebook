import { useSelector, useDispatch } from 'react-redux';

import { filterValue } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(filterValue(e.currentTarget.value));
  };

  return (
    <>
      <Label htmlFor="filter">
        <Input
          type="text"
          name="filter"
          placeholder="Filter"
          value={filter}
          onChange={handleFilterChange}
          autoComplete="off"
        />
      </Label>
    </>
  );
};

export default Filter;