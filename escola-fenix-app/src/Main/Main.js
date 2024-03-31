import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, Flex, Spacer, Text, List, ListItem, Link } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../components/header';

function Main() {
  // Dados de exemplo para exibir no dashboard
  const totalAlunos = 250;
  const totalProfessores = 20;
  const faltasRegistradas = 120;
  const porcentagemFaltas = ((faltasRegistradas / totalAlunos) * 100).toFixed(2);

  const data = [
    { name: 'Jan', faltas: 10 },
    { name: 'Fev', faltas: 15 },
    { name: 'Mar', faltas: 8 },
    { name: 'Abr', faltas: 12 },
    { name: 'Mai', faltas: 20 },
    { name: 'Jun', faltas: 18 },
  ];

  const ultimasFaltas = [
    { aluno: 'João', data: '15/03/2024' },
    { aluno: 'Maria', data: '20/03/2024' },
    { aluno: 'Pedro', data: '25/03/2024' },
  ];

  return (
    <>
    <Header></Header>
    <Box bg="gray.100" p="6" minH="100vh">
      <Heading as="h1" size="xl" mb="6" textAlign="center">Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
        <Stat bg="teal.400" p="4" borderRadius="md" color="white">
          <Flex alignItems="center">
            <Spacer />
            <Box textAlign="right">
              <StatLabel>Total de Alunos</StatLabel>
              <StatNumber>{totalAlunos}</StatNumber>
            </Box>
          </Flex>
        </Stat>
        <Stat bg="orange.400" p="4" borderRadius="md" color="white">
          <Flex alignItems="center">
            <Spacer />
            <Box textAlign="right">
              <StatLabel>Total de Professores</StatLabel>
              <StatNumber>{totalProfessores}</StatNumber>
            </Box>
          </Flex>
        </Stat>
        <Stat bg="red.400" p="4" borderRadius="md" color="white">
          <Flex alignItems="center">
            <Spacer />
            <Box textAlign="right">
              <StatLabel>Faltas Registradas</StatLabel>
              <StatNumber>{faltasRegistradas}</StatNumber>
              <StatHelpText>Porcentagem de Faltas: {porcentagemFaltas}%</StatHelpText>
            </Box>
          </Flex>
        </Stat>
      </SimpleGrid>
      <Box mt="50">
        <Heading as="h2" size="lg" mb="4">Evolução de Faltas</Heading>
        <ResponsiveContainer width="50%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="faltas" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box mt="8">
        <Heading as="h2" size="lg" mb="4">Últimas Faltas Registradas</Heading>
        <List spacing={3}>
          {ultimasFaltas.map((falta, index) => (
            <ListItem key={index}>
              <Text><strong>{falta.aluno}</strong> - {falta.data}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
    </>
  );
}

export default Main;
