import './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import mockedData from '../../mockedData/contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(mockedData);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox onSearchChange={setSearchValue} />
        <ContactList data={contacts} />
      </div>
    </>
  );
}

export default App;
