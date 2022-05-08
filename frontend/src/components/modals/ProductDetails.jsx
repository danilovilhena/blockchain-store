import { Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Text, Badge, HStack, Wrap, WrapItem } from '@chakra-ui/react'

const ProductDetails = ({isOpen, onClose, item}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll" maxH="60vh">
          <Image src={item.coverImage} alt={`${item.name} cover`} w="100%" borderRadius="lg" mb="2"/>
          <HStack spacing="4" mb="4">
            {item.platforms.map((platform, index) => 
              <Badge key={index} variant="solid" borderRadius="100" px="2">{platform}</Badge>
            )}
          </HStack>
          <Text><b>Price:</b> {item.price}</Text>
          <Text><b>Release date:</b> {item.releaseDate}</Text>
          <Text><b>Developer:</b> {item.developer}</Text>
          <Text><b>Distributor:</b> {item.distributor}</Text>
          <Wrap spacing="4" my="4">
            {item.genres.map((genre, index) => 
              <WrapItem key={index}><Badge colorScheme="orange" variant="solid" borderRadius="100" px="2">{genre}</Badge></WrapItem>
            )}
          </Wrap>
          <Text whiteSpace="pre-line">{item.description}</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>Close</Button>
          <Link href={`/confirmation?id=${item.id}`} className="no-decoration"><Button colorScheme="orange">Buy now</Button></Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductDetails