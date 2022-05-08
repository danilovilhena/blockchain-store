import { Box, Button, Container, Center, Image, Heading, Text, Divider, Link, HStack, useToast } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useMemo } from "react";
import { useLocation, Navigate } from "react-router-dom";
import data from "../assets/data.json";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Confirmation = () => {
  const toast = useToast();
  const query = useQuery();
  let itemId = query.get("id");
  let item = data.find(el => el.id == itemId);

  const confirmPurchase = () => {
    toast({title: "Product purchased!", status: "success", isClosable: true })
  }

  return (<>
    {!itemId && <Navigate replace to="/" />}
    <Container maxW={"1200px"} w={{ base: "100%", sm: "90%" }} px={2} py={4} as="main">
      <Heading as="h3" fontSize="2xl" mt="4" mb="8">Confirm purchase</Heading>
      <Image src={item.coverImage} alt={`${item.name} cover`} borderRadius="lg" mb="4"/>
      <HStack minH="50px">
        <Box>
          <Text><b>Name:</b> {item.name}</Text>
          <Text><b>Release date:</b> {item.releaseDate}</Text>
          <Text><b>Developer:</b> {item.developer}</Text>
          <Text><b>Distributor:</b> {item.distributor}</Text>
        </Box>
        <Center height="50px" px="12"><Divider orientation="vertical" /></Center>
        <Box>
          <Text><b>Price:</b> {item.price}</Text>
          <Text><b>Contract Address:</b> <Link href="#" isExternal>ddae764ce8e8f7ea5af9c92204c8e04d <ExternalLinkIcon mx='2px' /></Link></Text>
          <Text><b>Token ID:</b> 92fff723d9dbfbe3b13a402475b39641</Text>
          <Text><b>Token Standard:</b> ERC-1155</Text>
        </Box>
      </HStack>
      <Button colorScheme="orange" mt="8" mb="2" onClick={confirmPurchase}>Confirm purchase</Button>
      <Text fontSize="sm" color="blackAlpha.700">You can't undo this action afterwards.</Text>
    </Container>
  </>)
}

export default Confirmation;