import { Flex, Button, Image, HStack, Text, GridItem, Spacer } from "@chakra-ui/react";

const ProductItem = ({ item }) => {
  return (
    <GridItem maxW="264px" h="100%">
      <Flex shadow="md" borderRadius="md" h="100%" direction="column" align="flex-start">
        <Image src={item.coverImage} alt={item.name + " cover"} borderTopLeftRadius="md" borderTopRightRadius="md" />
        <Text px="4" py="2" fontSize="lg" fontWeight="bold" >{item.name}</Text>
        <Text px="4" color="green">{item.price}</Text>
        <Spacer />
        <HStack p="4">
          <Button colorScheme="orange" variant="outline">View details</Button>
          <Button colorScheme="orange">Buy now</Button>
        </HStack>
      </Flex>
    </GridItem>
  )
}

export default ProductItem;