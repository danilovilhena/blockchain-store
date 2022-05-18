import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, FormHelperText, Input, Textarea } from '@chakra-ui/react'

const ProductAdd = ({ isOpen, onClose, functions }) => {
  const formControls = [
    {name: "Name", type: "text", value: ""},
    {name: "Price", type: "text", value: ""},
    {name: "Cover image", type: "text", helperText: "Insert an image URL", value: ""},
    {name: "Platforms", type: "text", helperText: "Insert platforms separated by commas", value: ""},
    {name: "Release date", type: "text", helperText: "Insert a date in the format MM-DD-YYYY", value: ""},
    {name: "Developer", type: "text", value: ""},
    {name: "Distributor", type: "text", value: ""},
    {name: "Genres", type: "text", helperText: "Insert genres separated by commas", value: ""},
    {name: "Description", type: "textarea", value: ""},
  ]

  const submitHandler = () => {
    console.log(formControls.map(el => el.value))
    functions.addProduct(
      formControls[0].value,
      +formControls[1].value,
      formControls[2].value,
      formControls[3].value.split(','),
      +new Date(formControls[4].value).getTime() || +new Date().getTime(),
      formControls[5].value,
      formControls[6].value,
      formControls[7].value.split(','),
      formControls[8].value
    )
    formControls.forEach(el => el.value = "")
    onClose();
  }

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
                <Textarea id={control.name.toLowerCase()} onChange={(e) => {formControls[index].value = e.target.value}}/> : 
                <Input id={control.name.toLowerCase()} type={control.type} onChange={(e) => {formControls[index].value = e.target.value}}/>
              }
              {control.helperText && <FormHelperText>{control.helperText}</FormHelperText>}
            </FormControl>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>Close</Button>
          <Button colorScheme='orange' onClick={submitHandler}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductAdd