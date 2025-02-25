import SectionHeader from "@/components/SectionHeader";
import SectionNav from "@/components/SectionNav";
import { Stack } from "@chakra-ui/react";

export default function ServicePage() {
  return (
    <Stack my={8}>
      <SectionHeader title="サービス" titleEn="Service" />
      <SectionNav
        items={[
          { label: "事業概要", href: "/services#about" },
          { label: "アプリ開発", href: "/services#webapp" },
          { label: "データ分析", href: "/service#data-analysis" },
          { label: "動画編集", href: "/services#video-editing" },
        ]}
      ></SectionNav>
    </Stack>
  );
}
