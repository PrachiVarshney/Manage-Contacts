import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    setContact([...contact, { id: uuidv4(), data }]);
  };

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="container">
        <AddContacts className="add-contacts" addContact={addContact} />
        <ContactList className="contact-list" contact={contact} removeContact={removeContact} />
      </div>
    </div>
  );
}

export default App;
