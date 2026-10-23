
import './App.css'
import type {Contact} from "./models/Contact.ts"
import {useState} from "react";
import ContactsList from "./Components/contactsList.tsx";
import AddContact from "./Components/editContact.tsx";




function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Alice Johnson",
      phone: "123-456-7890",
      email: "alice@example.com",
      isFavorite: true
    },
    {
      id: 2,
      name: "Bob Smith",
      phone: "987-654-3210",
      email: "bob@example.com",
      isFavorite: false
    }
  ]);
  return (
    <>
      <ContactsList contactsList={contacts} setContacts={setContacts} />
      <AddContact contacts={contacts} setContacts={setContacts} />
    </>
  )
}

export default App
