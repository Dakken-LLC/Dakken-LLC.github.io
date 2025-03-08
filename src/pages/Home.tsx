import { navigationItems } from "@/constants";
import {
  Box,
  Button,
  Card,
  Center,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <VStack h="calc(100svh - 80px)" justify="center">
        <Spacer />
        <VStack w="100%" align={{ base: "center", lg: "end" }}>
          <Heading
            size="5xl"
            color="gray.50"
            fontFamily="Bebas Neue"
            letterSpacing="0.1em"
            mr={{ base: "0", lg: "-0.1em" }} // For right alignment with the text below
          >
            CHALLENGE FOR THE FUTURE
          </Heading>
          <Text
            fontSize="lg"
            color="gray.50"
            fontFamily="Noto Sans JP Variable"
            letterSpacing="0.1em"
            mr={{ base: "0", lg: "-0.1em" }} // For right alignment with the heading above
          >
            合同会社DA研
          </Text>
        </VStack>
        <Spacer />
        <Box position="relative">
          <Box
            position="absolute"
            bottom="100px"
            left="50%"
            transform="translateX(-50%)"
            animation="bounce 1.5s infinite"
          >
            <SlArrowDown color="whitesmoke" size="30px" />
          </Box>
        </Box>
      </VStack>

      <VStack my={8} gap={8}>
        <Center>
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            textUnderlineOffset="0.3em"
            textDecoration="underline"
            bgGradient="to-r"
            bgClip="text"
            gradientFrom="cyan.400"
            gradientVia="blue.500"
            gradientTo="purple.500"
          >
            データの力で未来を切り拓く
          </Text>
        </Center>
        <Center>
          <Text fontSize="md">
            合同会社DA研は、兵庫県立大学発のベンチャー企業です。
            大学の講義で学んだデータ分析手法やプログラミング技術、AI・機械学習の知識を応用し、皆様のビジネス課題を解決します。
            データ分析に留まらず、Web アプリ開発や動画編集・3D
            モデリングなどを通じて、幅広いサービスを提供します。
          </Text>
        </Center>
      </VStack>

      <SimpleGrid gap={4} my={8} minChildWidth={{ base: "100%", lg: "500px" }}>
        {navigationItems.map((content) => (
          <MyCard
            key={content.title}
            title={content.title}
            description={content.description}
          >
            {content.items.map((item) => (
              <LinkButton key={item.title} name={item.title} href={item.href} />
            ))}
          </MyCard>
        ))}
      </SimpleGrid>
    </>
  );
}

type LinkButtonProps = {
  name: string;
  href: string;
  target?: string;
};

function LinkButton({ name, href, target }: LinkButtonProps) {
  return (
    <Link to={href} target={target}>
      <Button>
        {name}
        <GoChevronRight />
      </Button>
    </Link>
  );
}

type MyCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function MyCard({ title, description, children }: MyCardProps) {
  return (
    <Card.Root>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <VStack align="start">{children}</VStack>
      </Card.Footer>
    </Card.Root>
  );
}
