import { Form, Formik, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.module.css';

function ContactForm({ onFormSubmit }) {
  const defaultObj = { name: '', number: '' };
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const addContact = (contact, { resetForm }) => {
    const id = nanoid();
    const contactObj = { id, ...contact };

    onFormSubmit(prevContacts => [...prevContacts, contactObj]);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={defaultObj} onSubmit={addContact}>
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" />
          <label htmlFor={phoneFieldId}>Number</label>
          <Field name="number" />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
