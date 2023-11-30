import React from "react";
import { MdDelete } from "react-icons/md";
import './App.css'; // Import the CSS file

function ContactList({ contact, removeContact, className }) {
  const contactList = contact.map((val) => {
    return (
      <div key={val.id} className="contact-item">
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
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
