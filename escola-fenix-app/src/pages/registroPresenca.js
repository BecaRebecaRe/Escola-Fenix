import React, { useState } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Icon, Flex, Select, ButtonGroup } from '@chakra-ui/react';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import Header from '../components/header';
import TableHeader from '../components/tableHeader';

function RegistroPresenca() {
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  const [alunos, setAlunos] = useState([]);

  const turmas = ['1º Ano', '2º Ano', '3º Ano'];
  const faltas = [
    { id: 1, aluno: 'João', turma: '1º Ano', presente: null },
    { id: 2, aluno: 'Maria', turma: '1º Ano', presente: null },
    { id: 3, aluno: 'Pedro', turma: '1º Ano', presente: null },
    { id: 11, aluno: 'Gabriela', turma: '2º Ano', presente: null },
    { id: 12, aluno: 'Rafael', turma: '2º Ano', presente: null },
    { id: 13, aluno: 'Camila', turma: '2º Ano', presente: null },
    { id: 21, aluno: 'Rodrigo', turma: '3º Ano', presente: null },
    { id: 22, aluno: 'Luana', turma: '3º Ano', presente: null },
    { id: 23, aluno: 'Gustavo', turma: '3º Ano', presente: null },
  ];

  console.log(faltas)
  
  

  const handleTurmaChange = (event) => {
    const turma = event.target.value;
    setTurmaSelecionada(turma);
    setAlunos(faltas.filter(aluno => aluno.turma === turma));
  };

  const handlePresenca = (id) => {
    setAlunos(alunos.map(aluno => {
      if (aluno.id === id) {
        return {
          ...aluno,
          presente: true,
        };
      }
      return aluno;
    }));
  };

  const handleFalta = (id) => {
    setAlunos(alunos.map(aluno => {
      if (aluno.id === id) {
        return {
          ...aluno,
          presente: false,
        };
      }
      return aluno;
    }));
  };

  const encerrarChamada = () => {
    // Implementar lógica para encerrar a chamada
    console.log('Chamada encerrada');
  };

  return (
    <>
      <Header />
      <Box bg="gray.100" padding={50} minH="100vh">
        <Heading as="h1" size="xl" mb="6" textAlign="left">Registro de Presença</Heading>
        <Box>
          <Flex mb="4">
          <Select placeholder="Selecione a turma" onChange={handleTurmaChange} borderColor="gray.800">
            {turmas.map(turma => (
              <option key={turma} value={turma}>{turma}</option>
            ))}
          </Select>
          </Flex>
          {turmaSelecionada && (
            <>
              <TableHeader tableName="Tabela de Presença" />
              <Table variant="striped" colorScheme="dark gray" size="md">
                <Thead>
                  <Tr>
                    <Th>Aluno</Th>
                    <Th>Presença</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {alunos.map(({ id, aluno, presente }) => (
                    <Tr key={id}>
                      <Td>{aluno}</Td>
                      <Td>
                      <ButtonGroup>
                      <Button
                        bg={presente === true ? 'green' : '#00800052'}
                        color={presente === true ? 'white' : 'gray'}
                        border='0.5px solid gray'
                        _hover={{ bg: 'green', color: 'white' }}
                        _active={{ bg: 'green' }}
                        leftIcon={<Icon as={MdCheckCircle} />}
                        colorScheme="green"
                        variant="solid"
                        size="sm"
                        onClick={() => handlePresenca(id)}
                      >
                        Presente
                      </Button>
                      <Button
                        bg={presente === false ? 'red' : '#ff000052'}
                        color={presente === false ? 'white' : 'gray'}
                        border='0.5px solid gray'
                        _hover={{ bg: 'red', color: 'white' }}
                        _active={{ bg: 'red' }}
                        leftIcon={<Icon as={MdCancel} />}
                        colorScheme="red"
                        variant="solid"
                        size="sm"
                        onClick={() => handleFalta(id)}
                      >
                        Falta
                      </Button>
                      </ButtonGroup>
                    </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Button mt="4" colorScheme="blue" onClick={encerrarChamada}>
                Encerrar Chamada
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default RegistroPresenca;
