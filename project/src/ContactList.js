import React from "react";
import { MdDelete } from "react-icons/md";
function ContactList({props}){
    const{contact,removeContact}=props
   const contactList=contact.map((val)=>{
    return(
        <div>
        <div>{val.name}</div>
        <div>{val.email}</div>
        <span onClick={removeContact(val.id)} ><MdDelete />
        </span>
        </div>
    )
   })
   return(
    <>
    <div>Contact List</div>
    <div>{contactList}</div>
    </>
   )

}
export default ContactList;