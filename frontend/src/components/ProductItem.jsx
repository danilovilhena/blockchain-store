import { Flex, Button, Image, HStack, Text, GridItem, Spacer, useDisclosure } from "@chakra-ui/react";
import ProductDetails from "./modals/ProductDetails";

const ProductItem = ({ item, onBuy }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <GridItem maxW="264px" h="100%">
      <Flex shadow="md" borderRadius="md" h="100%" direction="column" align="flex-start">
        <Image src={item[3]} alt={item[1] + " cover"} borderTopLeftRadius="md" borderTopRightRadius="md" />
        <Text px="4" py="2" fontSize="lg" fontWeight="bold" >{item[1]}</Text>
        <Text px="4" color="green">{item[2]} ETH</Text>
        <Spacer />
        <HStack p="4">
          <Button colorScheme="orange" variant="outline" onClick={onOpen}>View details</Button>
          <Button colorScheme="orange" onClick={() => {onBuy(item[0], item[2])}}>Buy now</Button>
        </HStack>
      </Flex>
      <ProductDetails isOpen={isOpen} onClose={onClose} item={item} onBuy={onBuy}/>
    </GridItem>
  )
}

export default ProductItem;