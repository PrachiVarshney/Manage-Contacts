import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import { useState } from 'react';
import uuid4 from 'uuid4';
function App() {
  const[contact,setContact]=useState([])
  const addContact=(data)=>{
     setContact([...contact,{id:uuid4(),data}])
  }
  const removeContact=()=>{

  }
  return (
    <div className="App">
      <Header/>
      <AddContacts addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
