// import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/ui';
import { StyledForm, Label, Input, Error } from './ContactForm.styled';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { add } from 'redux/contactsSlice';
import Notiflix from 'notiflix';
import { useState } from 'react';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

// !=====functional component

export const ContactForm = () => {
  const [contacts] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const contact = {
      id: shortid.generate(),
      name: values.name,
      number: values.number,
    };

    const existingName = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const existingNumber = contacts.find(
      contact =>
        contact.number.replace(/[^\d]/g, '') ===
        values.number.replace(/[^\d]/g, '')
    );

    if (existingName) {
      Notiflix.Notify.failure(
        `Contact with this name - ${contact.name} already exists!`
      );
      return;
    } else if (existingNumber) {
      Notiflix.Notify.failure(
        `Contact with this number - ${contact.number} already exists!`
      );
      return;
    } else {
      // setContacts(prevContacts => [contact, ...prevContacts]);
      dispatch(add(contact));
      Notiflix.Notify.success(
        `${contact.name} has been added to  your phonebook`
      );
    }
    // dispatch(add(contact));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              as={Input}
              placeholder="Enter name"
            />
            <ErrorMessage name="name" component={Error} />
          </Label>
          <Label htmlFor="number">
            Number
            <Field
              type="text"
              name="number"
              as={Input}
              placeholder="Enter number"
            />
            <ErrorMessage name="number" component={Error} />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
