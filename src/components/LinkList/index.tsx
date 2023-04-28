import { VStack } from '@chakra-ui/react';
import LinkItem from './LinkItem';

interface linkItem {
  link: string;
  name: string;
  icon: string;
  color: string;
  variant: string;
}

function LinkList() {
  const linkItems: linkItem[] = [
    {
      name: 'Website',
      icon: 'mdi:home',
      link: 'https://konstantinlindner.com',
      color: 'blue',
      variant: 'solid',
    },
    {
      name: 'Projects',
      icon: 'mdi:code-tags',
      color: 'blue',
      variant: 'outline',
      link: 'https://konstantinlindner.com/projects',
    },
    {
      name: 'Gallery',
      icon: 'mdi:image',
      color: 'blue',
      variant: 'outline',
      link: 'https://konstantinlindner.com/gallery',
    },
  ];

  return (
    <VStack spacing="3">
      {linkItems.map((link) => (
        <LinkItem
          key={link.name}
          link={link.link}
          name={link.name}
          icon={link.icon}
          color={link.color}
          variant={link.variant}
        />
      ))}
    </VStack>
  );
}

export default LinkList;
