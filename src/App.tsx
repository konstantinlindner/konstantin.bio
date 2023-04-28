import {
  Heading,
  VStack,
  HStack,
  Center,
  Button,
  Text,
  Image,
  Box,
  IconButton,
  ButtonGroup,
  Link,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

function App() {
  return (
    <Box m="8">
      <Center mx="auto">
        <VStack>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://a-us.storyblok.com/f/1013926/679x679/26ff38e205/pb_france_original_webp.webp"
            fallbackSrc="/profile.webp"
            alt="Konstantin Lindner"
          />
          <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>
          <HStack spacing="1">
            <Text>@konstantinlindner</Text>
            <Icon color="#1D9BF0" icon="mdi:check-decagram" />
          </HStack>

          <ButtonGroup pt="3">
            <Link
              rounded="full"
              isExternal
              href="https://instagram.com/konstantin.lindner"
            >
              <IconButton
                aria-label="Instagram link"
                rounded="full"
                size="sm"
                icon={<Icon icon="bi:instagram" />}
              />
            </Link>

            <IconButton
              aria-label="Spotify link"
              rounded="full"
              size="sm"
              icon={<Icon icon="bi:spotify" />}
            />

            <IconButton
              aria-label="LinkedIn link"
              rounded="full"
              size="sm"
              icon={<Icon icon="bi:linkedin" />}
            />

            <IconButton
              aria-label="Github link"
              rounded="full"
              size="sm"
              icon={<Icon icon="bi:github" />}
            />
          </ButtonGroup>

          <VStack pt="4">
            <Button
              leftIcon={<Icon icon="mdi:home" />}
              variant="outline"
              colorScheme="blue"
              size="md"
            >
              Website
            </Button>
            <Button colorScheme="blue" size="md">
              <Icon icon="mdi:code-tags" />
              <Text ml="2.5">Portfolio</Text>
            </Button>
            <Button colorScheme="blue" size="md">
              <Icon icon="mdi:image" />
              <Text ml="2.5">Gallery</Text>
            </Button>
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
}

export default App;
