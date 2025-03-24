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
import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態: 不透明度 0
      animate={{ opacity: 1 }} // アニメーション後: 不透明度 1
      transition={{ duration: 1 }} // アニメーションの時間: 1秒
    >
      <VStack h="calc(100svh - 80px)" justify="center" textAlign="center">
        <Spacer />
        <VStack w="100%" align={{ base: "center", lg: "end" }}>
          <Heading
            size="6xl"
            color="gray.50"
            fontFamily="Bebas Neue"
            fontWeight="light"
            letterSpacing="0.1em"
            mr={{ base: "0", lg: "-0.1em" }} // For right alignment with the text below
          >
            CHALLENGE FOR THE FUTURE
            <Box
              as="span"
              animation="blink 2.5s  infinite" // 点滅アニメーションを適用
            >
              .
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "3xl" }}
            color="gray.50"
            letterSpacing="0.1em"
            mr={{ base: "0", lg: "-0.1em" }} // For right alignment with the heading above
          >
            合同会社DA研へようこそ&nbsp;
          </Text>
        </VStack>
        <Spacer />
        <Box position="relative">
          <Box bottom="80px" animation="bounce 1.5s infinite" mb={4}>
            <SlArrowDown color="whitesmoke" size="40px" strokeWidth="5" />
          </Box>
        </Box>
      </VStack>

      <VStack my={8} gap={8}>
        <Center>
          <Text
            fontSize={{ base: "5xl", md: "6xl" }}
            textAlign="center"
            fontWeight="bold"
            bgGradient="to-r"
            bgClip="text"
            gradientFrom="cyan.400"
            gradientVia="blue.500"
            gradientTo="purple.500"
            borderBottom="4px solid"
            borderImage="linear-gradient(to right, #22D3EE, #3B82F6, #8B5CF6) 1"
            pb="2"
            style={{
              wordBreak: "keep-all",
              overflowWrap: "anywhere",
            }}
          >
            DX × データ分析で
            <wbr />
            毎日に革命を
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
    </motion.div>
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
      <Button
        bg="gray.700"
        color="white"
        fontSize="lg"
        _hover={{ bg: "#d34b4b" }}
      >
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
    <Card.Root boxShadow="md">
      <Card.Body>
        <Card.Title fontSize="2xl" fontWeight="bold">
          {title}
        </Card.Title>
        <Card.Description fontSize="lg" fontWeight="normal">
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <VStack align="start">{children}</VStack>
      </Card.Footer>
    </Card.Root>
  );
}
