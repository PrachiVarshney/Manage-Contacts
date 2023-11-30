import React, { useState } from "react";
import './App.css'; // Import the CSS file

function AddContacts({ addContact, className }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Enter the details");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <div className={className}>
      <div className="add-contacts-title">Add Contacts</div>
      <form>
        <label>Name:</label><br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        /><br />
        <label>Email:</label><br />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
}

export default AddContacts;
