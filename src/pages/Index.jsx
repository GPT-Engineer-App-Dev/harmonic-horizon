import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>The Rock Legends Tour</Heading>
          <Text fontSize="xl">Join us on a journey through sound across 10 cities!</Text>
        </Box>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MHx8fHwxNzE0OTg2MTEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Concert Crowd" />
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="center">
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
            Buy Tickets
          </Button>
          <Button colorScheme="gray" variant="outline">
            Learn More
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
