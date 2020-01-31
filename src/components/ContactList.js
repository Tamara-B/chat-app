import React from "react";
import Contact from './Contact.js';

const contacts = [
    {
        online: true,
        name: "Olivia Perkins",
        avatar: "https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
        online: false,
        name: "Anthony Morrison",
        avatar: "https://randomuser.me/api/portraits/men/49.jpg"
    },
    {
        online: true,
        name: "Heather Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
        online: false,
        name: "Mario Reynolds",
        avatar: "https://randomuser.me/api/portraits/men/89.jpg"
    },
    {
        online: true,
        name: "Debra Hill",
        avatar: "https://randomuser.me/api/portraits/women/75.jpg"
    }
  ];

const ContactList = () => (
    <div>
      {contacts.map(item => (
    <Contact avatar={item.avatar} name={item.name} online={item.online} />
  ))}
    </div>
  );
  
export default ContactList;