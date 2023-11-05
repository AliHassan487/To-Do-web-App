import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../../config/firebase'
import AddandUpdateContact from '../AddandUpdate/AddandUpdateContact'
import useDisclouse from '../../hooks/useDisclouse'
import { toast } from 'react-toastify';
import { Toastify } from 'toastify'

const ContactCard = ( { contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

const deleteContact = async (id) => {
  try {
    await deleteDoc(doc(db, "contacts", id))
    toast.success("Contact Deleted Successfully");
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <>
      <div className='flex gap-1'>
          <HiOutlineUserCircle className='text-orange text-4xl'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
          </div>
          </div>
          <div className='flex text-3xl'>
            <IoMdTrash onClick={() =>deleteContact (contact.id)} className='text-orange cursor-pointer'/>
            <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          </div>
          <AddandUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard
