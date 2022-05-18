import { Container, Button, Image, HStack, VStack, Heading, Text, Divider } from "@chakra-ui/react";
import Illustration from "../assets/cover.svg";
import Products from "../components/Products";

const Home = ({products, functions}) => {
  const array = JSON.parse(JSON.stringify(products)).filter(el => el[12]);

  const getTrending = () => {
    return array.sort((a, b) => (+b[11]) - (+a[11])).slice(0, 4);
  }

  const getReleases = () => {
    return array.sort((a, b) => new Date(+b.releaseDate) - new Date(+a.releaseDate)).slice(0, 4);
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
      <Products onBuy={functions.buyProduct} items={getTrending()}/>
      {/* Latest releases */}
      <HStack justify="space-between" align="center" mb="4" mt="16">
        <Heading as="h3" fontSize="2xl">Latest releases</Heading>
        <Button colorScheme="orange" variant="outline" as="a" href="#all-games">Explore all</Button>
      </HStack>
      <Divider />
      <Products onBuy={functions.buyProduct} items={getReleases()}/>
      {/* All games */}
      <HStack justify="space-between" align="center" mb="4" mt="16">
        <Heading as="h3" fontSize="2xl" id="all-games">All games</Heading>
      </HStack>
      <Divider />
      <Products onBuy={functions.buyProduct} items={array}/>
    </Container>
  );
};

export default Home;
