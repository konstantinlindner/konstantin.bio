import { Icon } from '@iconify/react';
import { Link, Button } from '@chakra-ui/react';

interface LinkItemProps {
  link: string;
  name: string;
  icon: string;
  color: string;
  variant: string;
}

function LinkItem(props: LinkItemProps) {
  const { link, name, icon, color, variant } = props;

  return (
    <Link rounded="md" isExternal href={link}>
      <Button
        leftIcon={<Icon icon={icon} />}
        variant={variant}
        colorScheme={color}
        size="md"
        w={'300px'}
      >
        {name}
      </Button>
    </Link>
  );
}

export default LinkItem;
