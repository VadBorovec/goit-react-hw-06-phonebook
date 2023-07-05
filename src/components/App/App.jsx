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

// import { useLocalStorage } from 'hooks';
// const LOCAL_STORAGE_KEY = 'contacts';

// !=====functional component

export const App = () => {
  const contacts = useSelector(selectContact);
  const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   const existingName = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   const existingNumber = contacts.find(
  //     contact =>
  //       contact.number.replace(/[^\d]/g, '') === number.replace(/[^\d]/g, '')
  //   );

  //   if (existingName) {
  //     Notiflix.Notify.failure(
  //       `Contact with this name - ${contact.name} already exists!`
  //     );
  //     return;
  //   } else if (existingNumber) {
  //     Notiflix.Notify.failure(
  //       `Contact with this number - ${contact.number} already exists!`
  //     );
  //     return;
  //   } else {
  //     setContacts(prevContacts => [contact, ...prevContacts]);
  //     Notiflix.Notify.success(
  //       `${contact.name} has been added to  your phonebook`
  //     );
  //   }
  // };

  // const deleteContact = contactId => {
  // setContacts(prevContacts =>
  //   prevContacts.filter(contact => contact.id !== contactId)
  // );
  // };

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
        <ContactList
          contacts={visibleContacts()}
          // onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
};
