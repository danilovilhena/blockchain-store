import { Container, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import { useLocation, Navigate} from "react-router-dom";
import Products from "../components/Products";
import data from "../assets/data.json";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const SearchResults = () => {
  const query = useQuery();
  let shouldRedirect = !query.get("query");

  const getResults = () => {
    return data.filter(el => el.name.toLowerCase().includes(query.get("query").toLowerCase()));
  }

  return (<>
    {shouldRedirect && <Navigate replace to="/" />}
    <Container maxW={"1200px"} w={{ base: "100%", sm: "90%" }} px={2} py={4} as="main">
      <Heading as="h3" fontSize="2xl" mb="4" mt="8">Search results</Heading>
      <Products items={getResults()} />
    </Container>
  </>);
};

export default SearchResults;
