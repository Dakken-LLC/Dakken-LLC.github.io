import { Box, HStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Footer() {
  return (
    <Box as="footer" background="bg.inverted">
      <HStack justify="center">
        <ColorModeButton color="fg.inverted" />
      </HStack>
      <HStack justify="center" color="fg.inverted" p={4}>
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Dakken LLC.</Text>
      </HStack>
    </Box>
  );
}
