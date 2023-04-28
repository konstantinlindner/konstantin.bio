import { Box, VStack, Center } from '@chakra-ui/react';

import Person from './components/Person';
import SocialLinkRow from './components/SocialLinkRow';
import LinkList from './components/LinkList';

function App() {
  return (
    <Box height="100vh" width="100vw" backgroundColor="white.1">
      <VStack p="6" mx="auto" spacing="5">
        <Person />
        <SocialLinkRow />
        <LinkList />
      </VStack>
    </Box>
  );
}

export default App;
