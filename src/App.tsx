import { Box, VStack } from '@chakra-ui/react';
import Person from './components/Person';
import SocialLinkRow from './components/SocialLinkRow';
import LinkList from './components/LinkList';
import ColorModeSwitcher from './components/ColorModeSwitcher';

function App() {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" pr="5" pt="5">
        <ColorModeSwitcher />
      </Box>
      <VStack mx="auto" spacing="5">
        <Person />
        <SocialLinkRow />
        <LinkList />
      </VStack>
    </Box>
  );
}

export default App;
