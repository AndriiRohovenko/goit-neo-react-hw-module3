import { Form, Formik, Field } from 'formik';
import { useId } from 'react';
import './ContactForm.module.css';

function ContactForm() {
  console.log('hello from ContactForm');
  const defaultObj = { name: '', phone: '' };
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const addContact = contact => {
    console.log(contact);
  };

  return (
    <>
      <Formik initialValues={defaultObj} onSubmit={addContact}>
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" />
          <label htmlFor={phoneFieldId}>Number</label>
          <Field name="phone" />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
