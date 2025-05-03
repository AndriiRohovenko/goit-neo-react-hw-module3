import './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList({ data }) {
  console.log('hello from ContactList');
  console.log(data);
  return (
    <>
      <ul>
        {data.map(contact => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
