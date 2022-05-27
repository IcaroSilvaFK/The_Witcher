import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Container>
      <Heading fontFamily='oddie' letterSpacing='2px'>
        The Witcher
      </Heading>
      <Box width='500px' margin='20px'>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          aut repudiandae fugit tenetur sunt quae velit exercitationem quam,
          impedit dolorem sed vitae officiis quibusdam eligendi facilis itaque
          quisquam quidem! Commodi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consectetur omnis quidem quasi dignissimos
          distinctio quibusdam! Quae repellat, modi cumque maiores quisquam
          sequi assumenda excepturi neque. Maiores nam exercitationem alias
          veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat cumque et totam voluptatum vel impedit, quae architecto autem
          molestiae, asperiores iusto itaque neque quibusdam ratione veniam
          repellendus velit perferendis labore.
        </Text>
      </Box>
    </Container>
  );
}
