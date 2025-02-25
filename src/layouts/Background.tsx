import backgroundImageSrc from "@/assets/background.webp";
import { Box, Portal } from "@chakra-ui/react";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Portal>
        <Box
          bgImage={`url(${backgroundImageSrc})`}
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPos="left"
          pos="absolute"
          top="0"
          left={{ base: "0", lg: "calc((100vw - 1024px) / 4)" }}
          w="min(100vw, 1024px)"
          h="100vh"
          zIndex={-1}
        ></Box>
        <Box
          animation="gradient 15s ease infinite"
          bgImage="linear-gradient(90deg, #0cb1c1, #3948b9, #224b8f)"
          bgSize="200%"
          pos="absolute"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          zIndex={-2}
        ></Box>
      </Portal>
      {children}
    </>
  );
}
