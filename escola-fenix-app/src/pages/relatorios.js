import React, { useState } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Icon, Input, Flex, Select} from '@chakra-ui/react';
import { MdFileDownload, MdCancel } from 'react-icons/md';
import Header from '../components/header';
import TableHeader from '../components/tableHeader';
import Filter from '../components/filter';

function Relatorios() {
  const [filtros, setFiltros] = useState({});
  const [haveFilter, setHaveFilter] = useState(false);

  const faltas = [
    { id: 1, aluno: 'João', turma: '1º Ano', data: '01/03/2022', totalFaltas: 5 },
    { id: 2, aluno: 'Maria', turma: '2º Ano', data: '05/03/2022', totalFaltas: 8 },
    { id: 3, aluno: 'Pedro', turma: '3º Ano', data: '10/03/2022', totalFaltas: 3 },
  ];

  const handleFilter = (filtros) => {
    setFiltros(filtros);
    setHaveFilter(true);
  };

  const clearFilter = () => {
    setFiltros({});
    setHaveFilter(false);
  };

  const filteredFaltas = () => {
    return faltas.filter(falta => (
      (!filtros.aluno || falta.aluno.toLowerCase().includes(filtros.aluno.toLowerCase())) &&
      (!filtros.turma || falta.turma.toLowerCase().includes(filtros.turma.toLowerCase())) &&
      (!filtros.data || falta.data.toLowerCase().includes(filtros.data.toLowerCase()))
    ));
  };

  return (
    <>
      <Header />
      <Box bg="gray.100" padding={50} minH="100vh">
        <Heading as="h1" size="xl" mb="6" textAlign="left">Relatórios de Faltas</Heading>
        <Box>
        <TableHeader 
          filters={<Filter onSubmit={console.log("teste filtro")} />}
          tableName="Tabela de Faltas"
          haveDownload
          haveFilter
        />
        <Table variant="striped" colorScheme="dark gray" size="md">
          <Thead>
            <Tr>
              <Th>Aluno</Th>
              <Th>Turma</Th>
              <Th>Data da Falta</Th>
              <Th>Total de Faltas</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {haveFilter ? filteredFaltas().map(({ id, aluno, turma, data, totalFaltas }) => (
              <Tr key={id}>
                <Td>{aluno}</Td>
                <Td>{turma}</Td>
                <Td>{data}</Td>
                <Td>{totalFaltas}</Td>
                <Td>
                  <Button leftIcon={<Icon as={MdFileDownload} />} colorScheme="red" variant="solid" size="sm">
                    Baixar
                  </Button>
                </Td>
              </Tr>
            )) : faltas.map(({ id, aluno, turma, data, totalFaltas }) => (
              <Tr key={id}>
                <Td>{aluno}</Td>
                <Td>{turma}</Td>
                <Td>{data}</Td>
                <Td>{totalFaltas}</Td>
                <Td>
                  <Button leftIcon={<Icon as={MdCancel} />} colorScheme="red" variant="solid" size="sm">
                    Remover Falta
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </Box>
      </Box>
    </>
  );
}

export default Relatorios;
