import { Container } from "@chakra-ui/react";

export default function BasePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container maxW="6xl">{children}</Container>;
}
