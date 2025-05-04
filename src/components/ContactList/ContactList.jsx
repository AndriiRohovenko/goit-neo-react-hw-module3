import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList({ data, onDelete }) {
  const handleDeleteAction = id => {
    onDelete(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <ul className={styles.contactListWrapper}>
        {data.map(contact => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => handleDeleteAction(contact.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
