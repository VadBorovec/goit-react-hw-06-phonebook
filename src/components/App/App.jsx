import { useState } from 'react';
// import shortid from 'shortid';
// import Notiflix from 'notiflix';

import { Container, Section } from 'components/ui';
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
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const totalContactCount = contacts.length;

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm
        // onSubmit={addContact}
        />
        <ContactFilter value={filter} onChange={changeFilter} />
        <ContactStats totalContactCount={totalContactCount} />
        <ContactList contacts={visibleContacts()} />
      </Section>
    </Container>
  );
};
