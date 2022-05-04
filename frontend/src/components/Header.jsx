import { Button, Container, Flex, Image, Link } from "@chakra-ui/react";
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
    <Flex align="center" justify="space-between">
      <Link href="/" w="15%"><Image src={Logo} alt="Delta logo"/></Link>
      {!connected ? 
      <Button colorScheme={"orange"} onClick={() => setConnected(true)}>Connect Wallet</Button> : 
      <Button w="10" h="fit-content" p="0" backgroundColor="transparent" borderRadius="100%" onClick={() => setConnected(false)}><Image src={image} alt="Profile picture"/></Button>}
    </Flex>
</Container>
  );
}

export default Header