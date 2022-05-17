import { Button, Container, HStack, Image, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AvatarGenerator } from 'random-avatar-generator';
import Logo from "../assets/logo.png";

const Header = ({initFunction, isConnected}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const avatar = new AvatarGenerator().generateRandomAvatar();
    setImage(avatar);
  }, []);

  const submitHandler = (e) => {
    if((e.type === "keydown" && e.key === "Enter") || e.type === "click") 
      navigate(`/search?query=${search}`);
  }

  return (
  <Container maxW={"1200px"} w={{base: "100%", sm: "90%"}} px={2} py={4}>
    <HStack align="center" justify="space-between" spacing="8" as="header">
      <Link href="/" minW="140px" w="140px"><Image src={Logo} alt="Delta logo"/></Link>
      <InputGroup>
        <Input placeholder="Search for games" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={submitHandler}/>
        <InputRightElement children={<Button onClick={submitHandler} backgroundColor="transparent"><SearchIcon /></Button>} />
      </InputGroup>
      {!isConnected ? 
      <Button px="6" colorScheme={"orange"} onClick={initFunction}>Connect Wallet</Button> : 
      <Button w="10" h="fit-content" p="0" backgroundColor="transparent" borderRadius="100%"><Image src={image} alt="Profile picture"/></Button>}
    </HStack>
  </Container>
  );
}

export default Header