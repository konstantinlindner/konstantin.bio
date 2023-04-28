import { Box, VStack, Center } from '@chakra-ui/react';

import Person from './components/Person';
import SocialLinkRow from './components/SocialLinkRow';
import LinkList from './components/LinkList';

function App() {
  return (
    <Box height="100vh" width="100vw" backgroundColor="white.1">
      <Center p="6" mx-auto>
        <VStack>
          <Person />
          <SocialLinkRow />
          <LinkList />
        </VStack>
      </Center>
    </Box>
  );
}

export default App;
