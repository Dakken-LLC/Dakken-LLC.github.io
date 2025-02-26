import articles from "@/articles/meta.json";
import SectionHeader from "@/components/SectionHeader";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const MAX_PAGE_SIZE = 6;
const MAX_AUTHOR_DISPLAY = 2;

export default function BlogIndexPage() {
  const [page, setPage] = useState(1);

  return (
    <Stack my={8}>
      <SectionHeader title="ブログ" titleEn="Blog" />

      <SimpleGrid id="latest" minChildWidth={330} gap={4}>
        {articles
          .slice(page * MAX_PAGE_SIZE - MAX_PAGE_SIZE, page * MAX_PAGE_SIZE)
          .map((article) => (
            <ArticleCard {...article} key={article.title} />
          ))}
      </SimpleGrid>

      <PaginationRoot
        count={articles.length}
        pageSize={MAX_PAGE_SIZE}
        page={page}
      >
        <HStack justify="center" mt={8}>
          <PaginationPrevTrigger
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          />
          <PaginationItems />
          <PaginationNextTrigger
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          />
        </HStack>
      </PaginationRoot>
    </Stack>
  );
}

function ArticleCard({
  title,
  description,
  icon,
  author,
  tags,
  publishedData,
  slug,
}: {
  title: string;
  description: string;
  icon: string;
  author: {
    name: string;
    avatar: string;
  }[];
  tags: string[];
  publishedData: string;
  editedData: string;
  slug: string;
}) {
  return (
    <Card.Root>
      <HStack justify="center" height={36}>
        <Text fontSize="5xl">{icon}</Text>
      </HStack>
      <Card.Body>
        <Box position="relative" textAlign="right">
          <AvatarGroup size="sm" position="absolute" right={0} bottom={-9}>
            {author.slice(0, MAX_AUTHOR_DISPLAY).map((data) => (
              <Avatar.Root key={data.name}>
                <Avatar.Fallback name={data.name} />
                <Avatar.Image src={data.avatar} alt={data.name} />
              </Avatar.Root>
            ))}
            {author.length > MAX_AUTHOR_DISPLAY && (
              <Avatar.Root variant="solid">
                <Avatar.Fallback>
                  +{author.length - MAX_AUTHOR_DISPLAY}
                </Avatar.Fallback>
              </Avatar.Root>
            )}
          </AvatarGroup>
        </Box>
        <Text fontSize="xs" color="gray.500">
          {publishedData}
        </Text>
        <Card.Title zIndex="banner">{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <HStack mt="4" wrap="wrap">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Link href={`/blog/${slug}`} w="full">
          <Button w="full">Read more</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
