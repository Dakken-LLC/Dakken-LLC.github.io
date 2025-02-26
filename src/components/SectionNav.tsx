import { HStack, Link, Separator, VStack } from "@chakra-ui/react";

export default function SectionNav({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <VStack>
      <Separator w="full" key="top" />
      <HStack gap={{ base: 4, lg: 8 }}>
        {items
          .flatMap((item, i) => [
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>,
            <Separator orientation="vertical" h="4" key={i} />,
          ])
          .slice(0, -1)}
      </HStack>
      <Separator w="full" key="bottom" />
    </VStack>
  );
}
