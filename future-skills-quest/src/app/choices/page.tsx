"use client";

import { useChoices } from "@/hooks/useChoices";
import { VStack, Spinner, Box, Text, Button } from "@chakra-ui/react";

const ChoicesPage = ({ eventId }: { eventId: number }) => {
  const { data, isLoading, error } = useChoices(eventId);
  console.log(data);

  if (isLoading) return <Spinner />;
  if (error) return <Text>エラーが発生しました: {error.message}</Text>;

  return (
    <VStack align="stretch">
      <h3>テスト</h3>
      {data?.map((choice) => (
        <Box key={choice.id} p={4} borderWidth={1} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">
            {choice.option}
          </Text>
          <Button
            colorScheme="teal"
            onClick={() => console.log(`選択: ${choice.id}`)}
          >
            この選択を進む
          </Button>
        </Box>
      ))}
    </VStack>
  );
};

export default ChoicesPage;
