import { Box, Heading } from "@chakra-ui/react";

export default function SectionHeader({
  title,
  titleEn,
}: {
  title: string;
  titleEn: string;
}) {
  return (
    <Box textAlign="center" mb={8}>
      <Heading size="4xl">{title}</Heading>
      <Heading size="xl" color="gray.500">
        {titleEn}
      </Heading>
    </Box>
  );
}
