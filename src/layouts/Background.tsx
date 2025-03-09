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
          left={{ base: "0", lg: "calc((100% - 1024px) / 4)" }}
          w="min(100%, 1024px)"
          h="100svh"
          zIndex={-1}
        ></Box>
        <Box
          animation="gradient 18s ease infinite"
          bgImage="linear-gradient(0deg, #0cb1c1, #3948b9, #224b8f)"
          bgSize="180% 180%"
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100svh"
          zIndex={-2}
        ></Box>
      </Portal>
      {children}
    </>
  );
}
