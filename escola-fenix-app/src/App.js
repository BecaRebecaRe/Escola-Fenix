import React, { useState } from 'react';
import { Box, Input, Button, Heading, Center } from '@chakra-ui/react';
import Header from './components/header';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      bg="gray.100"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <Box
        p="6"
        bg="white"
        rounded="md"
        boxShadow="md"
        w={{ base: '90%', sm: '80%', md: '30%' }}
        mt="4"
      >
        <Box bg="#ffcbb6" p="4" mb="4" rounded="md">
          <Heading textAlign="center" mb="0">Login</Heading>
        </Box>
        <Center>
          <Box as="form" onSubmit={handleSubmit} textAlign="center">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb="4"
              isRequired
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb="4"
              isRequired
            />
            <Button type="submit" colorScheme="teal">Entrar</Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default App;
