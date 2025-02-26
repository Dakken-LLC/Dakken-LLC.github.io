import dakkenLogoSource from "@/assets/dakken_llc_logo_3_w.png";
import { ColorModeButton } from "@/components/ui/color-mode";
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

const footerContents = [
  {
    title: "About",
    items: ["企業理念", "メンバー", "沿革", "会社概要"],
  },
  {
    title: "service",
    items: ["事業概要", "Web開発", "データ分析", "動画編集"],
  },
  {
    title: "News",
    items: ["新着情報", "ブログ"],
  },
  {
    title: "Contact",
    items: ["お問い合わせ", "資料請求", "リンク集", "部活動へ"],
  },
];

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
            {footerContents.map((content) => (
              <AccordionItem key={content.title} value={content.title} p={2}>
                <AccordionItemTrigger>{content.title}</AccordionItemTrigger>
                <AccordionItemContent>
                  <VStack align="start" fontSize={14} p={2}>
                    {content.items.map((item) => (
                      <Link href="#" color="fg.inverted" key={item}>
                        {item}
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
            {footerContents.map((content) => (
              <Row
                title={content.title}
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

function Row({ title, items }: { title: string; items: string[] }) {
  return (
    <VStack align="center">
      <Heading size="2xl">{title}</Heading>
      <VStack align="center" fontSize={13}>
        {items.map((item) => (
          <Link href="#" color="fg.inverted" key={item}>
            {item}
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}
