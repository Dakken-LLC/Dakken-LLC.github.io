import { Box, HStack, Link, Separator, VStack } from "@chakra-ui/react";

export default function SectionNav({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  return (
    <VStack>
      <Separator w="full" key="top" />
      <Box w="full" overflowX="auto" scrollbar="hidden" px={2}>
        <HStack
          justify="center"
          gap={{ base: 4, lg: 8 }}
          whiteSpace="nowrap"
          minWidth="max-content"
        >
          {items
            .flatMap((item, i) => [
              <Link key={item.title} href={item.href}>
                {item.title}
              </Link>,
              <Separator orientation="vertical" h="4" key={i} />,
            ])
            .slice(0, -1)}
        </HStack>
      </Box>
      <Separator w="full" key="bottom" />
    </VStack>
  );
}
