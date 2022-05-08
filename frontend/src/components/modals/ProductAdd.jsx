import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, FormHelperText, Input, Textarea } from '@chakra-ui/react'

const ProductAdd = ({isOpen, onClose}) => {
  const formControls = [
    {name: "Name", type: "text"},
    {name: "Price", type: "text"},
    {name: "Cover image", type: "text", helperText: "Insert an image URL"},
    {name: "Platforms", type: "text", helperText: "Insert platforms separated by commas"},
    {name: "Release date", type: "text", helperText: "Insert a date in the format DD-MM-YYYY"},
    {name: "Developer", type: "text"},
    {name: "Distributor", type: "text"},
    {name: "Genres", type: "text", helperText: "Insert genres separated by commas"},
    {name: "Description", type: "textarea"},
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add product</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll" maxH="60vh">
          {formControls.map((control, index) => (
            <FormControl key={index} mb="4">
              <FormLabel htmlFor={control.name.toLowerCase()}>{control.name}</FormLabel>
              {control.type === "textarea" ? 
                <Textarea id={control.name.toLowerCase()} /> : 
                <Input id={control.name.toLowerCase()} type={control.type} />
              }
              {control.helperText && <FormHelperText>{control.helperText}</FormHelperText>}
            </FormControl>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>Close</Button>
          <Button colorScheme='orange'>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductAdd