import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/itemsSlice';

import { Button } from 'components/ContactItem/ContactItem.styled';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact({ id: contactId }));
  };

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <Button title="delete" type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};