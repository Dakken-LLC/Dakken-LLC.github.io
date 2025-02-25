import { HStack, Link, Separator, VStack } from "@chakra-ui/react";

export default function SectionNav({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <VStack>
      <Separator w="full" />
      <HStack gap={{ base: 4, lg: 8 }}>
        {items.map((item) => (
          <>
            {items.indexOf(item) > 0 && (
              <Separator orientation="vertical" h="4" />
            )}
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          </>
        ))}
      </HStack>
      <Separator w="full" />
    </VStack>
  );
}
