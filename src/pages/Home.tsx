import { Link } from "react-router";
import {
  Text,
  Heading,
  Center,
  SimpleGrid,
  Stack,
  VStack,
  Button,
  Card,
} from "@chakra-ui/react";

import { GoChevronRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

export default function HomePage() {
  return (
    <>
      <VStack h="100vh" justify="center">
        <VStack w="100%" align={{ base: "center", lg: "end" }}>
          <Heading size="5xl" color="gray.50">
            CHALLENGE FOR THE FUTURE
          </Heading>
          <Text fontSize="lg" color="gray.50">
            合同会社DA研
          </Text>
        </VStack>
        <SlArrowDown color="whitesmoke" size="30px" />
      </VStack>

      <VStack my={8} gap={8}>
        <Center>
          <Text
            fontSize="3xl"
            textUnderlinePosition={"under"}
            textUnderlineOffset={"0.2em"}
            textDecoration={"underline"}
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
        <MyCard title="ABOUT" description="合同会社DA研について">
          <LinkButton name="会社概要" href="#"></LinkButton>
          <LinkButton name="沿革" href="#"></LinkButton>
          <LinkButton name="事業概要" href="#"></LinkButton>
        </MyCard>
        <MyCard title="SERVICE" description="合同会社DA研のサービス">
          <LinkButton name="WEBアプリ開発" href="#"></LinkButton>
          <LinkButton name="データ分析" href="#"></LinkButton>
          <LinkButton name="動画編集・3Dモデリング" href="#"></LinkButton>
        </MyCard>
        <MyCard title="NEWS" description="新着情報">
          <LinkButton name="新着情報" href="#"></LinkButton>
          <LinkButton name="DA研のブログ" href="#"></LinkButton>
        </MyCard>
        <MyCard title="CONTACT" description="お問い合わせ">
          <LinkButton name="お問い合わせ" href="/contact"></LinkButton>
          <LinkButton name="資料請求" href="/contact"></LinkButton>
          <LinkButton
            name="部活動へ"
            href="https://uoh-dakken.com"
            target="_blank"
          ></LinkButton>
        </MyCard>
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
      <Button as="a">
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
        <Stack align="start">{children}</Stack>
      </Card.Footer>
    </Card.Root>
  );
}
