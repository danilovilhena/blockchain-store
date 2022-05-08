import { Text, Button, Container, HStack, Heading, Link, Image, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useDisclosure } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import data from "../assets/data.json";
import ProductAdd from "../components/modals/ProductAdd";
import ProductDelete from "../components/modals/ProductDelete";

const TableRow = ({item}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
            
  return (<>
    <Tr>
      <Td>{item.name}</Td>
      <Td>{item.price}</Td>
      <Td>0</Td>
      <Td>{item.creationDate}</Td>
      <Td isNumeric>{
        Math.random() > 0.2 ? 
        <Button onClick={onOpen} backgroundColor="grey" colorScheme="red">Remove</Button> :
        <Text color="red">Removed</Text>
      }</Td>
    </Tr>
    <ProductDelete isOpen={isOpen} onClose={onClose}/>
  </>)
}

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const array = data;

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
        <ProductAdd isOpen={isOpen} onClose={onClose}/>
      </HStack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Sales</Th>
              <Th>Creation date</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          <Tbody>
            {array.map((item, index) => <TableRow item={item} key={index}/>)}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Transactions */}
      <Heading as="h3" fontSize="2xl" mt="12" mb="8">Transactions</Heading>
      <Text>No transactions yet.</Text>
    </Container>
  )
}

export default Admin;