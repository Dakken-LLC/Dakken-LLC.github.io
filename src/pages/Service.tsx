import SectionBreadcrumb from "@/components/SectionBreadcrumb";
import SectionHeader from "@/components/SectionHeader";
import SectionNav from "@/components/SectionNav";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { businessData, businessSectionData, serviceItems } from "@/constants";
import {
  Badge,
  Box,
  Button,
  Card,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  DataListRoot,
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
      <SectionBreadcrumb items={[{ title: "Service", href: "/service" }]} />
      <SectionHeader title="サービス" titleEn="Service" />
      <SectionNav items={serviceItems}></SectionNav>

      <Stack gap={16} my={16}>
        <Stack id="about" gap={8}>
          <Heading size="3xl">事業概要</Heading>
          <Text>
            データ分析、Webアプリの受注開発を基幹事業とし、その上で法人教育や動画編集など幅広く事業を展開しています。
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
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 4 }}
            alignItems="baseline"
          >
            <Heading size="3xl">Webアプリ開発</Heading>
            <Text color="fg.muted">Web Application Development</Text>
          </Stack>
          <BusinessSection {...businessSectionData["app"]} />
        </Stack>

        <Stack id="data" gap={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 4 }}
            alignItems="baseline"
          >
            <Heading size="3xl">データ分析</Heading>
            <Text color="fg.muted">Data Analysis</Text>
          </Stack>
          <BusinessSection {...businessSectionData["data"]} />
        </Stack>

        <Stack id="education" gap={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 4 }}
            alignItems="baseline"
          >
            <Heading size="3xl">法人教育</Heading>
            <Text color="fg.muted">
              Corporate Training / Business Education
            </Text>
          </Stack>
          <BusinessSection {...businessSectionData["education"]} />
        </Stack>

        <Stack id="video" gap={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 4 }}
            alignItems="baseline"
          >
            <Heading size="3xl">動画編集</Heading>
            <Text color="fg.muted">Video Editing</Text>
          </Stack>
          <BusinessSection {...businessSectionData["video"]} />
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
      {!imageSrc && (
        <Skeleton
          maxW={{ base: "100%", md: "200px" }}
          minH="200px"
          w="full"
        ></Skeleton>
      )}
      {imageSrc && (
        <Image
          objectFit="cover"
          maxW={{
            base: "100%",
            md: "200px",
          }}
          src={imageSrc}
          alt={title}
        />
      )}
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

function BusinessSection({
  title,
  description,
  imageSrc,
  detail,
  records,
}: {
  title: string;
  description: string;
  imageSrc: string;
  detail: {
    flowContents: string[];
    techStacks: {
      title: string;
      tools: string[];
    }[];
  };
  records: {
    title: string;
    description: string;
    imageSrc: string;
    keywords: string[];
    href: string;
  }[];
}) {
  return (
    <Stack>
      <Stack direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 8 }}>
        <Image
          w="full"
          maxW={{ base: "full", md: "250px" }}
          src={imageSrc}
          alt={title}
        />
        <Stack>
          <Heading size="2xl">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Stack>
      <AccordionRoot collapsible multiple>
        <AccordionItem value="tech">
          <AccordionItemTrigger cursor="pointer">
            納品までの流れと技術スタック
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={{ base: 0, md: 8 }}
            >
              <TimelineRoot flex="1">
                <Text color="fg.muted" fontSize="sm" mb={2}>
                  納品までの流れ
                </Text>
                {detail.flowContents.map((content, i) => (
                  <TimelineItem key={content} title={content}>
                    <TimelineConnector>{i + 1}</TimelineConnector>
                    <TimelineContent>
                      <TimelineTitle>{content}</TimelineTitle>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimelineRoot>
              <Stack flex="1">
                <DataListRoot>
                  {detail.techStacks.map((stack) => (
                    <DataListItem key={stack.title}>
                      <DataListItemLabel>{stack.title}</DataListItemLabel>
                      <DataListItemValue gap={1}>
                        {stack.tools.map((tool) => (
                          <Badge key={tool}>{tool}</Badge>
                        ))}
                      </DataListItemValue>
                    </DataListItem>
                  ))}
                </DataListRoot>
              </Stack>
            </Stack>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="records">
          <AccordionItemTrigger cursor="pointer">取引実績</AccordionItemTrigger>
          <AccordionItemContent>
            <Stack>
              {records.map((record) => {
                return (
                  <Stack key={record.title}>
                    <Heading size="sm" key={record.title}>
                      {record.title}
                    </Heading>
                    <SkeletonText noOfLines={2}></SkeletonText>
                  </Stack>
                );
              })}
            </Stack>
          </AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>
    </Stack>
  );
}
