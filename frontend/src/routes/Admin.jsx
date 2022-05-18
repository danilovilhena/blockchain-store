import { Text, Button, Container, HStack, Heading, Link, Image, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useDisclosure } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import ProductAdd from "../components/modals/ProductAdd";
import ProductDelete from "../components/modals/ProductDelete";

const TableRow = ({item, onDelete}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
            
  return (<>
    <Tr>
      <Td>{item.name}</Td>
      <Td>{item.price} ETH</Td>
      <Td>{item.sales}</Td>
      <Td>{new Date(+item.releaseDate).toLocaleDateString()}</Td>
      <Td isNumeric>{
        item.isActive ? 
        <Button onClick={onOpen} backgroundColor="grey" colorScheme="red">Remove</Button> :
        <Text color="red">Removed</Text>
      }</Td>
    </Tr>
    <ProductDelete isOpen={isOpen} onClose={onClose} onDelete={onDelete} id={item.id}/>
  </>)
}

const Admin = ({products, functions}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const array = products;

  return (
    <Container maxW={"1200px"} w={{ base: "100%", sm: "90%" }} px={2} py={4}>
      {/* Header */}
      <HStack align="center" justify="space-between" spacing="8" as="header">
        <Link href="/" minW="140px" w="140px"><Image src={Logo} alt="Delta logo"/></Link>
        <Link href="/" className="no-decoration"><Button colorScheme={"orange"} variant="outline">Return to home</Button></Link>
      </HStack>

      {/* Products */}
      <HStack justify="space-between">
        <Heading as="h3" fontSize="2xl" mt="12" mb="8">Products</Heading>
        <Button colorScheme="green" onClick={onOpen}>Add product</Button>
        <ProductAdd isOpen={isOpen} onClose={onClose} functions={functions}/>
      </HStack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Sales</Th>
              <Th>Release date</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          <Tbody>
            {array.map((item, index) => <TableRow item={item} key={index} onDelete={() => {functions.removeProduct(item.id)}}/>)}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Admin;