import React from 'react';
import { Box, Flex, IconButton, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box borderBottom="4px solid #530808;">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding="1rem"
        bg="black"
        color="white"
      >
        <Box>
          <img src={require('../image/logo.png')} alt="Logo" width={200} />
        </Box>
        <Flex>
          <ChakraLink
            as={Link}
            to="/"
            mr="3rem"
            color="white"
            textTransform="uppercase"
            _hover={{ textDecoration: 'underline' }}
            _focus={{ outline: 'none' }}
          >
            Dashboard
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/registroPresenca"
            mr="3rem"
            color="white"
            textTransform="uppercase"
            _hover={{ textDecoration: 'underline' }}
            _focus={{ outline: 'none' }}
          >
            Registro de Presença
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/relatorios"
            mr="3rem"
            color="white"
            textTransform="uppercase"
            _hover={{ textDecoration: 'underline' }}
            _focus={{ outline: 'none' }}
          >
            Relatórios
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/listaAlunos"
            mr="10rem"
            color="white"
            textTransform="uppercase"
            _hover={{ textDecoration: 'underline' }}
            _focus={{ outline: 'none' }}
          >
            Lista de Alunos
          </ChakraLink>
        </Flex>
        <IconButton
          aria-label="Menu"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          }
          variant="unstyled"
          colorScheme="white"
        />
      </Flex>
    </Box>
  );
};

export default Header;
