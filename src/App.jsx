 import React, { useEffect, useState } from 'react'
 import { FiSearch } from "react-icons/fi";
 import { AiFillPlusCircle } from "react-icons/ai";
import Navigation from './components/Navbar/Navigation';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from './components/ContactCard/ContactCard';
import Model from './components/Model/Model';
 
 const App = () => {

const [contacts, setContacts] = useState([]);

const [isopen, setOpen] = useState(false);

const onOpen = () => {
  setOpen(true);
}

const onClose = () => {
  setOpen(false);
}



useEffect(()=>{

  const getContacts = async () =>{
    try {
      const contactsRef = collection(db, "contacts");
      const contactsSnapshot = await getDocs(contactsRef);
      const contactLists = contactsSnapshot.docs.map((doc) => {
        return{
          id:doc.id,
          ...doc.data()
        }
      });
      setContacts(contactLists)


    } catch (error) {
      console.log(error)
    }

  };
  getContacts();

}, []);


   return (
     <>
     <div className="mx-auto max-w-[370px] px-4"> 
       <Navigation/>
       <div className="flex gap-2">
       <div className="relative flex flex-grow items-center">
       <FiSearch className="absolute ml-1 text-3xl text-white" />
        <input type="text"
        className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white" />
       </div>
       <AiFillPlusCircle  className="cursor-pointer text-5xl text-white"/>
       </div>
       <div className='mt-4 flex flex-col gap-3'>
        {contacts.map(contact => <div key={contact.id} className='bg-yellow flex justify-between items-center p-2 rounded-lg'>
           <ContactCard key={contact.id} contact={contact}/>
        </div>) }
       </div>
       </div>
       <Model isOpen={isopen}
       onClose={onClose}>
        Hi

       </Model>
     </>
   )
 }
 
 export default App;
 