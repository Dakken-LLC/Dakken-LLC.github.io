import SectionHeader from "@/components/SectionHeader";
import SectionNav from "@/components/SectionNav";
import { SkeletonText } from "@/components/ui/skeleton";
import { businessData, serviceItems } from "@/constants";
import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router";

export default function ServicePage() {
  return (
    <Stack my={8}>
      <SectionHeader title="サービス" titleEn="Service" />
      <SectionNav items={serviceItems}></SectionNav>

      <Stack gap={16} my={16}>
        <Stack id="about" gap={8}>
          <Heading size="3xl">事業概要</Heading>
          <Text>
            データ分析、Webアプリの受注開発を基幹事業とし、教育事業も手がけています。
            お客様のビジネス課題を解決するための最適なソリューションを提供します。
          </Text>
          <SimpleGrid
            gap={4}
            minChildWidth={{
              base: "300px",
              md: "500px",
            }}
            w="full"
          >
            {businessData.map((data) => (
              <BusinessCard key={data.title} {...data} />
            ))}
          </SimpleGrid>
        </Stack>

        <Stack id="app" gap={8}>
          <Heading size="3xl">アプリ開発</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>

        <Stack id="data" gap={8}>
          <Heading size="3xl">データ分析</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>

        <Stack id="education" gap={8}>
          <Heading size="3xl">教育</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>

        <Stack id="video" gap={8}>
          <Heading size="3xl">動画編集</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>
      </Stack>
    </Stack>
  );
}

function BusinessCard({
  title,
  description,
  imageSrc,
  keywords = [],
  href,
}: {
  title: string;
  description: string;
  imageSrc: string;
  keywords?: string[];
  href: string;
}) {
  return (
    <Card.Root
      flexDirection={{
        base: "column",
        md: "row",
      }}
      overflow="hidden"
    >
      <Image
        objectFit="cover"
        maxW={{
          base: "100%",
          md: "200px",
        }}
        src={imageSrc}
        alt={title}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <HStack mt="4" wrap="wrap">
            {keywords.map((keyword) => (
              <Badge key={keyword}>{keyword}</Badge>
            ))}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Link to={href}>
            <Button>詳細を見る</Button>
          </Link>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}
