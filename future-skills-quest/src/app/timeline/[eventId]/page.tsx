"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, VStack, Text, Button, Spinner } from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";

const supabase = createClientComponentClient<Database>();

const EventChoicesPage = ({ params }: { params: { eventId: string } }) => {
  const { eventId } = params;
  const [choices, setChoices] = useState<Database["public"]["choices"][]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchChoices = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("choices")
        .select("*")
        .eq("event_id", eventId);

      if (error) {
        console.error("Error fetching choices:", error);
      } else {
        setChoices(data);
      }
      setLoading(false);
    };

    fetchChoices();
  }, [eventId]);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>選択肢を読み込んでいます...</Text>
      </Box>
    );
  }

  return (
    <VStack spacing={6} p={4}>
      <Text fontWeight="bold">選択肢を選んでください</Text>
      {choices.map((choice) => (
        <Button
          key={choice.id}
          w="100%"
          colorScheme="blue"
          onClick={() => router.push(`/skills/${choice.skill_id}`)}
        >
          {choice.option}
        </Button>
      ))}
    </VStack>
  );
};

export default EventChoicesPage;
