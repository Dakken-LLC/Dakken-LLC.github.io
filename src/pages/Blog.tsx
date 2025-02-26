import Markup from "@/components/Markup";
import { Breadcrumb, Spacer, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BlogPage() {
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
      <Spacer h="16" />
      <Stack my={16} gap={4}>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/blog">Blog</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>{slug}</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <Markup markdownText={markdownText} />
      </Stack>
    </>
  );
}
