import type {Contact} from "../models/Contact.ts";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";


export interface ContactListProps {
    contactsList: Contact[];
    setContacts: (contacts: Contact[]) => void;
}
export default function ({contactsList, setContacts}: ContactListProps) {
    function editIsFavorite(contact: Contact) {
        setContacts(
            contactsList.map((item) =>
                item.id === contact.id
                    ? { ...item, isFavorite: !item.isFavorite }
                    : item
            )
        )
    }
    function deleteContact(id: number) {
        setContacts(contactsList.filter((contact) => contact.id !== id))
    }
    function editEmail(contact: Contact) {
        setContacts(contactsList.map((item) => (item.id == contact.id ? {...item, email: "editedEmail" } : item)))
    }
    return (
        <>
            <h2 className="self-center">ContactsList</h2>
            <div className="w-[80%] bg-gray-500 self-center flex">
                <div className=" flex flex-col gap-3 m-5 w=[50%]">
                    {contactsList.map(contact => (
                        <div key={contact.id} className="w-100 bg-gray-400 p-5 text-black justify-items-center">
                            <h2 className="">{contact.name}</h2>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                            <p>Id: {contact.id}</p>
                            <button className={twMerge(clsx("text-zinc-300 ", contact.isFavorite && "text-amber-300"))} onClick={() => {editIsFavorite(contact)}

                            }>✫</button>
                            <div className="flex gap-2">
                                <button className="bg-red-400 pl-2 pr-2 rounded-am " onClick={() => {deleteContact(contact.id)}}>Delete</button>
                                <button className="bg-yellow-600 pl-2 pr-2 rounded-am " onClick={() => editEmail(contact)}>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}