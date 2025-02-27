import Markup from "@/components/Markup";
import { SkeletonText } from "@/components/ui/skeleton";
import { Breadcrumb, Stack } from "@chakra-ui/react";
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
      <Stack my={16} gap={4}>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/article">Article</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>{slug}</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <Suspense fallback={<SkeletonText noOfLines={20} />}>
          <Markup markdownText={markdownText} />
        </Suspense>
      </Stack>
    </>
  );
}
