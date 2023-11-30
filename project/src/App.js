import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
function App() {
  return (
    <div className="App">
      <Header/>
      <AddContacts/>
      <ContactList/>
    </div>
  );
}

export default App;
