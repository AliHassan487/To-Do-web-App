 import React, { useEffect, useState,   } from 'react'
 import { FiSearch } from "react-icons/fi";
 import { AiFillPlusCircle } from "react-icons/ai";
import Navigation from './components/Navbar/Navigation';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './components/ContactCard/ContactCard';
import Modal from './components/Modal/Modal';
import AddandUpdateContact from './components/AddandUpdate/AddandUpdateContact';
import useDisclouse from './hooks/useDisclouse';
 
 const App = () => {

const [contacts, setContacts] = useState([]);

const { isOpen, onClose, onOpen } = useDisclouse();

// const onOpen = () => {
//   setOpen(true);
//   console.log('isOpen set to true');
// }

// const onClose = () => {
//   setOpen(false);
//   console.log('isOpen set to false');
// }



useEffect(()=>{

  const getContacts = async () =>{
    try {
      const contactsRef = collection(db, "contacts");
       

     onSnapshot(contactsRef, (snapshot) =>{
      const contactLists = snapshot.docs.map((doc) => {
        return{
          id:doc.id,
          ...doc.data()
        }
      });
      setContacts(contactLists)
      return contactLists;

     })


      

    } catch (error) {
      console.log(error)
    }

  };
  getContacts();

}, []);

const filterContacts = (e) =>{
  const value = e.target.value;

  const contactsRef = collection(db, "contacts");
       

     onSnapshot(contactsRef, (snapshot) =>{
      const contactLists = snapshot.docs.map((doc) => {
        return{
          id:doc.id,
          ...doc.data()
        }
      });

      const filteredContact = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
      setContacts(filteredContact)
      return filteredContact;

     })


}


   return (
     <>
     <div className="mx-auto max-w-[370px] px-4"> 
       <Navigation/>
       <div className="flex gap-2">
       <div className="relative flex flex-grow items-center">
       <FiSearch className="absolute ml-1 text-3xl text-white" />
        <input onChange={filterContacts} type="text"
        className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white" />
       </div>
       <AiFillPlusCircle   onClick={onOpen}  className="cursor-pointer text-5xl text-white"/>
       </div>
       <div className='mt-4 flex flex-col gap-3'>
        {contacts.map(contact => <div key={contact.id} className='bg-yellow flex justify-between items-center p-2 rounded-lg'>
           <ContactCard key={contact.id} contact={contact}/>
        </div>) }
       </div>
       </div>
       
       <AddandUpdateContact isOpen={isOpen} onClose={onClose}/> 
       <ToastContainer position='bottom-center'/>

       
     </>
   )
 }
 
 export default App;
 