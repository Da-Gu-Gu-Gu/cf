import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'

  
  function Confirm(props)  {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(props)
   return (
       <>
        <Button onClick={onOpen}>aa</Button>
   
        <Modal
        isCentered
        onClose={onClose}
        isOpen={props.isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>dd</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         df
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose(true)}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )  
};
  
  export default Confirm;
  