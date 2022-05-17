import { Container, Button, Image, HStack, VStack, Heading, Text, Divider } from "@chakra-ui/react";
import Illustration from "../assets/cover.svg";
import Products from "../components/Products";

const Home = ({products}) => {
  const array = products;

  const getTrending = () => {
    let shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }

  const getReleases = () => {
    return array.sort((a, b) => b.releaseDate.split("/")[2] - a.releaseDate.split("/")[2]).slice(0, 4);
  }

  return (
    <Container maxW={"1200px"} w={{ base: "100%", sm: "90%" }} px={2} py={4} as="main">
      {/* Cover */}
      <HStack justify="space-between" py="16">
        <VStack align="start" w="50%" spacing="6">
          <Heading as="h1" color="orange">Discover new games and buy using your favorite <Text color="darkblue" as="span">cripto</Text></Heading>
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
      <Products items={getTrending()}/>
      {/* Latest releases */}
      <HStack justify="space-between" align="center" mb="4" mt="16">
        <Heading as="h3" fontSize="2xl">Latest releases</Heading>
        <Button colorScheme="orange" variant="outline" as="a" href="#all-games">Explore all</Button>
      </HStack>
      <Divider />
      <Products items={getReleases()}/>
      {/* All games */}
      <HStack justify="space-between" align="center" mb="4" mt="16">
        <Heading as="h3" fontSize="2xl" id="all-games">All games</Heading>
      </HStack>
      <Divider />
      <Products items={products}/>
    </Container>
  );
};

export default Home;
