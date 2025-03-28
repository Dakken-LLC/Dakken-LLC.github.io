import SectionBreadcrumb from "@/components/SectionBreadcrumb";
import SectionHeader from "@/components/SectionHeader";
import SectionNav from "@/components/SectionNav";
import { SkeletonText } from "@/components/ui/skeleton";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { aboutItems, historyData, memberData, profileData } from "@/constants";
import {
  Avatar,
  Card,
  DataList,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Stack my={8}>
      <SectionBreadcrumb items={[{ title: "About", href: "/about" }]} />
      <SectionHeader title="会社案内" titleEn="About Us" />
      <SectionNav items={aboutItems}></SectionNav>

      <Stack gap={16} my={16}>
        <Stack id="vision" gap={8}>
          <Heading size="3xl">企業理念</Heading>
          <VStack align="start" gap={4}>
            <SkeletonText noOfLines={2} h="40px" w="full" />
            <Stack
              w="full"
              gap={4}
              align="end"
              direction={{ base: "column", md: "row" }}
            >
              <Stack w="full" justify="space-between">
                <SkeletonText noOfLines={6} />
                <VStack align="flex-end" w="full" gap="0">
                  <Text lineHeight="shorter">合同会社DA研 代表</Text>
                  <Text fontWeight="bolder" fontSize="2xl">
                    飯田晃生
                  </Text>
                </VStack>
              </Stack>
            </Stack>
          </VStack>
        </Stack>

        <Stack id="member" gap={8}>
          <Heading size="3xl">メンバー</Heading>
          <SimpleGrid gap={4} minChildWidth={350} w="full">
            {memberData.map((data) => (
              <MemberCard key={data.name} {...data} />
            ))}
          </SimpleGrid>
        </Stack>

        <Stack id="history" gap={8}>
          <Heading size="3xl">沿革</Heading>
          <TimelineRoot maxW="400px">
            {historyData.map((item) => (
              <TimelineItem key={item.title}>
                <TimelineConnector>
                  <item.icon />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineRoot>
        </Stack>

        <Stack id="profile" gap={8}>
          <Heading size="3xl">企業概要</Heading>
          <DataList.Root orientation="horizontal">
            {profileData.map((item) => (
              <DataList.Item key={item.label}>
                <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
            ))}
          </DataList.Root>
        </Stack>
      </Stack>
    </Stack>
  );
}

function MemberCard({
  name,
  avatar,
  role,
}: {
  name: string;
  avatar: string;
  role: string;
  description: string;
}) {
  return (
    <Card.Root>
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar.Root>
            <Avatar.Fallback name={name} />
            <Avatar.Image src={avatar} alt={name} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              {name}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              {role}
            </Text>
          </Stack>
        </HStack>
        <Card.Description>
          <SkeletonText noOfLines={3} />
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
