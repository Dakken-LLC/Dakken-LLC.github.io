import dakkenLogoSource from "@/assets/dakken_llc_logo_3_w.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import { navigationItems } from "@/constants";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Separator,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiGithubLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <Box
      as="footer"
      background="bg.inverted"
      color="fg.inverted"
      paddingTop={5}
      borderTopWidth={5}
      borderColor="red"
    >
      <Stack
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justify="center"
        align={{
          base: "start",
          md: "stretch",
        }}
        gap={{
          base: 0,
          md: 8,
        }}
        m={4}
      >
        <>
          <Accordion.Root
            collapsible
            display={{
              base: "block",
              md: "none",
            }}
            order={{
              base: 2,
              md: 0,
            }}
          >
            {navigationItems.map((content) => (
              <AccordionItem key={content.title} value={content.title} p={2}>
                <AccordionItemTrigger>{content.titleEn}</AccordionItemTrigger>
                <AccordionItemContent>
                  <VStack align="start" fontSize={14} p={2}>
                    {content.items.map((item) => (
                      <Link
                        href={item.href}
                        color="fg.inverted"
                        key={item.title}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </VStack>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </Accordion.Root>
          <HStack
            gap={6}
            align="start"
            order={{
              base: 2,
              md: 0,
            }}
            display={{
              base: "none",
              md: "flex",
            }}
          >
            {navigationItems.map((content) => (
              <Row
                title={content.titleEn}
                items={content.items}
                key={content.title}
              />
            ))}
          </HStack>
        </>
        <Separator
          orientation={{
            base: "horizontal",
            md: "vertical",
          }}
          order="1"
        />
        <VStack align="center" order={{ base: 0, md: 2 }}>
          <Image src={dakkenLogoSource} alt="DAkken" width="180px" />
          <HStack justify="center">
            <ColorModeButton
              color="fg.inverted"
              background="bg.inverted"
              rounded="full"
            />
            <IconButton
              aria-label="GitHub"
              background="bg.inverted"
              rounded="full"
            >
              <RiGithubLine />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              background="bg.inverted"
              rounded="full"
            >
              <RiInstagramLine />
            </IconButton>
            <IconButton
              aria-label="X(Twitter)"
              background="bg.inverted"
              rounded="full"
            >
              <RiTwitterXLine />
            </IconButton>
          </HStack>
        </VStack>
      </Stack>

      <HStack justify="center" p={4}>
        <Text fontSize="sm">&copy; {new Date().getFullYear()} DAkken LLC.</Text>
      </HStack>
    </Box>
  );
}

function Row({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <VStack align="center" flex={1}>
      <Heading size="2xl">{title}</Heading>
      <VStack align="center" fontSize={13}>
        {items.map((item) => (
          <Link href={item.href} color="fg.inverted" key={item.title}>
            {item.title}
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}
