import Markup from "@/components/Markup";
import SectionBreadcrumb from "@/components/SectionBreadcrumb";
import { SkeletonText } from "@/components/ui/skeleton";
import { Stack } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ArticlePage() {
  const { slug } = useParams();
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    fetch(`/src/articles/${slug}.md`)
      .then((res) => res.text())
      .then((res) => setMarkdownText(res))
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <>
      <Stack my={8} gap={8}>
        <SectionBreadcrumb
          items={[
            { title: "Article", href: "/article" },
            { title: slug as string, href: `/article/${slug}` },
          ]}
        />
        <Suspense fallback={<SkeletonText noOfLines={20} />}>
          <Markup markdownText={markdownText} />
        </Suspense>
      </Stack>
    </>
  );
}
