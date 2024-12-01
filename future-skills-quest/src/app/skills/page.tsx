"use client";

import { useSkills } from "@/hooks/useSkills";
import { VStack, Spinner, Box, Text } from "@chakra-ui/react";

const SkillsPage = () => {
  const { data, isLoading, error } = useSkills();

  if (isLoading) return <Spinner />;
  if (error) return <Text>エラーが発生しました: {error.message}</Text>;

  return (
    <VStack align="stretch">
      {data?.map((skill) => (
        <Box key={skill.id} p={4} borderWidth={1} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">
            {skill.title}
          </Text>
          <Text>{skill.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default SkillsPage;
