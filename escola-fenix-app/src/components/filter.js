import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

function Filter() {
  const [filterData, setFilterData] = useState({
    aluno: '',
    turma: '',
    dataFalta: '',
    totalFaltas: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  };

  const handleSearch = () => {
    // Implementar a lógica de pesquisa aqui
  };

  const handleResetFilters = () => {
    setFilterData({
      aluno: '',
      turma: '',
      dataFalta: '',
      totalFaltas: '',
    });
  };

  return (
    <Box
      margin={-4} 
      borderBottom="1px solid black" 
      borderLeft="1px solid black" 
      borderRight="1px solid black" 
      borderBottomRadius={5} 
      paddingRight={30}
      paddingLeft={30}
      paddingTop={2}
      >
      <Flex wrap="wrap" mb={4} justifyContent="center">
        <FormControl
          w={{ base: '100%', sm: '50%', md: '25%' }}
          p={2}
        >
          <FormLabel htmlFor="aluno">Aluno</FormLabel>
          <Input
            placeholder="Filtrar por Aluno"
            border="0.5px solid gray"
            name="aluno"
            onChange={handleFilterChange}
            value={filterData.aluno}
          />
        </FormControl>
        <FormControl
          w={{ base: '100%', sm: '50%', md: '25%' }}
          p={2}
        >
          <FormLabel htmlFor="turma">Turma</FormLabel>
          <Input
            placeholder="Filtrar por Turma"
            border="0.5px solid gray"
            name="turma"
            onChange={handleFilterChange}
            value={filterData.turma}
          />
        </FormControl>
        <FormControl
          w={{ base: '100%', sm: '50%', md: '25%' }}
          p={2}
        >
          <FormLabel htmlFor="dataFalta">Data da Falta</FormLabel>
          <Input
            placeholder="Filtrar por Data da Falta"
            border="0.5px solid gray"
            name="dataFalta"
            onChange={handleFilterChange}
            value={filterData.dataFalta}
          />
        </FormControl>
        <FormControl
          w={{ base: '100%', sm: '50%', md: '25%' }}
          p={2}
        >
          <FormLabel htmlFor="totalFaltas">Total de Faltas</FormLabel>
          <Input
            placeholder="Filtrar por Total de Faltas"
            border="0.5px solid gray"
            name="totalFaltas"
            onChange={handleFilterChange}
            value={filterData.totalFaltas}
          />
        </FormControl>
        <Box paddingBottom={2} marginTop={-2}>
          <ButtonGroup spacing="6">
            <Button
              h={10}
              mt={8}
              size="sm"
              onClick={handleSearch}
              border="1px solid black"
            >
              Filtrar
            </Button>
            <Button
              h={10}
              mt={8}
              size="sm"
              onClick={handleResetFilters}
              border="1px solid black"
            >
              Limpar Filtros
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  );
  
}

export default Filter;
