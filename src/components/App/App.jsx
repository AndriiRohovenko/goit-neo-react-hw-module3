import styles from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import mockedData from '../../mockedData/contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(mockedData);
  const [searchValue, setSearchValue] = useState('');

  const foundContacts = () => {
    const allContacts = [...contacts];
    const mathchedData = allContacts.filter(item =>
      item.name.toLowerCase().includes(searchValue)
    );
    return mathchedData;
  };

  console.log(contacts);

  return (
    <>
      <div className={styles.appContent}>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={setContacts} />
        <SearchBox onSearchChange={setSearchValue} />
        <ContactList data={foundContacts()} />
      </div>
    </>
  );
}

export default App;
