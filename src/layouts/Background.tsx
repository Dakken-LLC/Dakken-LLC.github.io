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
          filter="blur(1px)"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPos="left"
          pos="absolute"
          top="70px"
          left={{ base: "0", lg: "calc((100% - 1024px) / 4)" }}
          w="min(100%, 1024px)"
          h="90svh"
          zIndex={-1}
        ></Box>
        <Box
          animation="gradient 15s ease infinite"
          bgImage="linear-gradient(0deg, #0cb1c1, #3948b9, #224b8f)"
          bgSize="100% 150%"
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
