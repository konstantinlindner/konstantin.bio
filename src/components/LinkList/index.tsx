import { Icon } from '@iconify/react';
import { Button, Link, VStack } from '@chakra-ui/react';

function LinkList() {
  return (
    <VStack pt="4">
      <Link rounded="md" isExternal href="https://konstantinlindner.com">
        <Button
          leftIcon={<Icon icon="mdi:home" />}
          variant="outline"
          colorScheme="blue"
          size="md"
          w={'300px'}
          rounded="md"
        >
          Website
        </Button>
      </Link>

      <Link
        rounded="md"
        isExternal
        href="https://konstantinlindner.com/projects"
      >
        <Button
          leftIcon={<Icon icon="mdi:code-tags" />}
          variant="outline"
          colorScheme="blue"
          size="md"
          w={'300px'}
        >
          Projects
        </Button>
      </Link>

      <Link
        rounded="md"
        isExternal
        href="https://konstantinlindner.com/gallery"
      >
        <Button
          leftIcon={<Icon icon="mdi:image" />}
          variant="outline"
          colorScheme="blue"
          size="md"
          w={'300px'}
        >
          Gallery
        </Button>
      </Link>
    </VStack>
  );
}

export default LinkList;
