import { Breadcrumb } from "@chakra-ui/react";

export default function SectionBreadcrumb({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        {items
          .flatMap((item, i) => [
            <Breadcrumb.Item key={item.title}>
              {i === items.length - 1 ? (
                <Breadcrumb.CurrentLink>{item.title}</Breadcrumb.CurrentLink>
              ) : (
                <Breadcrumb.Link href={item.href}>{item.title}</Breadcrumb.Link>
              )}
            </Breadcrumb.Item>,
            <Breadcrumb.Separator key={i} />,
          ])
          .slice(0, -1)}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
