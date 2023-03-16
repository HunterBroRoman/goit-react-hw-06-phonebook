import { useSelector } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';

import { ContactItem } from '../ContactItem/ContactItem';

import { List, Item } from 'components/ContactList/ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem id={id} name={name} number={number} />
        </Item>
      ))}
    </List>
  );
}
export default ContactList;