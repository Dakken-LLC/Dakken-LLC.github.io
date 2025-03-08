import heroImageSrc from "@/assets/hero.webp";
import { Box, Portal, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function HeroLayout() {
  return (
    <>
      <Portal>
        <Box
          bgImage={`url(${heroImageSrc})`}
          bgSize="cover"
          bgPos="center"
          pos="absolute"
          top="0"
          left="0"
          w="100vw"
          h="20vh"
        ></Box>
      </Portal>
      <Spacer h="hero-skip" />
      <Outlet />
    </>
  );
}
