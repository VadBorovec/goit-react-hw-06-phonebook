import { Button } from 'components/ui';
import { Name, Number } from './ContactItem.styled';
// import { useDispatch } from 'react-redux';
// import { remove } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => (
  //   const dispatch = useDispatch();

  <>
    <Name>{name}</Name>
    <Number>{number}</Number>
    <Button onClick={() => console.log(id)}>Delete</Button>
    {/* <Button onClick={() => dispatch(remove(id))}>Delete</Button> */}
  </>
);
