import { Button } from 'components/ui';
import { Name, Number } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => (
    const dispatch = useDispatch();
    const handleDelete = (id) => dispatch(remove(id));;

return (
      <>
    <Name>{name}</Name>
    <Number>{number}</Number>
    {/* <Button onClick={() => console.log(id)}>Delete</Button> */}
    <Button onClick={handleDelete}>Delete</Button>
  </>
)
);
