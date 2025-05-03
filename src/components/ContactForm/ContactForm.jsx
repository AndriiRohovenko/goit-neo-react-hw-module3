import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import * as Yup from 'yup';

function ContactForm({ onFormSubmit }) {
  const defaultObj = { name: '', number: '' };
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Min 3 symbols')
      .max(50, 'Max 50 symbols')
      .required('The field is required'),

    number: Yup.number()
      .typeError('Please enter a valid number')
      .min(3, 'Min 3 numbers')
      .max(50, 'Max 50 numbers')
      .required('The field is required'),
  });

  const addContact = (contact, { resetForm }) => {
    const id = nanoid();
    const contactObj = { id, ...contact };

    onFormSubmit(prevContacts => [...prevContacts, contactObj]);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={defaultObj}
        onSubmit={addContact}
        validationSchema={validationSchema}
      >
        <Form className={styles.formWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
          <label htmlFor={phoneFieldId}>Number</label>
          <Field name="number" />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
