import { Flex, Grid, Container, Button, Image, HStack, VStack, Heading, Text, Divider, GridItem, Spacer } from "@chakra-ui/react";
import Illustration from "../assets/cover.svg";

const Home = () => {
  const mockTrending = [
    {name: 'LEGO Star Wars™: The Skywalker Saga', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/61f186bb90f1e2247b551b7f/banners/sjqph3geidroun5v2mvn.jpg', price: 'R$159,99'},
    {name: 'Middle-earth: Shadow of Mordor - Game of the Year Edition', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbcb269702d0a9c600801/banners/lsv97mpj5fk77u9ghc1a.jpg', price: 'R$12,49'},
    {name: 'Project CARS 2', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/59b82ad2efd2f07dc0000324/banners/ak2bzzyl7cqrjdgrslti.jpg', price: 'R$37,48'},
    {name: 'Project CARS 3', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/5f2af0f5a3f8b1504db99161/banners/xiivfaf3y4sljdfumgbq.jpg', price: 'R$103,47'}
  ]

  const mockReleases = [
    {name: 'Atelier Sophie 2: The Alchemist', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/620670ed1f640707136448ee/banners/moyanpesx76wv4fo0r1h.jpg', price: 'R$430,87'},
    {name: 'Euro Truck Simulator 2', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbb4d69702d0a9cab8700/banners/rd166ojwrkegtxi8vkx8.jpg', price: 'R$9,99'},
    {name: 'Best Month Ever!', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/626954de7ab0ba0014ec7b20/banners/wipb9fqjd6igxsnnpknv.jpg', price: 'R$47,55'},
    {name: 'Trek to Yomi', image: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/62608170d3869f001782c81c/banners/wqbxwl88koqr08vhr5n8.jpg', price: 'R$49,99'}
  ]

  return (
    <Container maxW={"1200px"} w={{ base: "100%", sm: "90%" }} px={2} py={4}>
      {/* Cover */}
      <HStack justify="space-between" py="16">
        <VStack align="start" w="50%" spacing="6">
          <Heading as="h1" color="orange">Discover new games and Buy now using your favorite <Text color="darkblue" as="span">cripto</Text></Heading>
          <Heading as="h2" fontSize="lg" fontWeight="normal">The world's first and largest digital store for games using ETH.</Heading>
        </VStack>
        <Image src={Illustration} alt="Two people playing games" maxW="45%" />
      </HStack>
      {/* Trending products */}
      <HStack justify="space-between" align="center" mb="4" mt="8">
        <Heading as="h3" fontSize="2xl">Trending games</Heading>
        <Button colorScheme="orange" variant="outline" as="a" href="#all-games">Explore all</Button>
      </HStack>
      <Divider />
      <Grid templateColumns='repeat(4, 1fr)' gap="8" mt="8">
        {mockTrending.map((item, index) => (
          <GridItem key={index} maxW="264px" h="100%">
            <Flex shadow="md" borderRadius="md" h="100%" direction="column" align="flex-start">
              <Image src={item.image} alt={item.name + " cover"} borderTopLeftRadius="md" borderTopRightRadius="md" />
              <Text px="4" py="2" fontSize="lg" fontWeight="bold" >{item.name}</Text>
              <Text px="4" color="green">{item.price}</Text>
              <Spacer />
              <HStack p="4">
                <Button colorScheme="orange" variant="outline">View details</Button>
                <Button colorScheme="orange">Buy now</Button>
              </HStack>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      {/* Latest releases */}
      <HStack justify="space-between" align="center" mb="4" mt="16">
        <Heading as="h3" fontSize="2xl">Latest releases</Heading>
        <Button colorScheme="orange" variant="outline" as="a" href="#all-games">Explore all</Button>
      </HStack>
      <Divider />
      <Grid templateColumns='repeat(4, 1fr)' gap="8" mt="8">
        {mockReleases.map((item, index) => (
          <GridItem key={index} maxW="264px" h="100%">
            <Flex shadow="md" borderRadius="md" h="100%" direction="column" align="flex-start">
              <Image src={item.image} alt={item.name + " cover"} borderTopLeftRadius="md" borderTopRightRadius="md" />
              <Text px="4" py="2" fontSize="lg" fontWeight="bold" >{item.name}</Text>
              <Text px="4" color="green">{item.price}</Text>
              <Spacer />
              <HStack p="4">
                <Button colorScheme="orange" variant="outline">View details</Button>
                <Button colorScheme="orange">Buy now</Button>
              </HStack>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      {/* All games */}
      <HStack justify="space-between" align="center" mb="4" mt="16">
        <Heading as="h3" fontSize="2xl" id="all-games">All games</Heading>
      </HStack>
      <Divider />
      <Grid templateColumns='repeat(4, 1fr)' gap="8" mt="8">
        {[...mockReleases, ...mockTrending].map((item, index) => (
          <GridItem key={index} maxW="264px" h="100%">
            <Flex shadow="md" borderRadius="md" h="100%" direction="column" align="flex-start">
              <Image src={item.image} alt={item.name + " cover"} borderTopLeftRadius="md" borderTopRightRadius="md" />
              <Text px="4" py="2" fontSize="lg" fontWeight="bold" >{item.name}</Text>
              <Text px="4" color="green">{item.price}</Text>
              <Spacer />
              <HStack p="4">
                <Button colorScheme="orange" variant="outline">View details</Button>
                <Button colorScheme="orange">Buy now</Button>
              </HStack>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
