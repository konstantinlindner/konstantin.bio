import { Icon } from '@iconify/react';
import { ButtonGroup, Link, IconButton } from '@chakra-ui/react';

function LinkList() {
  return (
    <ButtonGroup pt="2">
      <Link rounded="full" isExternal href="https://snapchat.com/add/kontedisc">
        <IconButton
          aria-label="Snapchat link"
          rounded="full"
          size="sm"
          fontSize="xl"
          _hover={{}}
          icon={<Icon icon="mdi:snapchat" />}
        />
      </Link>
      <Link
        rounded="full"
        isExternal
        href="https://instagram.com/konstantin.lindner"
      >
        <IconButton
          aria-label="Instagram link"
          rounded="full"
          size="sm"
          fontSize="xl"
          _hover={{ color: '#FF0069' }}
          icon={<Icon icon="mdi:instagram" />}
        />
      </Link>
      <Link
        rounded="full"
        isExternal
        href="https://open.spotify.com/user/el9iz0421ohco9v4ps97j2l8e?si=tbfl8hbFRyaycr4iPfxOsw"
      >
        <IconButton
          aria-label="Spotify link"
          rounded="full"
          size="sm"
          fontSize="xl"
          _hover={{ color: '#1cd760' }}
          icon={<Icon icon="mdi:spotify" />}
        />
      </Link>
      <Link
        rounded="full"
        isExternal
        href="https://www.linkedin.com/in/konstantinlindner"
      >
        <IconButton
          aria-label="LinkedIn link"
          rounded="full"
          size="sm"
          fontSize="xl"
          _hover={{ color: '#0077B5' }}
          icon={<Icon icon="mdi:linkedin" />}
        />
      </Link>

      <Link
        rounded="full"
        isExternal
        href="https://github.com/konstantinlindner"
      >
        <IconButton
          aria-label="Github link"
          rounded="full"
          size="sm"
          fontSize="xl"
          _hover={{}}
          icon={<Icon icon="mdi:github" />}
        />
      </Link>
    </ButtonGroup>
  );
}

export default LinkList;
