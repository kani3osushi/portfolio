"use client";

import { useTimeline } from "@/hooks/useTimeline";
import { VStack, Spinner, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TimelinePage = () => {
  const { data, isLoading, error } = useTimeline();

  if (isLoading) return <Spinner />;
  if (error) return <Text>エラーが発生しました: {error.message}</Text>;

  return (
    <VStack align="stretch">
      {data?.map((event) => (
        <MotionBox
          key={event.id}
          p={4}
          borderWidth={1}
          borderRadius="md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            {event.title}
          </Text>
          <Text>{event.description}</Text>
        </MotionBox>
      ))}
    </VStack>
  );
};

export default TimelinePage;
