import React from "react";
import {
  Box,
  ButtonGroup,
  Collapse,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useBoolean,
} from "@chakra-ui/react";
import { SearchIcon, DownloadIcon } from '@chakra-ui/icons'

export default function TableHeader({
  tableName,
  getDownloadData,
  csvHeaders,
  csvTitle = "import.csv",
  filters,
  haveFilter = false,
  haveDownload = false,
}) {
  const [showFilter, setShowFilter] = useBoolean();

  return (
    <>
      <Flex
        mt={4}
        bg="black"
        h={12}
        borderTopRadius="md"
        align="center"
        py={2}
        px={4}
      >
        <Heading fontSize="md" color="white">
          {tableName}
        </Heading>
        <Spacer />
        <Box>
          <ButtonGroup size="sm" spacing="2" color="white">
            {haveFilter && (
              <IconButton
                onClick={setShowFilter.toggle}
                bg="red"
                icon={<SearchIcon />}
                color="white"
              />
            )}
            {haveDownload && (
              <IconButton
                getData={getDownloadData}
                headers={csvHeaders}
                filename={csvTitle}
                icon={<DownloadIcon />}
                bg="red"
                color="white"
              />
            )}
          </ButtonGroup>
        </Box>
      </Flex>
      <Collapse in={showFilter}>
        <Box p={4} bg="brand.100">
          {filters}
        </Box>
        <Box h={2} mb={2} bg="brand.200" />
      </Collapse>
    </>
  );
}
