import SectionHeader from "@/components/SectionHeader";
import SectionNav from "@/components/SectionNav";
import { SkeletonText } from "@/components/ui/skeleton";
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

const businessData = [
  {
    title: "アプリ開発",
    description: "Webアプリケーションの受注開発を行います。",
    imageSrc:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    keywords: ["AWS", "Python", "TypeScript", "Next.js", "Quasar"],
    href: "/services#webapp",
  },
  {
    title: "データ分析",
    description: "データ分析業務を請け負います。",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww",
    keywords: [
      "Python",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
      "Jupyter",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
    href: "/services#data-analysis",
  },
  {
    title: "教育",
    description: "プログラミング / データ分析教育を行います。",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    keywords: ["Python", "scikit-learn"],
    href: "/services#education",
  },
  {
    title: "動画編集",
    description: "字幕起こし、編集、動画制作を行います。",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBlZGl0aW5nfGVufDB8fDB8fHww",
    keywords: ["Premiere Pro", "After Effects"],
    href: "/services#video-editing",
  },
];

export default function ServicePage() {
  return (
    <Stack my={8}>
      <SectionHeader title="サービス" titleEn="Service" />
      <SectionNav
        items={[
          { label: "事業概要", href: "/services#about" },
          { label: "アプリ開発", href: "/services#webapp" },
          { label: "データ分析", href: "/services#data-analysis" },
          { label: "教育", href: "/services#education" },
        ]}
      ></SectionNav>

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

        <Stack id="webapp" gap={8}>
          <Heading size="3xl">アプリ開発</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>

        <Stack id="data-analysis" gap={8}>
          <Heading size="3xl">データ分析</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>

        <Stack id="education" gap={8}>
          <Heading size="3xl">教育</Heading>
          <SkeletonText noOfLines={10}></SkeletonText>
        </Stack>

        <Stack id="video-editing" gap={8}>
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
