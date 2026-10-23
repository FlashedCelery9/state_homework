import type {Contact} from "../models/Contact.ts";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";


interface editContactProps{
    contacts: Contact[];
    setContacts(newContacts: Contact[]): void;
}


export default function AddContact({contacts, setContacts}: editContactProps){
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    return (
        <>
        <div className="w-auto fixed flex top-4 right-4 text-black bg-gray-400 items-center ">
            <form className="flex flex-col gap-2" onSubmit={(e) =>{
                e.preventDefault();
                if(name.length > 4 && email.length > 4 && phone.length > 9){
                    setContacts([...contacts, {id: contacts.length+1, name: name, phone: phone, email: email, isFavorite: isFavorite}])
                    setName("");
                    setPhone("");
                    setEmail("");
                    setIsFavorite(false);
                    setError("");
                }
                else {
                    setError("All fields are required");
                }
                }}>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="button" onClick={() => setIsFavorite(!isFavorite)}>Favorite: {String(isFavorite)}</button>
                <div className={twMerge(clsx("md: invisible h-0 w-0 ", error!=="" && "md: visible h-20 flex w-40 bg-gray-300 items-center self-center"))}>
                    <p className=" text-[15px] text-red-500">{error}</p>

                </div>
                <button type="submit">Add contact</button>
            </form>
        </div>
        </>
    )
}