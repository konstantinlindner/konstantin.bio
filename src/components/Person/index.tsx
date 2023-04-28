import { Icon } from '@iconify/react';
import { Heading, HStack, Text, Image, VStack } from '@chakra-ui/react';

function Person() {
  return (
    <VStack>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://a-us.storyblok.com/f/1013926/679x679/26ff38e205/pb_france_original_webp.webp"
        fallbackSrc="/assets/profile.webp"
        alt="Konstantin Lindner"
      />
      <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>
      <HStack spacing="1">
        <Text>@konstantinlindner</Text>
        <Icon color="#1D9BF0" icon="mdi:check-decagram" />
      </HStack>
    </VStack>
  );
}

export default Person;
