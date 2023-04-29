import { Icon } from '@iconify/react';
import { Heading, HStack, Text, Image, VStack } from '@chakra-ui/react';

function Person() {
  return (
    <VStack>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1682728237/pb_france_original_webp.webp"
        fallbackSrc="/assets/profile.webp"
        alt="Konstantin Lindner"
      />
      <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>
      <HStack spacing="1">
        <Text>@konstantinlindner</Text>
        <Icon color="#1D9BF0" icon="mdi:check-decagram" />
      </HStack>
      <Text align="center" py="1" maxW="300">
        Full-stack software developer from Sweden, now based in Canada.
      </Text>

      <Text maxW="300">📍 Vancouver, Canada</Text>
    </VStack>
  );
}

export default Person;
