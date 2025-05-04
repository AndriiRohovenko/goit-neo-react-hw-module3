import styles from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import mockedData from '../../mockedData/contacts.json';
import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : mockedData;
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error saving contacts to localStorage:', error);
    }
  }, [contacts]);

  const foundContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(searchValue)
    );
  };

  return (
    <>
      <div className={styles.appContent}>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={setContacts} />
        <SearchBox onSearchChange={setSearchValue} />
        <ContactList data={foundContacts()} onDelete={setContacts} />
      </div>
    </>
  );
}

export default App;
