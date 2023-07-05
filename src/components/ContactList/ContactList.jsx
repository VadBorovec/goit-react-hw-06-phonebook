// import PropTypes from 'prop-types';
import { ContactItem } from 'components';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <ContactItem id={id} name={name} number={number} />
      </Item>
    ))}
  </List>
);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };