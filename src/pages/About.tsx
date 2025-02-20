import { Stack, DataList, Heading } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";

import { IoAccessibility } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";

const stats = [
  { label: "法人名", value: "合同会社DA研" },
  { label: "法人名ふりがな", value: "でぃーえーけん" },
  { label: "代表者名", value: "平野徳麻" },
  { label: "資本金", value: "2000円" },
  { label: "従業員数", value: "6名" },
  { label: "設立年月日", value: "2024年9月1日" },
  {
    label: "所在地",
    value: "兵庫県神戸市須磨区妙法寺字谷野１５４番地ビラ妙法寺Ｃ棟１０１号室",
  },
  {
    label: "事業内容",
    value: "データ分析、Webアプリ開発、動画編集・3Dモデリング",
  },
];

const timelineItems = [
  {
    title: "会社設立",
    description: "1st September 2024",
    icon: IoAccessibility,
  },
  {
    title: "代表交代",
    description: "1st April 2025",
    icon: LiaExchangeAltSolid,
  },
];

export default function AboutPage() {
  return (
    <Stack py={8}>
      <Heading size="4xl">About Us</Heading>

      <Stack my={12} gap={8}>
        <Heading size="xl" id="profile">
          会社概要
        </Heading>
        <DataList.Root orientation="horizontal">
          {stats.map((item) => (
            <DataList.Item key={item.label}>
              <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
              <DataList.ItemValue>{item.value}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Stack>

      <Stack my={6} gap={8}>
        <Heading size="xl" id="history">
          沿革
        </Heading>
        <TimelineRoot maxW="400px">
          {timelineItems.map((item) => (
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
    </Stack>
  );
}
