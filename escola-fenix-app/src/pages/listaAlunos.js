/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Header from '../components/header';
import TableHeader from '../components/tableHeader';
import Filter from '../components/filter';
import useApi from '../useApi';

function ListaAlunos() {
  const { alunos, getAllAlunos } = useApi();

  useEffect(() => {
    getAllAlunos();
  }, [getAllAlunos]);

  return (
    <>
      <Header />
      <Box bg="gray.100" padding={50} minH="100vh">
        <Heading as="h1" size="xl" mb="6" textAlign="left">Lista de Alunos</Heading>
        <Box>
          <TableHeader
            filters={<Filter />}
            tableName="Tabela de Alunos"
            haveDownload
            haveFilter
          />
          <Table variant="striped" colorScheme="dark gray" size="md">
            <Thead>
              <Tr>
                <Th>Aluno</Th>
                <Th>Turma</Th>
                <Th>Total de Faltas</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alunos.map((aluno) => (
                <Tr key={aluno.id}>
                  <Td>{aluno.nome}</Td>
                  <Td>{aluno.turma}</Td>
                  <Td>{aluno.totalFaltas}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

export default ListaAlunos;
