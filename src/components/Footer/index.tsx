import { Box, Container, Image } from "@chakra-ui/react";

import Logo from "../../assets/logo.png";

export function Footer() {
  return (
    <Container
      as='footer'
      pos='relative'
      w='100%'
      maxW='none'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        w='80%'
        pos='absolute'
        h='4px'
        bg='danger'
        bottom='-80px'
        borderRadius='20px'
      ></Box>
      <Box pos='absolute' bottom='-90px' right='620px'>
        <Image src={Logo} w='80px' />
      </Box>
      <Box
        pos='absolute'
        bg='primary'
        w='4px'
        h='4px'
        left='500px'
        bottom='-80px'
        transform='skew(50deg)'
      ></Box>
      <Box
        pos='absolute'
        bg='primary'
        w='4px'
        h='4px'
        left='550px'
        bottom='-80px'
        transform='skew(50deg)'
      ></Box>
      <Box
        pos='absolute'
        bg='primary'
        w='4px'
        h='4px'
        left='600px'
        bottom='-80px'
        transform='skew(50deg)'
      ></Box>
      <Box
        pos='absolute'
        bg='primary'
        w='4px'
        h='4px'
        left='900px'
        bottom='-80px'
        transform='skew(50deg)'
      ></Box>
      <Box
        pos='absolute'
        bg='primary'
        w='4px'
        h='4px'
        left='850px'
        bottom='-80px'
        transform='skew(50deg)'
      ></Box>
      <Box
        pos='absolute'
        bg='primary'
        w='4px'
        h='4px'
        left='800px'
        bottom='-80px'
        transform='skew(50deg)'
      ></Box>
    </Container>
  );
}
