import { Box, Portal } from "@chakra-ui/react";
import backgroundImageSrc from "@/assets/Japan11.png";

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
          bgSize={{ base: "contain", lg: "cover" }}
          bgPos="left"
          filter="blur(1px)"
          pos="absolute"
          top="0"
          left={{ base: "0", lg: "calc((100vw - 1024px) / 4)" }}
          w={{ base: "100vw", lg: "1024px" }}
          h="100vh"
          zIndex={-1}
        ></Box>
        <Box
          bgImage="linear-gradient(90deg, #0cb1c1, #3948b9, #224b8f)"
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
