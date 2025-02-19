import { Container } from "@chakra-ui/react";

export default function BasePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      // 子要素の BackgroundLayout で position: absolute を指定したため、
      // 親要素の position を (デフォルトの relative から) initial に設定しています
      position="initial"
      maxW="6xl"
    >
      {children}
    </Container>
  );
}
