import React from "react";
import { MdDelete } from "react-icons/md";
import './App.css'; // Import the CSS file

function ContactList({ contact, removeContact, className }) {
  const contactList = contact.map((val) => {
    return (
      <div key={val.id} className="contact-item">
        <div><h3>Name:</h3>{val.data.name}</div>
        <div><h3>Email:</h3>{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}><MdDelete /></span>
      </div>
    );
  });

  return (
    <div className={className}>
      <div className="contact-list-title">Contact List</div>
      <div className="contact-items">{contactList}</div>
    </div>
  );
}

export default ContactList;
