import { Button, Container, HStack, Image, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { AvatarGenerator } from 'random-avatar-generator';
import Logo from "../assets/logo.png";

const Header = () => {
  const [connected, setConnected] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    const avatar = new AvatarGenerator().generateRandomAvatar();
    setImage(avatar);
  }, []);

  return (
  <Container maxW={"1200px"} w={{base: "100%", sm: "90%"}} px={2} py={4}>
    <HStack align="center" justify="space-between" spacing="8">
      <Link href="/" minW="140px" w="140px"><Image src={Logo} alt="Delta logo"/></Link>
      <InputGroup>
        <Input placeholder='Search for games' />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
      {!connected ? 
      <Button px="6" colorScheme={"orange"} onClick={() => setConnected(true)}>Connect Wallet</Button> : 
      <Button w="10" h="fit-content" p="0" backgroundColor="transparent" borderRadius="100%" onClick={() => setConnected(false)}><Image src={image} alt="Profile picture"/></Button>}
    </HStack>
  </Container>
  );
}

export default Header