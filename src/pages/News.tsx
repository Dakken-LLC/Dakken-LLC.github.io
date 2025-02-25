import SectionHeader from "@/components/SectionHeader";
import SectionNav from "@/components/SectionNav";
import { Stack } from "@chakra-ui/react";

export default function NewsPage() {
  return (
    <Stack my={8}>
      <SectionHeader title="ニュース" titleEn="News" />
      <SectionNav
        items={[
          { label: "新着ニュース", href: "/news/#latest" },
          { label: "ブログ", href: "/news#blog" },
        ]}
      ></SectionNav>
    </Stack>
  );
}
