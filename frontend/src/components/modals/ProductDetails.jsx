import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Text, Badge, HStack, Wrap, WrapItem } from '@chakra-ui/react'

const ProductDetails = ({isOpen, onClose, item, onBuy}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item[1]}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll" maxH="60vh">
          <Image src={item[3]} alt={`${item[1]} cover`} w="100%" borderRadius="lg" mb="2"/>
          <HStack spacing="4" mb="4">
            {(item[4] || []).map((platform, index) => 
              <Badge key={index} variant="solid" borderRadius="100" px="2">{platform}</Badge>
            )}
          </HStack>
          <Text><b>Price:</b> {item[2]} ETH</Text>
          <Text><b>Release date:</b> {new Date(+item[6]).toLocaleDateString()}</Text>
          <Text><b>Developer:</b> {item[7]}</Text>
          <Text><b>Distributor:</b> {item[8]}</Text>
          <Wrap spacing="4" my="4">
            {(item[9] || []).map((genre, index) => 
              <WrapItem key={index}><Badge colorScheme="orange" variant="solid" borderRadius="100" px="2">{genre}</Badge></WrapItem>
            )}
          </Wrap>
          <Text whiteSpace="pre-line">{item[10]}</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>Close</Button>
          <Button colorScheme="orange" onClick={() => {onBuy(item[0], item[2])}}>Buy now</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductDetails