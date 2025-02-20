import { Box, Portal, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router";
import heroImageSrc from "@/assets/hero.webp";

export default function HeroLayout() {
  return (
    <>
      <Portal>
        <Box
          bgImage={`url(${heroImageSrc})`}
          bgSize="cover"
          pos="absolute"
          top="0"
          left="0"
          w="100vw"
          h="20vh"
        ></Box>
      </Portal>
      <Spacer h="20vh" />
      <Outlet />
    </>
  );
}
