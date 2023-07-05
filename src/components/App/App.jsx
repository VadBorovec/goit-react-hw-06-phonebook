import { Container, Section, Text } from 'components/ui';
import {
  ContactFilter,
  ContactForm,
  ContactList,
  ContactStats,
} from 'components';

import { useSelector } from 'react-redux';
import { selectContact } from 'redux/selectors';

// !=====functional component

export const App = () => {
  const contacts = useSelector(selectContact);

  const totalContactCount = contacts.length;

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
        <ContactFilter />
        <ContactStats totalContactCount={totalContactCount} />

        {contacts.length === 0 ? (
          <Text textAlign="center">There are no any numbers...</Text>
        ) : (
          <ContactList />
        )}
      </Section>
    </Container>
  );
};
