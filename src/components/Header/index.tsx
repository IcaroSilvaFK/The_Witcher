import { Box, Container, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Geralt from "../../assets/geralt.png";
import Medalhao from "../../assets/medalhao.png";

export function Header() {
  return (
    <Container
      as='header'
      padding='40px 50px'
      display='flex'
      justifyContent='center'
      pos='relative'
      w='100%'
      maxW='none'
    >
      <Box
        as='nav'
        display='flex'
        alignItems='center'
        gap='80px'
        justifyContent='center'
      >
        <Link to='/'>
          <Text
            fontSize='1.1rem'
            _hover={{
              color: "danger",
            }}
          >
            Characters
          </Text>
        </Link>
        <Link to='/'>
          <Text
            fontSize='1.1rem'
            _hover={{
              color: "danger",
            }}
          >
            Armors
          </Text>
        </Link>
        <Box marginBottom='20px' width='80px'>
          <Link to='/'>
            <Image
              src={Medalhao}
              width='80px'
              filter='drop-shadow(0 0 0.20rem #FC8181)'
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Link>
        </Box>
        <Link
          to='/'
          style={{
            zIndex: "1",
          }}
        >
          <Text
            fontSize='1.1rem'
            _hover={{
              color: "danger",
            }}
          >
            Monsters
          </Text>
        </Link>
        <Link
          to='/'
          style={{
            zIndex: "1",
          }}
        >
          <Text
            fontSize='1.1rem'
            _hover={{
              color: "danger",
            }}
          >
            Weapons
          </Text>
        </Link>
      </Box>
      <Box
        pos='absolute'
        right='20px'
        top='10px'
        style={{
          perspective: "200%",
        }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src={Geralt}
          w='450px'
          opacity='.6'
          transform='translateZ(-100px)'
        />
        <Box
          bg='primary'
          pos='absolute'
          bottom='-25px'
          h='60px'
          w='280px'
          filter='blur(20px)'
        ></Box>
      </Box>
    </Container>
  );
}
