import { Box, Button, VStack, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const HomePage = () => {
  return (
    <VStack
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(to-b, blue.100, blue.300)"
      p={4}
    >
      <Box textAlign="center">
        <Heading size="2xl" mb={4}>
          未来無駄スキル冒険譚
        </Heading>
        <Text fontSize="lg" color="gray.700">
          あなたの未来の履歴書を冒険して、ユニークなスキルを集めよう！
        </Text>
      </Box>

      <Button colorScheme="teal" size="lg" boxShadow="lg">
        <Link href="./timeline">冒険を始める</Link>
      </Button>
    </VStack>
  );
};

export default HomePage;
