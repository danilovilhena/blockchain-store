import { Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react'
import { useRef } from "react";

const ProductDelete = ({isOpen, onClose, onDelete}) => {
  const cancelRef = useRef()

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>Remove product</AlertDialogHeader>
          <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
            <Button colorScheme='red' onClick={() => {onDelete(); onClose();}} ml={3}>Delete</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default ProductDelete;