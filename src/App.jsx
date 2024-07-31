import { useEffect, useState } from 'react';

import './App.css'

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import initialContacts from './components/data/data.json'


const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem('contactsKey')
    return savedContact ? JSON.parse(savedContact) : initialContacts;
  })

  const [inputValue, setInputValue] = useState("")


  useEffect(() => {
    window.localStorage.setItem('contactsKey', JSON.stringify(contacts))
  }, [contacts])


  const addNewContact = (newContact) => {
    setContacts((prevContacts) => {
      // console.log(newContact);
      return [newContact, ...prevContacts]
    })
  }

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id)
    })
  }

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );


  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm addNewContact={addNewContact} />

      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
      >
      </SearchBox>

      <ContactList
        contacts={filterContacts}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App
