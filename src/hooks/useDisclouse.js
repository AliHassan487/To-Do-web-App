import React, { useState } from 'react'

const useDisclouse = () => {
    const [isOpen, setOpen] = useState(false);

const onOpen = () => {
  setOpen(true);
  console.log('isOpen set to true');
}

const onClose = () => {
  setOpen(false);
  console.log('isOpen set to false');
}
  return {onClose, isOpen, onOpen}
}

export default useDisclouse
